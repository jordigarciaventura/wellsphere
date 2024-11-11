import ClientJournalPage from "@/features/journal/components/ClientJournalPage";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function JournalPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <ClientJournalPage />;
}
