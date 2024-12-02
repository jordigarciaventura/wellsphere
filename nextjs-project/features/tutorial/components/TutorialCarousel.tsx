"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import * as React from "react";

// Define the TutorialStep interface with required properties
interface TutorialStep {
  image: string;
  title: string;
  text: string;
  color: string;
}



export default function Component(): JSX.Element {
  const t = useTranslations("Tutorial");
  // Set initial state for the current step index

// Ensure tutorialSteps is non-empty and has a valid fallback step
const fallbackStep: TutorialStep = {
  image: "/default.svg",
  title: t("title"),
  text: t("text"),
  color: "#000000",
};

// Ensure tutorialSteps is correctly typed and non-nullable
const tutorialSteps: TutorialStep[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    title: t("title1"),
    text: t("desc1"),
    color: "#7C3AED",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: t("title2"),
    text: t("desc2"),
    color: "#4CAF50",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: t("title3"),
    text: t("desc3"),
    color: "#F44336",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: t("title4"),
    text: t("desc4"),
    color: "#2196F3",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: t("title5"),
    text: t("desc5"),
    color: "#FFEB3B",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: t("title6"),
    text: t("desc6"),
    color: "#9C27B0",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: t("title7"),
    text: t("desc7"),
    color: "#FF9800",
  },
];


  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0);

  // Safely access the current step with a fallback to avoid undefined
  const currentStep = tutorialSteps[currentStepIndex] || fallbackStep;

  // Type for handler functions
  const handleNext = (): void => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, tutorialSteps.length - 1));
  };

  const handleBack = (): void => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSkip = (): void => {
    console.log("Tutorial skipped");
  };

  return (
    <Card className="relative mx-auto min-h-[600px] max-w-6xl p-8">
      <CardContent className="p-0">
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="flex flex-1 items-center justify-center">
            <div
              className="rounded-full p-8"
              style={{ backgroundColor: `${currentStep.color}15` }}
            >
              <Image
                src={currentStep.image}
                alt={currentStep.title}
                width={400}
                height={400}
                className="h-auto w-full max-w-[300px] md:max-w-[400px]"
              />
            </div>
          </div>
          <div className="flex-1 text-left">
            <h2
              className="mb-4 text-3xl font-bold md:text-4xl"
              style={{ color: currentStep.color }}
            >
              {currentStep.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {currentStep.text}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={handleBack}
            disabled={currentStepIndex === 0}
            style={{
              backgroundColor: currentStep.color,
              opacity: currentStepIndex === 0 ? 0.5 : 1,
            }}
            className="rounded-full px-8 hover:opacity-90"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStepIndex === tutorialSteps.length - 1}
            style={{
              backgroundColor: currentStep.color,
              opacity: currentStepIndex === tutorialSteps.length - 1 ? 0.5 : 1,
            }}
            className="rounded-full px-8 hover:opacity-90"
          >
            Next
          </Button>
        </div>

        <Button
          onClick={handleSkip}
          style={{ backgroundColor: currentStep.color }}
          className="absolute bottom-8 right-8 rounded-full px-8 hover:opacity-90"
        >
          Skip
        </Button>

        <div className="mt-8 flex justify-center gap-2">
          {tutorialSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStepIndex(index)}
              className="h-2.5 w-2.5 rounded-full transition-colors"
              style={{
                backgroundColor:
                  index === currentStepIndex ? currentStep.color : "#d1d5db",
              }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
