import ClientWelcomePage from "@/features/welcome/components/ClientWelcomePage";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function WelcomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return <ClientWelcomePage />;
}
