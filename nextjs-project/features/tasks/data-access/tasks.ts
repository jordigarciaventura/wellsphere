import "server-only";

import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { Weekday } from "@/features/tasks/types/date";
import { Dimension } from "@/types/mood";
import { and, eq, sql } from "drizzle-orm";

export async function getTasks(userId: string, endDate: Date) {
  const endDateStr = endDate.toISOString().slice(0, 10);

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
        sql`DATE(${tasksTable.endDate}) = ${endDateStr}`,
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
  startDate: Date;
  endDate: Date;
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
