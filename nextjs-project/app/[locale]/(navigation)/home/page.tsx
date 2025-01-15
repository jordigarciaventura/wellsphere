import TopAppBar from "@/components/navigation/TopAppBar";
import { route } from "@/config/site";
import HomeContent from "@/features/home/components/HomeContent";
import { getMoodsUseCase } from "@/features/tasks/use-cases/moods";
import { isNewUserUseCase } from "@/features/welcome/use-cases/users";
import { redirect } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function HomePage({
  params: { locale },
  searchParams,
}: Readonly<Props>) {
  // Enable static rendering
  setRequestLocale(locale);

  const isNewUser = await isNewUserUseCase();

  if (isNewUser) {
    redirect({
      href: route.tutorial,
      locale,
    });
  }

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
