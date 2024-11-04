import type { UIState } from "@/features/chats/types/ai";

interface Props {
  messages: UIState;
}

export function MessageList({ messages }: Props) {
  return (
    <div className="flex h-full w-full overflow-auto">
      <div className="mx-auto flex w-full max-w-lg flex-grow flex-col gap-8 overflow-hidden px-2 py-8">
        {messages.map((message) => (
          <div key={message.id}>{message.display}</div>
        ))}
      </div>
    </div>
  );
}
