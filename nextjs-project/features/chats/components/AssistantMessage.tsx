"use client";

import Markdown from "@/features/chats/components/markdown/markdown";
import { useStreamableText } from "@/features/chats/hooks/useStreamableText";
import { cn } from "@/lib/utils";
import { type StreamableValue } from "ai/rsc";
import { Bot } from "lucide-react";

interface Props {
  content: string | StreamableValue<string>;
  className?: string;
}

export default function AssistantMessage({ content, className }: Props) {
  const text = useStreamableText(content);

  return (
    <div className={cn(className, "mr-auto flex items-center w-full gap-4")}>
      <div className="size-7">
        <img 
          src="/assets/IABot_pngImg.png" 
          alt="Bot Icon" 
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      </div>
      {/* Contenedor de mensaje centrado */}
      <div className="flex justify-center items-center bg-[#E5EAFC] p-4 rounded-lg border border-transparent text-[#2E3A59] w-full">
        <p className="m-0">{text}</p>
      </div>
    </div>
  );
  
  
}
