import { getTasks } from "@/features/tasks/data-access/tasks";
import { getUserId } from "@/lib/auth";

export async function getTasksUseCase(date: Date) {
  const userId = await getUserId();
  if (!userId) return [];

  return await getTasks(userId, date);
}
