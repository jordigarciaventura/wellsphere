import "server-only";

import { db } from "@/db";
import { moodEntriesTable } from "@/db/schema";
import { formatDate } from "@/utils/date-utils";
import { and, eq, gte, lte } from "drizzle-orm";

export async function getMoods(userId: string, startDate: Date, endDate: Date) {
  const startDateStr = formatDate(startDate, "yyyy-MM-dd");
  const endDateStr = formatDate(endDate, "yyyy-MM-dd");

  const result = await db
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

  return result.map((row) => ({
    ...row,
    date: new Date(row.date as string),
  }));
}
