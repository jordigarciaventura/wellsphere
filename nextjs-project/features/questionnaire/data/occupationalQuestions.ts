import { useTranslations } from "next-intl";

const occupationalQuestions = () => {
  const t = useTranslations("questionnaire.occupational");

  return [
    {
      value: "workHours",
      label: t("questions.workHours.question"),
      options: [
        {
          label: t("questions.workHours.options.a"),
          value: "a",
        },
        {
          label: t("questions.workHours.options.b"),
          value: "b",
        },
        {
          label: t("questions.workHours.options.c"),
          value: "c",
        },
        {
          label: t("questions.workHours.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "breaksFrequency",
      label: t("questions.breaksFrequency.question"),
      options: [
        {
          label: t("questions.breaksFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.breaksFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.breaksFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.breaksFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "workFulfillment",
      label: t("questions.workFulfillment.question"),
      options: [
        {
          label: t("questions.workFulfillment.options.a"),
          value: "a",
        },
        {
          label: t("questions.workFulfillment.options.b"),
          value: "b",
        },
        {
          label: t("questions.workFulfillment.options.c"),
          value: "c",
        },
        {
          label: t("questions.workFulfillment.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "workStress",
      label: t("questions.workStress.question"),
      options: [
        {
          label: t("questions.workStress.options.a"),
          value: "a",
        },
        {
          label: t("questions.workStress.options.b"),
          value: "b",
        },
        {
          label: t("questions.workStress.options.c"),
          value: "c",
        },
        {
          label: t("questions.workStress.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "workSatisfaction",
      label: t("questions.workSatisfaction.question"),
      options: [
        {
          label: t("questions.workSatisfaction.options.a"),
          value: "a",
        },
        {
          label: t("questions.workSatisfaction.options.b"),
          value: "b",
        },
        {
          label: t("questions.workSatisfaction.options.c"),
          value: "c",
        },
        {
          label: t("questions.workSatisfaction.options.d"),
          value: "d",
        },
      ],
    },
  ] as const;
};

export default occupationalQuestions;
