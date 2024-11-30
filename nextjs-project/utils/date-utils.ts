import { format } from "date-fns";
import { enUS, es, fr } from "date-fns/locale";

const localeMap = {
  en: enUS,
  es: es,
  fr: fr,
};

let currentLocale = enUS;

export const setLocale = (locale: string) => {
  if (locale in localeMap) {
    currentLocale = localeMap[locale as keyof typeof localeMap];
  } else {
    currentLocale = enUS;
  }
};

export const formatDate = (date: Date | number, formatStr: string): string => {
  return format(date, formatStr, { locale: currentLocale });
};
