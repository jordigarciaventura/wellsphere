import createMiddleware from "next-intl/middleware";
import { useTranslations } from "next-intl"
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { requestFormReset } from "react-dom";

//export default createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log()
  if (!request.cookies.get("next-auth.session-token") && request.nextUrl.pathname !==  ) {
    return NextResponse.redirect(new URL('', request.url));
  }
  console.log(routing)

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
