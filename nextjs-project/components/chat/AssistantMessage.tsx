"use client";

import Markdown from "@/components/markdown/markdown";
import { useStreamableText } from "@/hooks/useStreamableText";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { type StreamableValue } from "ai/rsc";
import { cn } from "lib/utils";

interface Props {
  content: string | StreamableValue<string>;
  className?: string;
}

export default function AssistantMessage({ content, className }: Props) {
  const text = useStreamableText(content);

  return (
    <div className={cn(className, "mr-auto flex w-full gap-4")}>
      <div className="size-7">
        <SmartToyIcon className="h-full w-full" />
      </div>
      <Markdown>{text}</Markdown>
    </div>
  );
}
