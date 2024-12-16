import emotionalQuestions from "@/features/questionnaire/data/emotionalQuestions";
import intellectualQuestions from "@/features/questionnaire/data/intellectualQuestions";
import occupationalQuestions from "@/features/questionnaire/data/occupationalQuestions";
import physicalQuestions from "@/features/questionnaire/data/physicalQuestions";
import socialQuestions from "@/features/questionnaire/data/socialQuestions";
import spiritualQuestions from "@/features/questionnaire/data/spiritualQuestions";
import { OptionValue } from "@/features/questionnaire/types/answers";
import { IconElement } from "@/types/icons";

type Option = {
  label: string;
  value: OptionValue;
};

export type Question = {
  value: string;
  label: string;
  options: Option[];
};

export type Section = {
  label: string;
  value: string;
  icon: IconElement;
  color: string;
  questions: Question[];
};

export type SectionValue =
  | "physical"
  | "intellectual"
  | "emotional"
  | "spiritual"
  | "occupational"
  | "social";

export type PhysicalQuestionValue = ReturnType<
  typeof physicalQuestions
>[number]["value"];

export type IntellectualQuestionValue = ReturnType<
  typeof intellectualQuestions
>[number]["value"];

export type EmotionalQuestionValue = ReturnType<
  typeof emotionalQuestions
>[number]["value"];

export type SpiritualQuestionValue = ReturnType<
  typeof spiritualQuestions
>[number]["value"];

export type OccupationalQuestionValue = ReturnType<
  typeof occupationalQuestions
>[number]["value"];

export type SocialQuestionValue = ReturnType<
  typeof socialQuestions
>[number]["value"];
