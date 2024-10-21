import { unstable_setRequestLocale } from "next-intl/server";
import TutorialCarousel from 'components/tutorial';

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
