import "server-only";

import { db } from "@/db";
import { moodEntriesTable } from "@/db/schema";
import { Mood } from "@/types/mood";
import { formatDate } from "date-fns";
import { and, eq, gte, lte } from "drizzle-orm";

export async function getMoodEntries(
  userId: string,
  startDate: Date,
  endDate: Date,
) {
  const startDateStr = formatDate(startDate, "yyyy-MM-dd");
  const endDateStr = formatDate(endDate, "yyyy-MM-dd");

  return await db
    .select({
      date: moodEntriesTable.date,
      mood: moodEntriesTable.mood,
    })
    .from(moodEntriesTable)
    .where(
      and(
        eq(moodEntriesTable.userId, userId),
        gte(moodEntriesTable.date, startDateStr),
        lte(moodEntriesTable.date, endDateStr),
      ),
    );
}

export async function saveMoodEntry(userId: string, date: Date, mood: Mood) {
  const dateStr = formatDate(date, "yyyy-MM-dd");

  await db
    .insert(moodEntriesTable)
    .values({
      userId,
      date: dateStr,
      mood,
    })
    .onConflictDoUpdate({
      target: [moodEntriesTable.userId, moodEntriesTable.date],
      set: {
        mood,
      },
    });
}
