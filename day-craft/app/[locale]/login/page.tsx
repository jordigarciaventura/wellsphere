import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function LoginPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <div>LoginPage</div>;
}
