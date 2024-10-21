"use client";

import { MessageList } from "@/components/chat/MessageList";
import PromptForm from "@/components/chat/PromptForm";
import type { AI } from "@/providers/AI";
import { useAIState, useUIState } from "ai/rsc";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  id: string;
}

export function Chat({ id }: Props) {
  const router = useRouter();
  const path = usePathname();
  const [messages] = useUIState<typeof AI>();
  const [aiState] = useAIState<typeof AI>();

  useEffect(() => {
    const messagesLength = aiState.messages?.length;
    if (messagesLength === 2 && path.endsWith("chats")) {
      router.push(`${path}/${id}`, { scroll: false });
      router.refresh();
    }
  }, [aiState.messages, path, router, id]);

  return (
    <div className="flex h-full flex-col">
      <MessageList messages={messages} />
      <PromptForm />
    </div>
  );
}
