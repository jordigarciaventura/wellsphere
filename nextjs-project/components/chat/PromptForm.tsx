"use client";

import UserMessage from "@/components/chat/UserMessage";
import { cn } from "@/lib/utils";
import type { AI } from "@/providers/AI";
import type { UIState, UIStateElement } from "@/types/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, TextField } from "@mui/material";
import { useActions, useUIState } from "ai/rsc";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const formSchema = z.object({
  prompt: z.string(),
});

interface Props {
  className?: string;
}

export default function PromptForm({ className }: Props) {
  const { submitUserMessage } = useActions<typeof AI>();
  const [_, setUIState] = useUIState<typeof AI>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    const prompt = data.prompt;
    form.setValue("prompt", "");

    const userMessageId = uuidv4();

    console.log("PromptForm handleSubmit", { prompt, userMessageId });

    // Optimistically add user message UI
    setUIState((currentUIState: UIState) => [
      ...currentUIState,
      {
        id: userMessageId,
        display: <UserMessage content={prompt} />,
      } as UIStateElement,
    ]);

    // Submit and get response message
    const assistantMessageId = uuidv4();

    const responseMessage = await submitUserMessage({
      prompt,
      userMessageId,
      assistantMessageId,
    });

    setUIState((currentUIState) => [...currentUIState, responseMessage]);
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className={cn(
        "m-2 mx-auto flex w-full max-w-lg items-center justify-center gap-2",
        className,
      )}
    >
      <TextField
        label="Ask anything"
        multiline
        rows={1}
        {...form.register("prompt")}
        className="w-full"
      />
      <IconButton aria-label="Send" type="submit" className="size-14">
        <SendIcon />
      </IconButton>
    </form>
  );
}
