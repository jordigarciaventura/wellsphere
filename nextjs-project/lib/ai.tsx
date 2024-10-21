import AssistantMessage from "@/components/chat/AssistantMessage";
import UserMessage from "@/components/chat/UserMessage";
import type { AIMessage, AIRole, AIState } from "@/types/ai";
import { type Message } from "@/types/chat";

export function toAIMessage(message: Message): AIMessage {
  return {
    id: message.id,
    content: message.content,
    role: message.role as AIRole,
  };
}

export function fromAIMessage(message: AIMessage, chatId: string): Message {
  return {
    id: message.id,
    content: message.content as string,
    role: message.role,
    chatId,
    metadata: null,
  };
}

export const getUIStateFromAIState = (chat: AIState) => {
  return chat.messages
    .filter((message) => message.role !== "system")
    .map((message) => ({
      id: message.id,
      display:
        message.role === "tool" ? (
          message.content.map((tool) => {
            return tool.toolName === "listStocks" ? (
              <></>
            ) : tool.toolName === "showStockPrice" ? (
              <></>
            ) : null;
          })
        ) : message.role === "user" ? (
          <UserMessage content={message.content as string} />
        ) : message.role === "assistant" &&
          typeof message.content === "string" ? (
          <AssistantMessage content={message.content} />
        ) : null,
    }));
};
