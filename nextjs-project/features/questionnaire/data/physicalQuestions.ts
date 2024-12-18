import { useTranslations } from "next-intl";

const physicalQuestions = () => {
  const t = useTranslations("questionnaire.physical");

  return [
    {
      value: "sleepTime",
      label: t("questions.sleepTime.question"),
      options: [
        {
          label: t("questions.sleepTime.options.a"),
          value: "a",
        },
        {
          label: t("questions.sleepTime.options.b"),
          value: "b",
        },
        {
          label: t("questions.sleepTime.options.c"),
          value: "c",
        },
        {
          label: t("questions.sleepTime.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "exerciseFrequency",
      label: t("questions.exerciseFrequency.question"),
      options: [
        {
          label: t("questions.exerciseFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.exerciseFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.exerciseFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.exerciseFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "fruitVegIntake",
      label: t("questions.fruitVegIntake.question"),
      options: [
        {
          label: t("questions.fruitVegIntake.options.a"),
          value: "a",
        },
        {
          label: t("questions.fruitVegIntake.options.b"),
          value: "b",
        },
        {
          label: t("questions.fruitVegIntake.options.c"),
          value: "c",
        },
        {
          label: t("questions.fruitVegIntake.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "waterIntake",
      label: t("questions.waterIntake.question"),
      options: [
        {
          label: t("questions.waterIntake.options.a"),
          value: "a",
        },
        {
          label: t("questions.waterIntake.options.b"),
          value: "b",
        },
        {
          label: t("questions.waterIntake.options.c"),
          value: "c",
        },
        {
          label: t("questions.waterIntake.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "screenTime",
      label: t("questions.screenTime.question"),
      options: [
        {
          label: t("questions.screenTime.options.a"),
          value: "a",
        },
        {
          label: t("questions.screenTime.options.b"),
          value: "b",
        },
        {
          label: t("questions.screenTime.options.c"),
          value: "c",
        },
        {
          label: t("questions.screenTime.options.d"),
          value: "d",
        },
      ],
    },
  ] as const;
};

export default physicalQuestions;
