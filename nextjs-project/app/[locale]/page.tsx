import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function LandingPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <div className="flex flex-col gap-8">
      <h1>Landing page</h1>
      <Link href={route.welcome}>Get started</Link>
    </div>
  );
}
