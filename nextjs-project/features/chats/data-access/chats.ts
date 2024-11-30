import { db } from "@/db";
import { messagesTable } from "@/db/schema";
import { Message, MessageRole } from "@/features/chats/types/chat";
import { eq } from "drizzle-orm";
import "server-only";

export async function saveMessages(userId: string, messages: Message[]) {
  await db
    .insert(messagesTable)
    .values(
      messages.map((msg) => ({
        id: msg.id,
        userId: userId,
        role: msg.role as MessageRole,
        content: msg.content,
        metadata: msg.metadata,
      })),
    )
    .onConflictDoNothing({ target: messagesTable.id });
}

export async function getMessages(userId: string) {
  return await db
    .select()
    .from(messagesTable)
    .where(eq(messagesTable.userId, userId))
    .orderBy(messagesTable.createdAt);
}
