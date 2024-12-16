import {
  EmotionalQuestionValue,
  IntellectualQuestionValue,
  OccupationalQuestionValue,
  PhysicalQuestionValue,
  SocialQuestionValue,
  SpiritualQuestionValue,
} from "@/features/questionnaire/types/questions";

export type OptionsScore = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export type PhysicalScores = {
  [key in PhysicalQuestionValue]: OptionsScore;
};

export type IntellectualScosre = {
  [key in IntellectualQuestionValue]: OptionsScore;
};

export type EmotionalScores = {
  [key in EmotionalQuestionValue]: OptionsScore;
};

export type SpiritualScores = {
  [key in SpiritualQuestionValue]: OptionsScore;
};

export type OccupationalScores = {
  [key in OccupationalQuestionValue]: OptionsScore;
};

export type SocialScores = {
  [key in SocialQuestionValue]: OptionsScore;
};

export type Scores = {
  physical: PhysicalScores;
  intellectual: IntellectualScosre;
  emotional: EmotionalScores;
  spiritual: SpiritualScores;
  occupational: OccupationalScores;
  social: SocialScores;
};
