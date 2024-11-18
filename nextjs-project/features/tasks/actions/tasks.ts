"use server";
import "server-only";

import { route } from "@/config/site";
import { createTask, toggleTaskDone } from "@/features/tasks/data-access/tasks";
import { Weekday } from "@/features/tasks/types/date";
import { getUserId } from "@/lib/auth";
import { Dimension } from "@/types/mood";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function toggleTaskDoneUseCase(taskId: number) {
  const userId = await getUserId();
  if (!userId) return;

  await toggleTaskDone(userId, taskId);
  revalidatePath(route.tasks);
}

export async function createTaskUseCase({
  title,
  description,
  completed,
  dimensions,
  date,
  startTime,
  endTime,
  weekdays,
}: {
  title: string;
  description: string;
  completed: boolean;
  dimensions: Dimension[];
  date: Date;
  startTime: string;
  endTime: string;
  weekdays: Weekday[];
}) {
  const userId = await getUserId();
  if (!userId) return;

  const startDate = new Date(date);
  const [startHour, startMinute] = startTime.split(":");
  startDate.setHours(Number(startHour));
  startDate.setMinutes(Number(startMinute));

  const endDate = new Date(date);
  const [endHour, endMinute] = endTime.split(":");
  endDate.setHours(Number(endHour));
  endDate.setMinutes(Number(endMinute));

  await createTask({
    title,
    description,
    completed,
    dimensions,
    startDate,
    endDate,
    weekdays,
    userId,
  });

  redirect(route.tasks);
}
