"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface TutorialStep {
  image: string;
  title: string;
  text: string;
  color: string;
}

export default function Component(): JSX.Element {
  const t = useTranslations("Tutorial");
  const router = useRouter();

  const fallbackStep: TutorialStep = {
    image: "/default.svg",
    title: t("title"),
    text: t("text"),
    color: "#000000",
  };

  const tutorialSteps: TutorialStep[] = [
    {
      image: "/assets/app1.svg",
      title: t("title1"),
      text: t("desc1"),
      color: "#7C3AED",
    },
    {
      image: "/assets/physical.svg",
      title: t("title2"),
      text: t("desc2"),
      color: "#4CAF50",
    },
    {
      image: "/assets/emotional.svg",
      title: t("title3"),
      text: t("desc3"),
      color: "#F44336",
    },
    {
      image: "/assets/intellectual.svg",
      title: t("title4"),
      text: t("desc4"),
      color: "#2196F3",
    },
    {
      image: "/assets/social.svg",
      title: t("title5"),
      text: t("desc5"),
      color: "#FFEB3B",
    },
    {
      image: "/assets/spiritual.svg",
      title: t("title6"),
      text: t("desc6"),
      color: "#9C27B0",
    },
    {
      image: "/assets/occupational.svg",
      title: t("title7"),
      text: t("desc7"),
      color: "#FF9800",
    },
  ];

  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0);

  const currentStep = tutorialSteps[currentStepIndex] || fallbackStep;

  const handleNext = (): void => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, tutorialSteps.length - 1));

    if (currentStepIndex === tutorialSteps.length - 1) {
      router.push(route.questionnaire);
    }
  };

  const handleBack = (): void => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Card className="w-full max-w-6xl">
      <CardContent className="pt-6">
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="flex w-full flex-1 items-center justify-center">
            <div
              className="relative aspect-square w-full max-w-96 rounded-full p-8"
              style={{ backgroundColor: `${currentStep.color}15` }}
            >
              <Image
                src={currentStep.image}
                alt={currentStep.title}
                fill={true}
                className="object-contain"
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
            <p className="min-h-32 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {currentStep.text}
            </p>
          </div>
        </div>

        <div className="mt-8 flex w-full justify-center gap-4">
          <Button
            onClick={handleBack}
            disabled={currentStepIndex === 0}
            style={{
              backgroundColor: currentStep.color,
              opacity: currentStepIndex === 0 ? 0.5 : 1,
            }}
            className="rounded-full px-8 hover:opacity-90"
          >
            {t("back")}
          </Button>
          <Button
            onClick={handleNext}
            style={{
              backgroundColor: currentStep.color,
            }}
            className="rounded-full px-8 hover:opacity-90"
          >
            {currentStepIndex === tutorialSteps.length - 1
              ? t("start")
              : t("next")}
          </Button>
        </div>

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

        <div className="flex w-full justify-end">
          <Link
            href={route.questionnaire}
            className="px-4 py-2 text-sm text-muted-foreground"
          >
            {t("skip")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
