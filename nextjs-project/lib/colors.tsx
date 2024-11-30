import { Mood } from "@/types/mood";

export const getMoodColor = (mood: Mood): string => {
  switch (mood) {
    case Mood.VerySad:
      return "var(--color-verysad)";
    case Mood.Sad:
      return "var(--color-sad)";
    case Mood.Neutral:
      return "var(--color-neutral)";
    case Mood.Happy:
      return "var(--color-happy)";
    case Mood.VeryHappy:
      return "var(--color-veryhappy)";
    default:
      return "var(--color-neutral)";
  }
};
