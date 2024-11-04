import ClientHome from "@/features/home/components/ClientHome";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default async function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <ClientHome />;
}
