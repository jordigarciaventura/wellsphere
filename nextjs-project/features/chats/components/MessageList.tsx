import type { UIState } from "@/features/chats/types/ai";

interface Props {
  messages: UIState;
}

export function MessageList({ messages }: Props) {
  return (
    <div className="flex w-full flex-col gap-8 px-2 py-8">
      {messages.map((message) => (
        <div key={message.id}>{message.display}</div>
      ))}
    </div>
  );
}
