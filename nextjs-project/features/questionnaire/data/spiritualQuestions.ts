import { useTranslations } from "next-intl";

const spiritualQuestions = () => {
  const t = useTranslations("questionnaire.spiritual");

  const questions = [
    {
      value: "meditationFrequency",
      label: t("questions.meditationFrequency.question"),
      options: [
        {
          label: t("questions.meditationFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.meditationFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.meditationFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.meditationFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "prayerFrequency",
      label: t("questions.prayerFrequency.question"),
      options: [
        {
          label: t("questions.prayerFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.prayerFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.prayerFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.prayerFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "gratitudeFrequency",
      label: t("questions.gratitudeFrequency.question"),
      options: [
        {
          label: t("questions.gratitudeFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.gratitudeFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.gratitudeFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.gratitudeFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "forgivenessFrequency",
      label: t("questions.forgivenessFrequency.question"),
      options: [
        {
          label: t("questions.forgivenessFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.forgivenessFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.forgivenessFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.forgivenessFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "mindfulnessFrequency",
      label: t("questions.mindfulnessFrequency.question"),
      options: [
        {
          label: t("questions.mindfulnessFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.mindfulnessFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.mindfulnessFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.mindfulnessFrequency.options.d"),
          value: "d",
        },
      ],
    },
  ] as const;

  return questions;
};

export default spiritualQuestions;
