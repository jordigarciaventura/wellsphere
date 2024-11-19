import { getMoodEntries } from "@/features/journal/data-access/moods";
import { getUserId } from "@/lib/auth";
import { addMonths, subMonths } from "date-fns";

export async function getMoodsUseCase(date: Date) {
  const userId = await getUserId();
  if (!userId) return [];

  const previousMonth = subMonths(date, 1);
  const nextMonth = addMonths(date, 1);

  return await getMoodEntries(userId, previousMonth, nextMonth);
}
