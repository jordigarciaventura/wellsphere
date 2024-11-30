import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

//export default createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const env = process.env.NODE_ENV;
  let locale = request.nextUrl.locale;
  if (locale === "") {
    locale = "/en";
  }
  const tokenName =
    env === "development"
      ? "next-auth.session-token"
      : "__Secure-next-auth.session-token";
  if (
    !request.cookies.get(tokenName) &&
    request.nextUrl.pathname !== locale + "/login"
  ) {
    return NextResponse.redirect(new URL(locale + "/login", request.url));
  }

  if (
    request.cookies.get(tokenName) &&
    request.nextUrl.pathname === locale + "/login"
  ) {
    return NextResponse.redirect(new URL(locale, request.url));
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
