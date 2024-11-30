import { Mood } from "@/types/mood";

export function getRandomMood(): Mood {
  const moods = Object.values(Mood); // Get all values of the Mood enum
  const randomIndex = Math.floor(Math.random() * moods.length); // Pick a random index
  return moods[randomIndex]!;
}
