import { useTranslations } from "next-intl";

const socialQuestions = () => {
  const t = useTranslations("questionnaire.social");

  return [
    {
      value: "friendCount",
      label: t("questions.friendCount.question"),
      options: [
        {
          label: t("questions.friendCount.options.a"),
          value: "a",
        },
        {
          label: t("questions.friendCount.options.b"),
          value: "b",
        },
        {
          label: t("questions.friendCount.options.c"),
          value: "c",
        },
        {
          label: t("questions.friendCount.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "socialEvents",
      label: t("questions.socialEvents.question"),
      options: [
        {
          label: t("questions.socialEvents.options.a"),
          value: "a",
        },
        {
          label: t("questions.socialEvents.options.b"),
          value: "b",
        },
        {
          label: t("questions.socialEvents.options.c"),
          value: "c",
        },
        {
          label: t("questions.socialEvents.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "friendMeetingFrequency",
      label: t("questions.friendMeetingFrequency.question"),
      options: [
        {
          label: t("questions.friendMeetingFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.friendMeetingFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.friendMeetingFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.friendMeetingFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "friendTalkingFrequency",
      label: t("questions.friendTalkingFrequency.question"),
      options: [
        {
          label: t("questions.friendTalkingFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.friendTalkingFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.friendTalkingFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.friendTalkingFrequency.options.d"),
          value: "d",
        },
      ],
    },
    {
      value: "lonelinessFrequency",
      label: t("questions.lonelinessFrequency.question"),
      options: [
        {
          label: t("questions.lonelinessFrequency.options.a"),
          value: "a",
        },
        {
          label: t("questions.lonelinessFrequency.options.b"),
          value: "b",
        },
        {
          label: t("questions.lonelinessFrequency.options.c"),
          value: "c",
        },
        {
          label: t("questions.lonelinessFrequency.options.d"),
          value: "d",
        },
      ],
    },
  ] as const;
};

export default socialQuestions;
