"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { route } from "@/config/site";
import MoodWeekCarousel from "@/features/journal/components/MoodWeekCarousel";
import LocalizedCalendar from "@/features/language/components/LocalizedCalendar";
import { useRouter } from "@/i18n/routing";
import { MoodEntry } from "@/types/mood";
import { formatDate } from "@/utils/date-utils";
import { CalendarIcon } from "lucide-react";
import { useCallback, useState } from "react";

interface Props {
  date: Date;
  moods: MoodEntry[];
  rightSlot?: React.ReactNode;
}

export default function MoodWeekPicker({
  moods,
  date: selectedDate,
  rightSlot,
}: Props) {
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
        pathname: route.journal,
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
        {rightSlot}
      </div>

      <MoodWeekCarousel
        date={selectedDate}
        moods={moods}
        onMonthChange={handleMonthChange}
      />
    </div>
  );
}
