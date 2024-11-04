import TutorialCarousel from "@/features/tutorial/components/TutorialCarousel";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function TutorialPageWrapper({ params: { locale } }: Props) {
  "use client";
  unstable_setRequestLocale(locale);

  return (
    <>
      <TutorialCarousel />
    </>
  );
}
