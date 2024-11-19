import { getJournalEntry } from "@/features/journal/data-access/journal";
import { getUserId } from "@/lib/auth";

export async function getJournalEntryUseCase(date: Date) {
  const userId = await getUserId();
  if (!userId) return null;

  return await getJournalEntry(userId, date);
}
