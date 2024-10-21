import { route } from "@/config/site";
import {
  deleteChat,
  getChat,
  getMessages,
  renameChat,
  saveChat,
  saveMessages,
} from "@/data-access/chats";
import { fromAIMessage, toAIMessage } from "@/lib/ai";
import { AIState } from "@/types/ai";
import { revalidatePath } from "next/cache";

export async function deleteChatUseCase(chatId: string) {
  await deleteChat(chatId);
  revalidatePath(route.chats);
}

export async function renameChatUseCase(chatId: string, title: string) {
  await renameChat(chatId, title);
}

export async function saveAIStateUseCase(state: AIState) {
  //   const userId = await getUserId();
  //   if (!userId) return;

  const { chatId, messages: aiMessages } = state;
  const firstMessageContent = aiMessages[0]!.content as string;
  const title = firstMessageContent.substring(0, 20);
  await saveChat(chatId, title);
  const messages = aiMessages.map((message) => fromAIMessage(message, chatId));
  await saveMessages(messages);
}

export async function getChatUseCase(chatId: string) {
  //   const userId = await getUserId();
  //   if (!userId) return;

  const chat = await getChat(chatId);
  if (!chat) return;
  const messages = await getMessages(chatId);
  return { ...chat, messages: messages.map(toAIMessage) };
}
