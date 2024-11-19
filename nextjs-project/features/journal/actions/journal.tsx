"use server";

import { saveJournalEntry } from "@/features/journal/data-access/journal";
import { getUserId } from "@/lib/auth";

export async function saveJournalEntryUseCase(date: Date, content: string) {
  const userId = await getUserId();
  if (!userId) return;

  await saveJournalEntry(userId, date, content);
}
