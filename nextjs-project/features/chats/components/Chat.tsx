"use client"; // Marcar como Client Component

import { MessageList } from "@/features/chats/components/MessageList";
import PromptForm from "@/features/chats/components/PromptForm";
import ChatIntro from "@/features/chats/components/ChatIntro"; // Importa o ChatIntro
import type { AI } from "@/features/chats/utils/provider";
import { useAIState, useUIState } from "ai/rsc";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  id: string;
}

export function Chat({ id }: Props) {
  const router = useRouter();
  const path = usePathname();
  const [messages] = useUIState<typeof AI>();
  const [aiState] = useAIState<typeof AI>();

  const hasMessages = messages && messages.length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto flex h-screen flex-col">
      <div className="flex-grow overflow-y-auto">
        {hasMessages ? <MessageList messages={messages} /> : <ChatIntro />}
      </div>

      {hasMessages && <div className="w-full h-[1px] bg-[#BFC8E8] my-2"></div>}

      <PromptForm />
    </div>
  );
}
