import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string; date: string };
}

export default function JournalDayPage({ params: { locale, date } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <div>JournalDayPage for date: {date}</div>;
}
