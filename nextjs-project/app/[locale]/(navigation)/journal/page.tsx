import ClientJournalPage from "@/features/journal/components/ClientJournalPage";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function JournalPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <ClientJournalPage />;
}
