// https://next-intl.dev/docs/routing/middleware#example-auth-js

import { route } from "@/config/site";
import { defaultLocale, locales } from "@/features/language/utils/i18n";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

const publicRoutes = [
  route.login,
  route.register,
  route.forgotPassword,
  route.landing,
  route.welcome,
];

const publicPathnameRegex = RegExp(
  `^(/(${locales.join("|")}))?(${publicRoutes
    .flatMap((p) => (p === "/" ? ["", "/"] : p))
    .join("|")})/?$`,
  "i",
);

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: route.login,
      newUser: route.welcome,
    },
  },
);

export default function middleware(req: NextRequest) {
  const isPublicRoute = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicRoute) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!_next|_vercel|api|.*\\..*).*)"],
};
