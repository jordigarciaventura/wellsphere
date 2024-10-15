import LoginPage from "components/login";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function RegisterPage({ params: { locale } }: Props) {
  "use client";

  unstable_setRequestLocale(locale);

  return (
    <>
      <LoginPage />
    </>
  );
}
