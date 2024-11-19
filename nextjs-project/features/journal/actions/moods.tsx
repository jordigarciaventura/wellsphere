"use server";

import { route } from "@/config/site";
import { saveMoodEntry } from "@/features/journal/data-access/moods";
import { getUserId } from "@/lib/auth";
import { Mood } from "@/types/mood";
import { revalidatePath } from "next/cache";

export async function saveMoodEntryUseCase(date: Date, mood: Mood) {
  const userId = await getUserId();
  if (!userId) return;

  await saveMoodEntry(userId, date, mood);
  revalidatePath(route.journal);
}
