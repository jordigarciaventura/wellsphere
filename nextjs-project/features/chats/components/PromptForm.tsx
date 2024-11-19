"use client";

import { AutosizeTextarea } from "@/components/ui/autosize-textarea";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import UserMessage from "@/features/chats/components/UserMessage";
import type { UIState, UIStateElement } from "@/features/chats/types/ai";
import type { AI } from "@/features/chats/utils/provider";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
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
    const prompt = data.prompt.trim();
    if (!prompt) return; // Prevent submitting empty prompts
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

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent a new line
      form.handleSubmit(handleSubmit)(); // Submit the form
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(
          "flex w-full items-center justify-center gap-2 px-2",
          className,
        )}
      >
        <div className="w-full rounded-lg bg-gradient-to-r from-[#3A49F9] to-[#9C2CF3] p-[1px]">
          <div className="overflow-hidden rounded-lg">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <AutosizeTextarea
                      {...field}
                      placeholder="Type a message..."
                      maxHeight={120}
                      onKeyDown={handleKeyDown} // Add keydown handler here
                      className="h-fit w-full resize-none rounded-lg border-2 border-transparent bg-card text-sm leading-[1.2rem] outline-none focus:border-transparent focus:ring-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <button type="submit" className="rounded-full p-2">
          <img
            src="/assets/PlayButton_img.svg"
            alt="Send Message"
            className="size-12"
          />
        </button>
      </form>
    </Form>
  );
}
