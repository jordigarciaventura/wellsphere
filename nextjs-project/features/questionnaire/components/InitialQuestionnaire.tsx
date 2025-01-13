"use client";

import Questionnaire from "@/features/questionnaire/components/Questionnaire";
import emotionalQuestions from "@/features/questionnaire/data/emotionalQuestions";
import intellectualQuestions from "@/features/questionnaire/data/intellectualQuestions";
import occupationalQuestions from "@/features/questionnaire/data/occupationalQuestions";
import physicalQuestions from "@/features/questionnaire/data/physicalQuestions";
import socialQuestions from "@/features/questionnaire/data/socialQuestions";
import spiritualQuestions from "@/features/questionnaire/data/spiritualQuestions";
import { Section } from "@/features/questionnaire/types/questions";
import EmotionalIcon from "@/lib/icons/EmotionalIcon";
import IntellectualIcon from "@/lib/icons/IntellectualIcon";
import OccupationalIcon from "@/lib/icons/OccupationaIcon";
import PhysicalIcon from "@/lib/icons/PhysicalIcon";
import SocialIcon from "@/lib/icons/SocialIcon";
import SpiritualIcon from "@/lib/icons/SpiritualIcon";
import { useTranslations } from "next-intl";

export default function InitialQuestionnaire() {
  const t = useTranslations("dimensions");

  const sections = [
    {
      label: t("physical"),
      value: "physical",
      icon: PhysicalIcon,
      color: "hsl(var(--physical))",
      questions: physicalQuestions().slice(0, 3),
    },
    {
      label: t("intellectual"),
      value: "intellectual",
      icon: IntellectualIcon,
      color: "hsl(var(--intellectual))",
      questions: intellectualQuestions().slice(0, 3),
    },
    {
      label: t("emotional"),
      value: "emotional",
      icon: EmotionalIcon,
      color: "hsl(var(--emotional))",
      questions: emotionalQuestions().slice(0, 3),
    },
    {
      label: t("spiritual"),
      value: "spiritual",
      icon: SpiritualIcon,
      color: "hsl(var(--spiritual))",
      questions: spiritualQuestions().slice(0, 3),
    },
    {
      label: t("occupational"),
      value: "occupational",
      icon: OccupationalIcon,
      color: "hsl(var(--occupational))",
      questions: occupationalQuestions().slice(0, 3),
    },
    {
      label: t("social"),
      value: "social",
      icon: SocialIcon,
      color: "hsl(var(--social))",
      questions: socialQuestions().slice(0, 3),
    },
  ];

  const heading = (
    <div className="flex flex-col gap-2 px-2">
      <h1 className="text-2xl font-bold">Questionnaire</h1>
      <p className="mb-8 text-sm text-gray-800 dark:text-gray-200">
        Please answer the following questions to help us understand your current
        well-being in the six dimensions of wellness.
      </p>
    </div>
  );

  return (
    <Questionnaire
      sections={sections as unknown as Section[]}
      heading={heading}
    />
  );
}
