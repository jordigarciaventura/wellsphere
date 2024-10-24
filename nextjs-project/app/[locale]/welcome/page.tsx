import ClientWelcomePage from "@/components/ClientWelcomePage";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function WelcomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <ClientWelcomePage />;
}
