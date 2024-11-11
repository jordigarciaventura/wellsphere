import { setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string; taskId: string };
}

export default function TaskPage({ params: { locale, taskId } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <div>TaskPage for task: {taskId}</div>;
}
