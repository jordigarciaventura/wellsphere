"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
export default function ChatIntro() {
  const t = useTranslations("ChatIntro");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4 py-8">
      <div className="size-24">
        <Image src="/assets/icon.svg" alt="Bot Icon" width={512} height={512} />
      </div>

      <h1 className="mt-4 text-xl md:text-2xl lg:text-3xl">{t("letschat")}</h1>

      <div className="mt-6 flex flex-col gap-4 text-center">
        <p className="w-full max-w-md rounded-lg bg-muted p-4 text-sm md:text-base lg:text-lg">
          {t("answerallquestions")}
          <br />
          {t("askanything")}
        </p>
        <p className="w-full max-w-md rounded-lg bg-muted p-4 text-sm md:text-base lg:text-lg">
          {t("AI")}
          <br />
          {t("text")}
        </p>
      </div>
    </div>
  );
}
