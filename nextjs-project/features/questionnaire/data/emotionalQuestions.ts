import { useTranslations } from "next-intl";

const emotionalQuestions = () => {
  const t = useTranslations("questionnaire.emotional");

  return [
    {
      value: "stressFrequency",
      label: t("questions.stressFrequency.question"),
      options: [
        {
          label: t("questions.stressFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.stressFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.stressFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.stressFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "anxietyFrequency",
      label: t("questions.anxietyFrequency.question"),
      options: [
        {
          label: t("questions.anxietyFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.anxietyFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.anxietyFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.anxietyFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "sadnessFrequency",
      label: t("questions.sadnessFrequency.question"),
      options: [
        {
          label: t("questions.sadnessFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.sadnessFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.sadnessFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.sadnessFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "happinessFrequency",
      label: t("questions.happinessFrequency.question"),
      options: [
        {
          label: t("questions.happinessFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.happinessFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.happinessFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.happinessFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "angerFrequency",
      label: t("questions.angerFrequency.question"),
      options: [
        {
          label: t("questions.angerFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.angerFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.angerFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.angerFrequency.options.d"),
          value: "d",
        },
      ],
    },
  ] as const;
};

export default emotionalQuestions;
