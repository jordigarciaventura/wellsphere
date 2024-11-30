import TopAppBar from "@/components/navigation/TopAppBar";
import { getMoodsUseCase } from "@/features/tasks/use-cases/moods";
import { setRequestLocale } from "next-intl/server";
import HomeContent from "./HomeContent.tsx"

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
      <HomeContent moods={moods} date={date} />
     
    </>
  );
}

