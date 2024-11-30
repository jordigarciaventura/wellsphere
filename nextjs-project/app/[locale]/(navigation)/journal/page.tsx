import ClientJournalPage from "@/features/journal/components/ClientJournalPage";
import MoodSelector from "@/features/journal/components/MoodSelector";
import MoodWeekPicker from "@/features/journal/components/MoodWeekPicker";
import { getJournalEntryUseCase } from "@/features/journal/use-cases/journal";
import { getMoodsUseCase } from "@/features/tasks/use-cases/moods";
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
  const moods = moodsResult.status === "fulfilled" ? moodsResult.value : [];

  const dateStr = date.toISOString().slice(0, 10);
  const selectedMood =
    moods.find((mood) => mood.date === dateStr)?.mood ?? null;

  const journalContent = journalEntry?.content ?? "";

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div className="rounded-b-md bg-card px-2 py-4 shadow-md">
        <div className="mx-auto flex w-full max-w-5xl justify-center">
          <MoodWeekPicker moods={moods} date={date} />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
        <MoodSelector date={date} selectedMood={selectedMood} />
        <ClientJournalPage date={date} initialContent={journalContent} />
      </div>
    </div>
  );
}
