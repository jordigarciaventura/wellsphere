import Questions from "@/features/questionnare/Questionnare";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function Questionnare({ params: { locale } }: Props) {
  "use client";

  setRequestLocale(locale);

  return (
    <div className="mt-12 flex">
      <Questions />;
    </div>
  );
}
