import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string; chatId: string };
}

export default function ChatPage({ params: { locale, chatId } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <div>ChatPage for chat: {chatId}</div>;
}
