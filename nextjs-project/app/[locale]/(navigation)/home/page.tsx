import TopAppBar from "@/components/navigation/TopAppBar";
import HomeContent from "@/features/home/components/HomeContent";
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

  const moodEntries = await getMoodsUseCase(date);

  return (
    <>
      <TopAppBar />
      <HomeContent moodEntries={moodEntries} date={date} />
    </>
  );
}
