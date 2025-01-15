"use client";

import Markdown from "@/features/chats/components/markdown/markdown";
import { useStreamableText } from "@/features/chats/hooks/useStreamableText";
import { cn } from "@/lib/utils";
import { type StreamableValue } from "ai/rsc";
import Image from "next/image";

interface Props {
  content: string | StreamableValue<string>;
  className?: string;
}

export default function AssistantMessage({ content, className }: Props) {
  const text = useStreamableText(content);

  return (
    <div className={cn(className, "mr-auto flex w-full items-start gap-4")}>
      <div className="flex size-10 items-center justify-center">
        <Image
          src="/assets/icon.svg"
          alt="Bot Icon"
          width={28}
          height={28}
          className="size-7"
        />
      </div>
      <Markdown>{text}</Markdown>
    </div>
  );
}
