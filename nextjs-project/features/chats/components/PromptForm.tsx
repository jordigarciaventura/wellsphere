"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import UserMessage from "@/features/chats/components/UserMessage";
import type { UIState, UIStateElement } from "@/features/chats/types/ai";
import type { AI } from "@/features/chats/utils/provider";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActions, useUIState } from "ai/rsc";
import { Send } from "lucide-react";
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
      <Textarea placeholder="Ask anything" {...form.register("prompt")} />
      <Button variant="outline" size="icon" type="submit">
        <Send />
      </Button>
    </form>
  );
}
