"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatMonthAndYear, getDayAbbreviations } from "@/lib/date";
import { cn } from "@/lib/utils";
import { MoodEntry } from "@/types/mood";
import {
  Angry,
  CalendarIcon,
  CircleDashed,
  Frown,
  Laugh,
  Meh,
  Smile,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  year: number;
  month: number;
  moods: MoodEntry[];
  selectedDate: Date;
}

const getMoodIcon = (mood: number | null) => {
  switch (mood) {
    case 0:
      return <Angry className="fill-red-400 stroke-red-950" />;
    case 1:
      return <Frown className="fill-orange-400 stroke-orange-900" />;
    case 2:
      return <Meh className="fill-blue-400 stroke-blue-900" />;
    case 3:
      return <Smile className="fill-green-400 stroke-green-900" />;
    case 4:
      return <Laugh className="fill-teal-400 stroke-teal-900" />;
    default:
      return <CircleDashed />;
  }
};

const MoodDay = React.forwardRef<
  HTMLDivElement,
  {
    day: string;
    dayNumber: number;
    mood: number | null;
    selected?: boolean;
  }
>(({ day, dayNumber, mood, selected = false, ...props }, ref) => {
  const MoodIcon = getMoodIcon(mood);

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-w-[14.2857%] snap-start flex-col items-center justify-center gap-2 rounded-3xl px-4 py-3",
        selected ? "bg-primary/20 dark:bg-primary/50" : "",
      )}
      {...props}
    >
      <div className="flex flex-col items-center">
        <p className="text-xs">{day}</p>
        <span className="text-xs font-thin">{dayNumber}</span>
      </div>

      {MoodIcon}
    </div>
  );
});

export default function MoodWeekCarousel({
  year,
  month,
  moods,
  selectedDate,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const todayRef = useRef<HTMLDivElement>(null);

  const currentDate = new Date(year, month);
  const previousDate = new Date(year, month - 1);
  const nextDate = new Date(year, month + 1);

  const daysInPreviousMonth = getDayAbbreviations(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );
  const daysInCurrentMonth = getDayAbbreviations(
    previousDate.getFullYear(),
    previousDate.getMonth(),
  );
  const daysInNextMonth = getDayAbbreviations(
    nextDate.getFullYear(),
    nextDate.getMonth(),
  );

  const [title, setTitle] = useState(() => formatMonthAndYear(month, year));

  const [isLoaded, setIsLoaded] = useState(false);

  const centerSelectedElement = () => {
    if (containerRef.current && todayRef.current) {
      const todayRect = todayRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      containerRef.current.scrollLeft +=
        todayRect.left -
        containerRect.left -
        containerRect.width / 2 +
        todayRect.width / 2;
    }

    setTimeout(() => setIsLoaded(true), 0);
  };

  const updateMonthTitle = () => {
    const scrollContainer = containerRef.current as HTMLDivElement;
    const daysNodes = Array.from(scrollContainer.children);

    for (let node of daysNodes) {
      const rect = node.getBoundingClientRect();
      if (rect.left >= 0 && rect.right <= window.innerWidth) {
        const month = JSON.parse(
          node.getAttribute("data-month") ?? selectedDate.getMonth().toString(),
        );
        const year = JSON.parse(
          node.getAttribute("data-year") ??
            selectedDate.getFullYear().toString(),
        );
        setTitle(formatMonthAndYear(month, year));
        break;
      }
    }
  };

  useEffect(() => {
    const scrollContainer = containerRef.current as HTMLDivElement;
    scrollContainer.addEventListener("scroll", updateMonthTitle);

    return () => {
      scrollContainer.removeEventListener("scroll", updateMonthTitle);
    };
  }, [containerRef]);

  useEffect(() => {
    requestAnimationFrame(() => centerSelectedElement());
  }, []);

  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDay = selectedDate.getDate();

  const getMood = (date: Date) => {
    const mood = moods.find(
      (mood) =>
        mood.date.getFullYear() === date.getFullYear() &&
        mood.date.getMonth() === date.getMonth() &&
        mood.date.getDate() === date.getDate(),
    );

    return mood?.mood ?? null;
  };

  return (
    <div
      className={cn(
        "flex w-full max-w-lg flex-col gap-4 overflow-hidden py-4",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="flex items-center gap-2">
        <p className="px-2 text-lg font-bold">{title}</p>
        <Popover>
          <PopoverTrigger>
            <CalendarIcon className="size-6" />
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar flex w-full select-none snap-x snap-mandatory overflow-x-scroll"
      >
        {
          // Render days from previous month
          daysInPreviousMonth.map((day, index) => (
            <MoodDay
              key={index}
              day={day}
              dayNumber={index + 1}
              mood={getMood(
                new Date(
                  previousDate.getFullYear(),
                  previousDate.getMonth(),
                  index + 1,
                ),
              )}
              data-month={previousDate.getMonth()}
              data-year={previousDate.getFullYear()}
            />
          ))
        }

        {
          // Render days from current month
          daysInCurrentMonth.map((day, index) => (
            <MoodDay
              key={index}
              day={day}
              dayNumber={index + 1}
              mood={getMood(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  index + 1,
                ),
              )}
              selected={index + 1 === selectedDay}
              ref={index + 1 === selectedDay ? todayRef : undefined}
              data-month={currentDate.getMonth()}
              data-year={currentDate.getFullYear()}
            />
          ))
        }

        {
          // Render days from next month
          daysInNextMonth.map((day, index) => (
            <MoodDay
              key={index}
              day={day}
              dayNumber={index + 1}
              mood={getMood(
                new Date(
                  nextDate.getFullYear(),
                  nextDate.getMonth(),
                  index + 1,
                ),
              )}
              data-month={nextDate.getMonth()}
              data-year={nextDate.getFullYear()}
            />
          ))
        }
      </div>
    </div>
  );
}
