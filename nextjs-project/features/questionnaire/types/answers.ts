import {
  EmotionalQuestionValue,
  IntellectualQuestionValue,
  OccupationalQuestionValue,
  PhysicalQuestionValue,
  SocialQuestionValue,
  SpiritualQuestionValue,
} from "@/features/questionnaire/types/questions";

export type OptionValue = "a" | "b" | "c" | "d";

export type PhsyicalAnswer = {
  section: "physical";
  question: PhysicalQuestionValue;
  value: OptionValue;
};

export type IntellectualAnswer = {
  section: "intellectual";
  question: IntellectualQuestionValue;
  value: OptionValue;
};

export type EmotionalAnswer = {
  section: "emotional";
  question: EmotionalQuestionValue;
  value: OptionValue;
};

export type SpiritualAnswer = {
  section: "spiritual";
  question: SpiritualQuestionValue;
  value: OptionValue;
};

export type OccupationalAnswer = {
  section: "occupational";
  question: OccupationalQuestionValue;
  value: OptionValue;
};

export type SocialAnswer = {
  section: "social";
  question: SocialQuestionValue;
  value: OptionValue;
};

export type Answer =
  | PhsyicalAnswer
  | IntellectualAnswer
  | EmotionalAnswer
  | SpiritualAnswer
  | OccupationalAnswer
  | SocialAnswer;
