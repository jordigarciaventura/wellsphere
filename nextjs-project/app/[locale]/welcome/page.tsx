import ClientWelcomePage from "@/components/ClientWelcomePage";
import { unstable_setRequestLocale } from "next-intl/server";
import WelcomePage from 'components/welcome.tsx';

interface Props {
  params: { locale: string };
}

// Rename the function to avoid conflict
export default function WelcomePageWrapper({ params: { locale } }: Props) {
  "use client";
  unstable_setRequestLocale(locale);

  return <ClientWelcomePage />;
}
