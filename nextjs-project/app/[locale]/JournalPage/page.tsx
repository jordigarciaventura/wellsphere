import Journal from "components/JournalPage";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function JournalPage({ params: { locale } }: Props) {
  "use client";

  unstable_setRequestLocale(locale);

  return (
    <>
      <Journal />
    </>
  );
}
