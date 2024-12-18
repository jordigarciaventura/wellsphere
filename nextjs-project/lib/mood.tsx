import { Mood } from "@/types/mood";

const MoodScores: Record<Mood, number> = {
  [Mood.VerySad]: 0,
  [Mood.Sad]: 1,
  [Mood.Neutral]: 2,
  [Mood.Happy]: 3,
  [Mood.VeryHappy]: 4,
};

export const getMoodScore = (mood: Mood): number => MoodScores[mood];
