import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default async function NewTaskPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <div>NewTaskPage</div>;
}
