import "server-only";

import { db } from "@/db";
import { journalEntriesTable } from "@/db/schema";
import { formatDate } from "@/utils/date-utils";
import { and, eq, sql } from "drizzle-orm";

export async function getJournalEntry(userId: string, date: Date) {
  const dateStr = date.toISOString().slice(0, 10);

  const journalEntry = await db
    .select({
      content: journalEntriesTable.content,
    })
    .from(journalEntriesTable)
    .where(
      and(
        eq(journalEntriesTable.userId, userId),
        sql`DATE(${journalEntriesTable.date}) = ${dateStr}`,
      ),
    );

  if (journalEntry.length === 0) {
    return null;
  }

  return journalEntry[0];
}

export async function saveJournalEntry(
  userId: string,
  date: Date,
  content: string,
) {
  const dateStr = formatDate(date, "yyyy-MM-dd");

  await db
    .insert(journalEntriesTable)
    .values({
      userId,
      date: dateStr,
      content,
    })
    .onConflictDoUpdate({
      target: [journalEntriesTable.userId, journalEntriesTable.date],
      set: {
        content,
      },
    });
}
