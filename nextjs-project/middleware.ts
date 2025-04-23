// https://next-intl.dev/docs/routing/middleware#example-auth-js

import { defaultLocale, locales } from "@/features/language/utils/i18n";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|_vercel|api|.*\\..*).*)"],
};
