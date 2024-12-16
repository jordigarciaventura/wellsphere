"use client";

import { Button } from "@/components/ui/button";
import Navigation from "@/features/questionnaire/components/Navigation";
import Question from "@/features/questionnaire/components/Question";
import Stepper from "@/features/questionnaire/components/Stepper";
import { Answer } from "@/features/questionnaire/types/answers";
import { Section } from "@/features/questionnaire/types/questions";
import { computeScores } from "@/features/questionnaire/utils/score";
import { useEffect, useMemo, useState } from "react";

interface Props {
  sections: Section[];
  initialAnswers?: Answer[];
  heading?: React.ReactNode;
}

export default function Questionnaire({
  sections,
  initialAnswers,
  heading,
}: Props) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(initialAnswers ?? []);

  const progress = useMemo(() => {
    return sections.map((section) => {
      const sectionAnswers = answers.filter(
        (answer) => answer.section === section.value,
      );
      const totalQuestions = section.questions.length;
      const answeredQuestions = sectionAnswers.length;
      const progress = answeredQuestions / totalQuestions;
      return progress;
    });
  }, [answers, sections]);

  const currentSection = sections[currentSectionIndex]!;
  const currentQuestion = currentSection.questions[currentQuestionIndex];

  const sectionsLength = sections.length;
  const questionsLength = currentSection.questions.length;

  const answersLength = answers.filter(
    (answer) => answer.section === currentSection.value,
  ).length;

  const canPrevious = currentSectionIndex > 0 || currentQuestionIndex > 0;
  const canNext = answersLength > currentQuestionIndex;

  const totalQuestions = useMemo(
    () => sections.reduce((acc, section) => acc + section.questions.length, 0),
    [sections],
  );

  const canSubmit = answers.length === totalQuestions;

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questionsLength - 1) {
      if (currentSectionIndex === sectionsLength - 1) {
        return;
      }

      setCurrentQuestionIndex(0);
      setCurrentSectionIndex((prev) => prev + 1);
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) {
      if (currentSectionIndex === 0) {
        return;
      }
      setCurrentSectionIndex((prev) => prev - 1);
      setCurrentQuestionIndex(
        sections[currentSectionIndex - 1]!.questions.length - 1,
      );
      return;
    }

    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleOnValueChange = (questionValue: string, answerValue: string) => {
    const newAnswer = {
      section: currentSection.value,
      question: questionValue,
      value: answerValue,
    } as Answer;

    setAnswers((prevAnswers) => [
      ...prevAnswers.filter(
        (answer) =>
          answer.section !== currentSection.value ||
          answer.question !== questionValue,
      ),
      newAnswer,
    ]);
  };

  const handleSubmit = () => {
    console.log(computeScores(answers));
  };

  useEffect(() => {
    if (canNext) {
      const timeout = setTimeout(() => {
        handleNextQuestion();
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [answers]);

  const currentAnswer = answers.find(
    (answer) =>
      answer.question === currentQuestion?.value &&
      answer.section === currentSection.value,
  )?.value;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      {heading}
      <div className="mb-12 flex w-full max-w-2xl flex-col gap-4">
        <Stepper
          steps={sections}
          currentStep={canSubmit ? sections.length : currentSectionIndex}
          progress={progress}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Question
          key={currentQuestion!.value}
          label={currentQuestion!.label}
          questionValue={currentQuestion!.value}
          options={currentQuestion!.options}
          onValueChange={handleOnValueChange}
          selectedValue={currentAnswer}
        />

        <Navigation
          currentStep={currentQuestionIndex}
          totalSteps={currentSection.questions.length}
          onPrevious={handlePreviousQuestion}
          onNext={handleNextQuestion}
          canPrevious={canPrevious}
          canNext={canNext}
          doneSteps={answersLength}
        />

        <Button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="mx-4 my-4"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
