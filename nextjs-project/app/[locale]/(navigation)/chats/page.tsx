import { Chat } from "@/features/chats/components/Chat";
import { AI } from "@/features/chats/utils/provider";
import { setRequestLocale } from "next-intl/server";
import { v4 as uuidv4 } from "uuid";

interface Props {
  params: { locale: string };
}

export default function ChatsPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const chatId = uuidv4();

  return (
    <AI initialAIState={{ chatId, messages: [] }}>
      <Chat id={chatId} />
    </AI>
  );
}
