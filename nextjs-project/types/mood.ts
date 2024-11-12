export interface MoodEntry {
  date: string;
  mood: Mood;
}

export enum Dimension {
  Physical = "physical",
  Emotional = "emotional",
  Social = "social",
  Intellectual = "intellectual",
  Spiritual = "spiritual",
  Occupational = "occupational",
}

export enum Role {
  User = "user",
  System = "system",
  Assistant = "assistant",
  Tool = "tool",
}

export enum Mood {
  VerySad = "verySad",
  Sad = "sad",
  Neutral = "neutral",
  Happy = "happy",
  VeryHappy = "veryHappy",
}

export enum Frequency {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}
