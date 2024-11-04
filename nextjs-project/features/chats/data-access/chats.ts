import { db } from "@/db";
import { chatsTable, messagesTable } from "@/db/schema";
import { Message, MessageRole } from "@/features/chats/types/chat";
import { eq } from "drizzle-orm";
import "server-only";

export async function getChat(chatId: string) {
  const [chat] = await db
    .select()
    .from(chatsTable)
    .where(eq(chatsTable.id, chatId));
  return chat ?? null;
}

export async function getChats() {
  return await db.select().from(chatsTable).orderBy(chatsTable.createdAt);
}

export async function renameChat(chatId: string, newTitle: string) {
  await db
    .update(chatsTable)
    .set({ title: newTitle, updatedAt: new Date() })
    .where(eq(chatsTable.id, chatId));
}

export async function deleteChat(chatId: string) {
  await db.delete(chatsTable).where(eq(chatsTable.id, chatId));
}

export async function saveChat(chatId: string, title: string) {
  const [chat] = await db
    .insert(chatsTable)
    .values({ id: chatId, title })
    .onConflictDoNothing()
    .returning();
  return chat;
}

export async function saveMessages(messages: Message[]) {
  await db
    .insert(messagesTable)
    .values(
      messages.map((msg) => ({
        id: msg.id,
        chatId: msg.chatId,
        role: msg.role as MessageRole,
        content: msg.content,
        metadata: msg.metadata,
      })),
    )
    .onConflictDoNothing({ target: messagesTable.id });
}

export async function getMessages(chatId: string) {
  return await db
    .select()
    .from(messagesTable)
    .where(eq(messagesTable.chatId, chatId))
    .orderBy(messagesTable.createdAt);
}
