import { localePrefix, locales, pathnames } from "@/config/i18n";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
