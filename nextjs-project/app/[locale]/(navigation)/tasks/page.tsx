import ClientTaskPage from "@/features/tasks/components/ClientTaskPage";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default function TasksPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <ClientTaskPage />;
}
