import { Chat } from "@/features/chats/components/Chat";
import { getMessagesUseCase } from "@/features/chats/use-cases/chats";
import { AI } from "@/features/chats/utils/provider";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default async function ChatPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const messages = (await getMessagesUseCase()) ?? [];

  return (
    <AI initialAIState={{ messages }}>
      <Chat />
    </AI>
  );
}
