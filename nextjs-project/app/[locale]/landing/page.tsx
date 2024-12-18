import LandingPage from "@/features/landing/LandingPage";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function TutorialPageWrapper({ params: { locale } }: Props) {
  "use client";
  setRequestLocale(locale);

  return (
    <>
      <LandingPage />
    </>
  );
}
