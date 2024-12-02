"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import WeeklyCarousel from "@/components/weekly-carousel/WeeklyCarousel";
import { route } from "@/config/site";
import LocalizedCalendar from "@/features/language/components/LocalizedCalendar";
import { Link, useRouter } from "@/i18n/routing";
import { formatDate } from "@/utils/date-utils";
import { CalendarIcon, CircleDashed, Plus } from "lucide-react";
import { useCallback, useState } from "react";

type TaskSummary = {
  date: Date;
  completedCount: number;
  pendingCount: number;
};

interface Props {
  selectedDate: Date;
  taskSummaries: TaskSummary[];
}

const TaskElement = ({ done, pending }: { done: number; pending: number }) => {
  const total = done + pending;
  const percentage = (done / total) * 100;

  return (
    <div className="relative size-6 text-primary">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="2"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={100 - percentage}
          strokeLinecap="round"
        ></circle>
      </svg>

      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <span className="text-center text-xs font-bold">{total}</span>
      </div>
    </div>
  );
};

const EmptyElement = () => <CircleDashed className="size-6" />;

export default function TaskWeekPicker({ selectedDate, taskSummaries }: Props) {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(selectedDate);

  const [title, setTitle] = useState(() =>
    formatDate(currentDate, "MMM, yyyy"),
  );

  const handleMonthChange = useCallback((date: Date) => {
    setTitle(formatDate(date, "MMM, yyyy"));
    setCurrentDate(date);
  }, []);

  const handleCalendarChange = useCallback(
    (date: Date | undefined) => {
      if (!date) return;
      setTitle(formatDate(date, "MMM, yyyy"));
      setCurrentDate(date);
      router.replace({
        pathname: route.tasks,
        query: { date: formatDate(date, "yyyy-MM-dd") },
      });
    },
    [router],
  );

  const handleDayChange = useCallback(
    (date: Date) => {
      router.replace({
        pathname: route.tasks,
        query: { date: formatDate(date, "yyyy-MM-dd") },
      });
    },
    [router],
  );

  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden py-4">
      <div className="flex items-center justify-between">
        <Popover>
          <PopoverTrigger className="flex items-center gap-2">
            <p className="px-2 text-2xl font-bold">{title}</p>
            <CalendarIcon className="size-6" />
          </PopoverTrigger>
          <PopoverContent>
            <LocalizedCalendar
              mode="single"
              selected={selectedDate}
              defaultMonth={currentDate}
              onSelect={handleCalendarChange}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Link href={route.newTask}>
          <Button className="h-12 rounded-full bg-gradient-linear">
            <Plus size={16} className="mr-2" />
            <p className="mr-2">Add task</p>
          </Button>
        </Link>
      </div>

      <WeeklyCarousel
        selectedDate={selectedDate}
        items={taskSummaries.map((taskSummary) => ({
          date: taskSummary.date,
          element: (
            <TaskElement
              done={taskSummary.completedCount}
              pending={taskSummary.pendingCount}
            />
          ),
        }))}
        emptyElement={<EmptyElement />}
        onMonthChange={handleMonthChange}
        onDayChange={handleDayChange}
      />
    </div>
  );
}
