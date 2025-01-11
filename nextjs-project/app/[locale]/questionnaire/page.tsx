import InitialQuestionnaire from "@/features/questionnaire/components/InitialQuestionnaire";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function QuestionnairePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  // Load user information:
  // is is new user -> show InitialQuestionnaire
  // else show TodayQuestionnaire:
  // if it already exists -> load TodayQuestionnaire
  // else -> generate new TodayQuestionnaire

  return (
    <div className="mt-12 flex">
      <InitialQuestionnaire />
    </div>
  );
}
