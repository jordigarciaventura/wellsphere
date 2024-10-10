import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function DashboardPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <div>DashboardPage</div>;
}
