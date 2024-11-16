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
        "flex w-full items-center justify-center gap-2",
        className
      )}
    >
    <div className="p-[1px] bg-gradient-to-r from-[#3A49F9] to-[#9C2CF3] rounded-full w-full">
      <Textarea
        {...form.register("prompt")}
        className="w-full h-[15x] md:h-[20px] lg:h-[25px] px-4 py-0 bg-white border-2 border-transparent rounded-full outline-none focus:border-transparent focus:ring-0 text-sm leading-[1.2rem]"
      />
    </div>
      {/* Botão alterado para usar uma imagem */}
      <button type="submit" className="p-2 rounded-full">
        <img 
          src="/assets/PlayButton_img.svg" 
          alt="Send Message" 
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        />
      </button>
    </form>
  );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
