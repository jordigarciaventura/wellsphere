export interface MoodEntry {
  date: Date;
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
