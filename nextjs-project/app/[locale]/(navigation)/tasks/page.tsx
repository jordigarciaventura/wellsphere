import MoodWeekPicker from "@/components/mood/MoodWeekPicker";
import { Button } from "@/components/ui/button";
import { route } from "@/config/site";
import TasksList from "@/features/tasks/components/TasksList";
import { getMoodsUseCase } from "@/features/tasks/use-cases/moods";
import { getTasksUseCase } from "@/features/tasks/use-cases/tasks";
import { Link } from "@/i18n/routing";
import { Plus } from "lucide-react";
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

  const [tasksResult, moodsResult] = await Promise.allSettled([
    getTasksUseCase(date),
    getMoodsUseCase(date),
  ]);

  const tasks = tasksResult.status === "fulfilled" ? tasksResult.value : [];
  const moods = moodsResult.status === "fulfilled" ? moodsResult.value : [];

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div className="rounded-b-md bg-card px-2 py-4 shadow-md">
        <div className="mx-auto flex w-full max-w-5xl justify-center">
          <MoodWeekPicker
            moods={moods}
            date={date}
            rightSlot={
              <Link href={route.newTask}>
                <Button className="h-12 rounded-full bg-gradient-linear">
                  <Plus size={16} className="mr-2" />
                  <p className="mr-2">Add task</p>
                </Button>
              </Link>
            }
          />
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
