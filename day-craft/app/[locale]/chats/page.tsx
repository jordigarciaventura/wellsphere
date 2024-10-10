import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function ChatsPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <div>ChatsPage</div>;
}
