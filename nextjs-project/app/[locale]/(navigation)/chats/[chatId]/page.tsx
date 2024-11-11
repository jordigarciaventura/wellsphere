import { route } from "@/config/site";
import { Chat } from "@/features/chats/components/Chat";
import { getChatUseCase } from "@/features/chats/use-cases/chats";
import { AI } from "@/features/chats/utils/provider";
import { redirect } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string; chatId: string };
}

export default async function ChatPage({ params: { locale, chatId } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const chat = await getChatUseCase(chatId);

  if (!chat) {
    redirect({
      href: route.chats,
      locale,
    });
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
