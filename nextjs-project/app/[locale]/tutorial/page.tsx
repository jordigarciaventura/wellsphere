import TutorialCarousel from "@/features/tutorial/components/TutorialCarousel";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function TutorialPageWrapper({ params: { locale } }: Props) {
  "use client";
  setRequestLocale(locale);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <TutorialCarousel />
    </div>
  );
}
