import { Chat } from "@/components/chat/Chat";
import { AI } from "@/providers/AI";
import { unstable_setRequestLocale } from "next-intl/server";
import { v4 as uuidv4 } from "uuid";

interface Props {
  params: { locale: string };
}

export default function ChatsPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const chatId = uuidv4();

  return (
    <AI initialAIState={{ chatId, messages: [] }}>
      <Chat id={chatId} />
    </AI>
  );
}
