import { useTranslations } from "next-intl";

const intellectualQuestions = () => {
  const t = useTranslations("questionnaire.intellectual");

  return [
    {
      value: "readingFrequency",
      label: t("questions.readingFrequency.question"),
      options: [
        {
          label: t("questions.readingFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.readingFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.readingFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.readingFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "learningFrequency",
      label: t("questions.learningFrequency.question"),
      options: [
        {
          label: t("questions.learningFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.learningFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.learningFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.learningFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "problemSolvingFrequency",
      label: t("questions.problemSolvingFrequency.question"),
      options: [
        {
          label: t("questions.problemSolvingFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.problemSolvingFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.problemSolvingFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.problemSolvingFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "criticalThinkingFrequency",
      label: t("questions.criticalThinkingFrequency.question"),
      options: [
        {
          label: t("questions.criticalThinkingFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.criticalThinkingFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.criticalThinkingFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.criticalThinkingFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "creativityFrequency",
      label: t("questions.creativityFrequency.question"),
      options: [
        {
          label: t("questions.creativityFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.creativityFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.creativityFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.creativityFrequency.options.d"),
          value: "d",
        },
      ],
    },
  ] as const;
};

export default intellectualQuestions;
