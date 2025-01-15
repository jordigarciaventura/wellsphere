import { scores } from "@/features/questionnaire/data/scores";
import { Answer } from "@/features/questionnaire/types/answers";

export const computeScores = (answers: Answer[]) => {
  const physicalScore = computeScore(answers, "physical");
  const emotionalScore = computeScore(answers, "emotional");
  const intellectualScore = computeScore(answers, "intellectual");
  const spiritualScore = computeScore(answers, "spiritual");
  const occupationalScore = computeScore(answers, "occupational");
  const socialScore = computeScore(answers, "social");

  return {
    physical: physicalScore,
    emotional: emotionalScore,
    intellectual: intellectualScore,
    spiritual: spiritualScore,
    occupational: occupationalScore,
    social: socialScore,
  };
};

const computeScore = (answers: Answer[], section: string) => {
  const sectionAnswers = answers.filter((answer) => answer.section === section);

  if (!sectionAnswers.length) return 0;

  const sectionScore = sectionAnswers.reduce((acc, answer) => {
    return acc + getAnswerScore(answer);
  }, 0);

  return sectionScore / sectionAnswers.length;
};

const getAnswerScore = (answer: Answer) => {
  if (!(answer.section in scores)) return 0;
  const sectionScores = scores[answer.section];

  if (!(answer.question in sectionScores)) return 0;
  const questionScores =
    sectionScores[answer.question as keyof typeof sectionScores];

  if (!(answer.value in questionScores)) return 0;
  return questionScores[answer.value as keyof typeof questionScores];
};
