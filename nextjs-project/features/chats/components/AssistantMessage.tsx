"use client";

import Markdown from "@/features/chats/components/markdown/markdown";
import { useStreamableText } from "@/features/chats/hooks/useStreamableText";
import { cn } from "@/utils/style";
import { type StreamableValue } from "ai/rsc";
import { Bot } from "lucide-react";

interface Props {
  content: string | StreamableValue<string>;
  className?: string;
}

export default function AssistantMessage({ content, className }: Props) {
  const text = useStreamableText(content);

  return (
    <div className={cn(className, "mr-auto flex w-full gap-4")}>
      <div className="size-7">
        <Bot />
      </div>
      <Markdown>{text}</Markdown>
    </div>
  );
}