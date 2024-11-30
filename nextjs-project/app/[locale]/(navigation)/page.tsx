import MoodWeekCarousel from "@/components/mood/MoodWeekCarousel";
import TopAppBar from "@/components/navigation/TopAppBar";
import { getMoodsUseCase } from "@/features/tasks/use-cases/moods";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function HomePage({
  params: { locale },
  searchParams,
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const queryDate = searchParams.date as string | undefined;
  const date =
    queryDate && !isNaN(new Date(queryDate).getTime())
      ? new Date(queryDate)
      : new Date();

  const moods = await getMoodsUseCase(date);

  return (
    <>
      <TopAppBar />
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col">
        <MoodWeekCarousel moods={moods} date={date} readonly />
      </div>
    </>
  );
}
