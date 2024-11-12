"use server";
import "server-only";

import { route } from "@/config/site";
import { toggleTaskDone } from "@/features/tasks/data-access/tasks";
import { getUserId } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function toggleTaskDoneUseCase(taskId: number) {
  const userId = await getUserId();
  if (!userId) return;

  await toggleTaskDone(userId, taskId);
  revalidatePath(route.tasks);
}
