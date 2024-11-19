import { getMessages, saveMessages } from "@/features/chats/data-access/chats";
import { AIState } from "@/features/chats/types/ai";
import { fromAIMessage, toAIMessage } from "@/features/chats/utils/ai";
import { getUserId } from "@/lib/auth";

export async function saveAIStateUseCase(state: AIState) {
  const userId = await getUserId();
  if (!userId) return;

  const { messages: aiMessages } = state;
  const messages = aiMessages.map((message) => fromAIMessage(message));
  await saveMessages(userId, messages);
}

export async function getMessagesUseCase() {
  const userId = await getUserId();
  if (!userId) return;

  return (await getMessages(userId)).map(toAIMessage);
}
