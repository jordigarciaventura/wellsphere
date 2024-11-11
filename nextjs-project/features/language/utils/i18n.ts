import type { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en";
export const locales = ["en", "es"] as const;

export const localeLabels = {
  en: "English",
  es: "Español",
};

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  // "/homes": {
  //     en: "/homes",
  //     es: "/casas",
  // },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
