"use client";

import { Calendar, CalendarProps } from "@/components/ui/calendar";
import { enUS, es, Locale } from "date-fns/locale";
import { useLocale } from "next-intl";

const localeMap: { [key: string]: Locale } = {
  en: enUS,
  es: es,
};

export default function LocalizedCalendar(props: CalendarProps) {
  const locale: string = useLocale();

  const dayPickerLocale = localeMap[locale] || enUS;

  return <Calendar locale={dayPickerLocale} {...props} />;
}
