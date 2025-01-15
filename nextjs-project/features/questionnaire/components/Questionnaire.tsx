"use client";

import { Button } from "@/components/ui/button";
import { submitQuestionnaireAction } from "@/features/questionnaire/actions/questionnaire";
import Navigation from "@/features/questionnaire/components/Navigation";
import Question from "@/features/questionnaire/components/Question";
import Stepper from "@/features/questionnaire/components/Stepper";
import { Answer } from "@/features/questionnaire/types/answers";
import { Section } from "@/features/questionnaire/types/questions";
import { computeScores } from "@/features/questionnaire/utils/score";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Props {
  sections: Section[];
  initialAnswers?: Answer[];
  heading?: React.ReactNode;
  readonly?: boolean;
}

export default function Questionnaire({
  sections,
  initialAnswers,
  heading,
  readonly = false,
}: Props) {
  const [answers, setAnswers] = useState<Answer[]>(initialAnswers ?? []);

  const getLastState = useCallback(() => {
    let index = initialAnswers?.length ?? 0;

    for (let i = 0; i < sections.length; i++) {
      const questionsLength = sections[i]!.questions.length;
      if (index === 0) {
        return {
          sectionIndex: i,
          questionIndex: 0,
        };
      }

      if (index < questionsLength) {
        return {
          sectionIndex: i,
          questionIndex: index,
        };
      }
      index -= questionsLength;
    }

    return {
      sectionIndex: 0,
      questionIndex: 0,
    };
  }, [initialAnswers, sections]);

  const { sectionIndex, questionIndex } = getLastState();

  const [currentSectionIndex, setCurrentSectionIndex] = useState(sectionIndex);
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(questionIndex);

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
  const isLastSection = currentSectionIndex === sectionsLength - 1;
  const isLastQuestion = currentQuestionIndex === questionsLength - 1;
  const isLastSectionQuestion = isLastSection && isLastQuestion;
  const canNext =
    answersLength > currentQuestionIndex && !isLastSectionQuestion;

  const totalQuestions = useMemo(
    () => sections.reduce((acc, section) => acc + section.questions.length, 0),
    [sections],
  );

  const canSubmit = answers.length === totalQuestions;

  const handleNextQuestion = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

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

  const prevAnswersRef = useRef<Answer[]>(answers);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Compare the current answers with the previous answers
    const prevAnswers = prevAnswersRef.current;
    if (canNext && JSON.stringify(prevAnswers) !== JSON.stringify(answers)) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout and store its ID in the ref
      timeoutRef.current = setTimeout(() => {
        handleNextQuestion();
      }, 500);

      // Update the previous answers reference
      prevAnswersRef.current = answers;
    }

    // Cleanup function to clear the timeout when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [answers, canNext]);

  const handleSubmit = async () => {
    console.log(computeScores(answers));
    await submitQuestionnaireAction();
  };

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
          readonly={readonly}
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

        {!readonly && (
          <Button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="mx-4 my-4"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
