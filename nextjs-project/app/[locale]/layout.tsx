import { locales } from "@/config/i18n";
import { getThemeFromCookies } from "@/lib/theme";
import theme from "@/theme/theme";
import ThemeCookieSetter from "@/theme/ThemeCookieSetter";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import SessionWrapper from "components/SessionWrapper";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import React from "react";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "App" });

  return {
    title: t("title"),
    description: t("description"),
    icons: [{ rel: "icon", url: "/wellspherelogov3.svg" }],
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  const messages = await getMessages();
  const themeMode = getThemeFromCookies();

  return (
    <html lang={locale} className={themeMode}>
      <body className={`antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <StyledEngineProvider injectFirst>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <SessionWrapper>
                <InitColorSchemeScript attribute="class" />
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <ThemeCookieSetter />
                  {children}
                </ThemeProvider>
              </SessionWrapper>
            </AppRouterCacheProvider>
          </StyledEngineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
