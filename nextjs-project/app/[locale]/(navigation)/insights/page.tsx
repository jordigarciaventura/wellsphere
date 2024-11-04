import InsightsClient from "@/features/insights/components/InsightsClient";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function InsightsPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <InsightsClient />;
}
