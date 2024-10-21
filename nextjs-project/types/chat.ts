import { messageRoleEnum } from "@/db/schema";

export interface Message {
  id: string;
  role: string;
  content: string;
  chatId: string;
  metadata: unknown | string | null;
}

export type MessageRole = (typeof messageRoleEnum.enumValues)[number];
