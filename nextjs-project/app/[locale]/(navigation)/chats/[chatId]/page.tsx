import { Chat } from "@/components/chat/Chat";
import { route } from "@/config/site";
import { redirect } from "@/i18n/routing";
import { AI } from "@/providers/AI";
import { getChatUseCase } from "@/use-cases/chats";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string; chatId: string };
}

export default async function ChatPage({ params: { locale, chatId } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const chat = await getChatUseCase(chatId);

  if (!chat) {
    redirect(route.chats);
  }

  return (
    <AI
      initialAIState={{
        chatId: chat!.id,
        messages: chat!.messages,
      }}
    >
      <Chat id={chat!.id} />
    </AI>
  );
}
