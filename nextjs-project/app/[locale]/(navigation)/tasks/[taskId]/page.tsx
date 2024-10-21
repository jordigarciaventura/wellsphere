import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string; taskId: string };
}

export default function TaskPage({ params: { locale, taskId } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <div>TaskPage for task: {taskId}</div>;
}
