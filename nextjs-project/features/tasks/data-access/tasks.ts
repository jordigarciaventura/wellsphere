import "server-only";

import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { Weekday } from "@/features/tasks/types/date";
import { Dimension } from "@/types/mood";
import { endOfDay, startOfDay, zonedTimeToUtc } from "date-fns-tz";
import { and, eq, gte, lte, sql } from "drizzle-orm";

export async function getTaskSummaries(
  userId: string,
  startDate: Date,
  endDate: Date,
) {
  const startDateStr = startDate.toISOString().slice(0, 10);
  const endDateStr = endDate.toISOString().slice(0, 10);

  const result = await db
    .select({
      date: sql`DATE(${tasksTable.endDate})`.as("date"),
      completedCount:
        sql`SUM(CASE WHEN ${tasksTable.completed} THEN 1 ELSE 0 END)`.as(
          "completed",
        ),
      pendingCount:
        sql`SUM(CASE WHEN NOT ${tasksTable.completed} THEN 1 ELSE 0 END)`.as(
          "pending",
        ),
    })
    .from(tasksTable)
    .where(
      and(
        eq(tasksTable.userId, userId),
        sql`DATE(${tasksTable.endDate}) >= ${startDateStr}`,
        sql`DATE(${tasksTable.endDate}) <= ${endDateStr}`,
      ),
    )
    .groupBy(sql`DATE(${tasksTable.endDate})`)
    .orderBy(sql`DATE(${tasksTable.endDate})`);

  return result.map((row) => ({
    date: new Date(row.date as string),
    completedCount: parseInt(row.completedCount as string),
    pendingCount: parseInt(row.pendingCount as string),
  }));
}

export async function getTasks(userId: string, endDate: Date) {
  const timeZone = "Europe/Paris"; // or your timezone
  const start = zonedTimeToUtc(startOfDay(endDate, { timeZone }), timeZone);
  const end = zonedTimeToUtc(endOfDay(endDate, { timeZone }), timeZone);

  return await db
    .select({
      id: tasksTable.id,
      title: tasksTable.title,
      endDate: tasksTable.endDate,
      completed: tasksTable.completed,
      dimensions: tasksTable.dimensions,
    })
    .from(tasksTable)
    .where(
      and(
        eq(tasksTable.userId, userId),
        gte(tasksTable.endDate, start),
        lte(tasksTable.endDate, end),
      ),
    );
}

export async function toggleTaskDone(userId: string, taskId: number) {
  return await db
    .update(tasksTable)
    .set({
      completed: sql`NOT ${tasksTable.completed}`,
    })
    .where(and(eq(tasksTable.userId, userId), eq(tasksTable.id, taskId)));
}

export async function createTask({
  title,
  description,
  completed,
  dimensions,
  startDate,
  endDate,
  weekdays,
  userId,
}: {
  title: string;
  description?: string;
  completed: boolean;
  dimensions: Dimension[];
  startDate?: Date;
  endDate?: Date;
  weekdays: Weekday[];
  userId: string;
}) {
  await db.insert(tasksTable).values({
    title,
    description,
    completed,
    dimensions,
    startDate,
    endDate,
    weekdays,
    userId,
  });
}
