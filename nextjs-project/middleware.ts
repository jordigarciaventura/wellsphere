import createMiddleware from "next-intl/middleware";
import { useTranslations } from "next-intl"
import { routing, usePathname } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { requestFormReset } from "react-dom";


//export default createMiddleware(routing);

export async function middleware(request: NextRequest) {

  let locale = request.nextUrl.locale;
  if (locale === "") { locale = "/en"; }
  
  if (!request.cookies.get("next-auth.session-token") && request.nextUrl.pathname !==  locale + "/login") {
    return NextResponse.redirect(new URL(locale + "/login", request.url));
  }

  if (request.cookies.get("next-auth.session-token") && request.nextUrl.pathname ===  locale + "/login") {
    return NextResponse.redirect(new URL(locale , request.url));
  }


  const intlMiddleware = createMiddleware(routing);
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(en|es)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
