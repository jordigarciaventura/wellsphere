import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function SettingsPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <div>Test</div>;
}
