import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/features/auth/components/AuthProvider";
import LocalizedDate from "@/features/language/components/LocalizedDate";
import { locales } from "@/features/language/utils/i18n";
import ThemeProvider from "@/features/theme/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
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

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  const messages = await getMessages();
  const theme = cookies().get("__theme__")?.value ?? "light";

  return (
    <html
      lang={locale}
      className={cn(theme, poppins.className)}
      style={{ colorScheme: theme }}
      suppressHydrationWarning
    >
      <body className={`antialiased`}>
        <AuthProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <ThemeProvider defaultTheme={theme}>
              {children}
              <Toaster richColors />
              <LocalizedDate />
            </ThemeProvider>
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
