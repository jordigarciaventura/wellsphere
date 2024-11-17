"use client"; // Marcar como Client Component

import ChatIntro from "@/features/chats/components/ChatIntro"; // Importa o ChatIntro
import { MessageList } from "@/features/chats/components/MessageList";
import PromptForm from "@/features/chats/components/PromptForm";
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
    <div className="relative mx-auto flex h-screen w-full max-w-4xl flex-col bg-red-200">
      <div className="flex-grow overflow-y-auto">
        {hasMessages ? <MessageList messages={messages} /> : <ChatIntro />}
      </div>

      {hasMessages && <div className="my-2 h-[1px] w-full bg-[#BFC8E8]"></div>}
      <div className="absolute bottom-2 left-0 right-0">
        <PromptForm />
      </div>
    </div>
  );
}
