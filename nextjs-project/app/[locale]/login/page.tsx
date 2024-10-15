import { unstable_setRequestLocale } from "next-intl/server";
import LoginPage from 'components/login'

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
