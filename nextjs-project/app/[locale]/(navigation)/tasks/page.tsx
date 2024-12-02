import TasksList from "@/features/tasks/components/TasksList";
import TaskWeekPicker from "@/features/tasks/components/TaskWeekPicker";
import {
  getTaskSummariesUseCase,
  getTasksUseCase,
} from "@/features/tasks/use-cases/tasks";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function TasksPage({
  params: { locale },
  searchParams,
}: Props) {
  // Enable static rendering
  setRequestLocale(locale!);

  const queryDate = searchParams.date as string | undefined;
  const date =
    queryDate && !isNaN(new Date(queryDate).getTime())
      ? new Date(queryDate)
      : new Date();

  const [tasksResult, taskSummariesResult] = await Promise.allSettled([
    getTasksUseCase(date),
    getTaskSummariesUseCase(date),
  ]);

  const tasks = tasksResult.status === "fulfilled" ? tasksResult.value : [];
  const taskSummaries =
    taskSummariesResult.status === "fulfilled" ? taskSummariesResult.value : [];

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div className="rounded-b-md bg-card px-2 py-4 shadow-md">
        <div className="mx-auto flex w-full max-w-5xl justify-center">
          <TaskWeekPicker taskSummaries={taskSummaries} selectedDate={date} />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <div className="flex flex-col gap-4 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          <TasksList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
