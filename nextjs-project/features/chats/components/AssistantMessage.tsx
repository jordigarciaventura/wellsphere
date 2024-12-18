"use client";

import Markdown from "@/features/chats/components/markdown/markdown";
import { useStreamableText } from "@/features/chats/hooks/useStreamableText";
import { cn } from "@/lib/utils";
import { type StreamableValue } from "ai/rsc";

interface Props {
  content: string | StreamableValue<string>;
  className?: string;
}

export default function AssistantMessage({ content, className }: Props) {
  const text = useStreamableText(content);

  return (
    <div className={cn(className, "mr-auto flex w-full gap-4")}>
      <img src="/assets/IABot_pngImg.png" alt="Bot Icon" className="size-7" />
      <Markdown>{text}</Markdown>
    </div>
  );
}
