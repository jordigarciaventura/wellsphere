"use client"; // Marcar como Client Component

import ChatIntro from "@/features/chats/components/ChatIntro"; // Importa o ChatIntro
import { MessageList } from "@/features/chats/components/MessageList";
import PromptForm from "@/features/chats/components/PromptForm";
import type { AI } from "@/features/chats/utils/provider";
import { useUIState } from "ai/rsc";

export function Chat() {
  const [messages] = useUIState<typeof AI>();

  const hasMessages = messages && messages.length > 0;

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col">
      <div className="flex-grow overflow-y-auto">
        {hasMessages ? <MessageList messages={messages} /> : <ChatIntro />}
      </div>

      {hasMessages && <div className="my-2 h-[1px] w-full"></div>}
      <PromptForm />
    </div>
  );
}
