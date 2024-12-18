import { Button } from "@/components/ui/button";
import { route } from "@/config/site";
import ClientJournalPage from "@/features/journal/components/ClientJournalPage";
import JournalWeekPicker from "@/features/journal/components/JournalWeekPicker";
import MoodSelector from "@/features/journal/components/MoodSelector";
import { getJournalEntryUseCase } from "@/features/journal/use-cases/journal";
import { getMoodsUseCase } from "@/features/tasks/use-cases/moods";
import { Link } from "@/i18n/routing";
import { isSameDay } from "date-fns";
import { Plus } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function JournalPage({
  params: { locale },
  searchParams,
}: Props) {
  // Enable static rendering
  setRequestLocale(locale!);

  const queryDate = searchParams.date as string | undefined;
  const date =
    queryDate && !isNaN(new Date(queryDate).getTime())
      ? new Date(queryDate)
      : new Date();

  const [journalResult, moodsResult] = await Promise.allSettled([
    getJournalEntryUseCase(date),
    getMoodsUseCase(date),
  ]);

  const journalEntry =
    journalResult.status === "fulfilled" ? journalResult.value : null;
  const moodEntries =
    moodsResult.status === "fulfilled" ? moodsResult.value : [];

  const todaysMood =
    moodEntries.find((mood) => isSameDay(mood.date, date))?.mood ?? null;

  const journalContent = journalEntry?.content ?? "";

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div className="rounded-b-md bg-card px-2 py-4 shadow-md">
        <div className="mx-auto flex w-full max-w-5xl justify-center">
          <JournalWeekPicker
            moodEntries={moodEntries}
            date={date}
            rightSlot={
              <Link href={route.questionnaire}>
                <Button className="h-12 rounded-full bg-gradient-linear">
                  <Plus size={16} className="mr-2" />
                  <p className="mr-2">Answer questionnaire</p>
                </Button>
              </Link>
            }
          />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
        <MoodSelector date={date} selectedMood={todaysMood} />
        <ClientJournalPage date={date} initialContent={journalContent} />
      </div>
    </div>
  );
}
