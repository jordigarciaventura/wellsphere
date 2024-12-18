"use client";

import { setLocale } from "@/utils/date-utils";
import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function LocalizedDate() {
  const locale = useLocale();

  useEffect(() => {
    setLocale(locale);
  }, [locale]);

  return null;
}
