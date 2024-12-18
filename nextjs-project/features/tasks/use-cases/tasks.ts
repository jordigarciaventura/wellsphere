import { getTasks, getTaskSummaries } from "@/features/tasks/data-access/tasks";
import { getUserId } from "@/lib/auth";
import { addMonths, subMonths } from "date-fns";

export async function getTasksUseCase(date: Date) {
  const userId = await getUserId();
  if (!userId) return [];

  return await getTasks(userId, date);
}

export async function getTaskSummariesUseCase(date: Date) {
  const userId = await getUserId();
  if (!userId) return [];

  const previousMonth = subMonths(date, 1);
  const nextMonth = addMonths(date, 1);

  return await getTaskSummaries(userId, previousMonth, nextMonth);
}
