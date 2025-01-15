"use server";

import { route } from "@/config/site";
import { submitQuestionnaire } from "@/features/questionnaire/data-access/questionnaire";
import { getUserId } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function submitQuestionnaireAction() {
  const userId = await getUserId();

  if (!userId) {
    throw new Error("User not found");
  }

  const date = new Date();

  await submitQuestionnaire(userId, date);
  redirect(route.home);
}

const answers = [
  {
    questionValue: "sleepTime",
    optionValue: "b",
  },
];

const questions = [
  {
    dimension: "physical",
    label: "How many hours of sleep do you get per night?",
    value: "sleepTime",
    options: [
      {
        label: "Less than 6 hours",
        value: "a",
        score: 0.25,
      },
      {
        label: "6-7 hours",
        value: "b",
        score: 0.5,
      },
      {
        label: "7-8 hours",
        value: "c",
        score: 0.75,
      },
      {
        label: "More than 8 hours",
        value: "d",
        score: 1,
      },
    ],
  },
];
