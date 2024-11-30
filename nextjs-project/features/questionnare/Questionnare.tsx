"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const questions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
];

const options = [
  "Daily",
  "Several times a week",
  "A few times a month",
  "Rarely",
];

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill(""),
  );

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#e6f3ff] px-4">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <div className="flex flex-1 flex-col rounded-lg border-2 border-[#0088ff] bg-purple-100 bg-white bg-opacity-50 p-6">
          <span className="mb-3 text-[#0088ff]">
            Question {currentQuestion + 1}
          </span>

          <p className="mb-8 text-center text-base leading-normal">
            {questions[currentQuestion]}
          </p>

          <RadioGroup
            value={answers[currentQuestion]}
            onValueChange={handleAnswer}
            className="gap-4"
          >
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  className="h-5 w-5 border-2 border-gray-300"
                />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="mt-4 flex justify-between">
          <Button
            variant="ghost"
            className="px-0 text-[#0088ff] hover:bg-transparent hover:text-[#0088ff]"
            onClick={handleBack}
            disabled={currentQuestion === 0}
          >
            Back
          </Button>
          <Button
            variant="ghost"
            className="px-0 text-[#0088ff] hover:bg-transparent hover:text-[#0088ff]"
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
