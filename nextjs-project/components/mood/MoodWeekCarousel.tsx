"use client";

import { MoodWeekDay } from "@/components/mood/MoodWeekDay";
import { dateMonthBoundary } from "@/features/home/utils/date";
import { cn } from "@/lib/utils";
import { MoodEntry } from "@/types/mood";
import { formatDate, isSameDay, isSameMonth } from "date-fns";
import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  date: Date;
  moods: MoodEntry[];
  readonly?: boolean;
  onMonthChange?: (date: Date) => void;
}

export default function MoodWeekCarousel({
  moods,
  date: selectedDate,
  readonly = false,
  onMonthChange,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLDivElement>(null);

  const [monthDate, setMonthDate] = useState(selectedDate);

  const dates = dateMonthBoundary(selectedDate);

  const [loaded, setLoaded] = useState(false);

  const centerSelectedElement = () => {
    if (containerRef.current && selectedRef.current) {
      const todayRect = selectedRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      containerRef.current.scrollLeft +=
        todayRect.left -
        containerRect.left -
        containerRect.width / 2 +
        todayRect.width / 2;
    }
  };

  const handleScroll = useCallback(() => {
    const scrollContainer = containerRef.current!;
    const daysNodes = Array.from(scrollContainer.children);

    for (const node of daysNodes) {
      const rect = node.getBoundingClientRect();
      if (rect.left >= 0 && rect.right <= window.innerWidth) {
        const month = JSON.parse(node.getAttribute("data-month")!) as number;
        const year = JSON.parse(node.getAttribute("data-year")!) as number;
        const newCurrentDate = new Date(year, month);
        onMonthChange?.(newCurrentDate);
        setMonthDate(newCurrentDate);
        break;
      }
    }
  }, [selectedDate, monthDate, containerRef, onMonthChange]);

  useEffect(() => {
    const scrollContainer = containerRef.current!;
    const debouncedHandleScroll = debounce(handleScroll, 100);

    scrollContainer.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", debouncedHandleScroll);
      debouncedHandleScroll.cancel();
    };
  }, [containerRef, handleScroll]);

  useEffect(() => {
    requestAnimationFrame(() => centerSelectedElement());
    setLoaded(true);
  }, [selectedDate]);

  const getMood = (date: Date) => {
    const mood = moods.find((mood) => {
      const moodDate = new Date(mood.date);
      return (
        moodDate.getFullYear() === date.getFullYear() &&
        moodDate.getMonth() === date.getMonth() &&
        moodDate.getDate() === date.getDate()
      );
    });

    return mood?.mood ?? null;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "no-scrollbar flex w-full select-none snap-x snap-mandatory overflow-x-scroll",
        readonly ? "pointer-events-none" : "",
        loaded ? "opacity-100" : "opacity-0",
      )}
    >
      {dates.map((date) => {
        const selected = isSameDay(date, selectedDate);
        const key = formatDate(date, "yyyy-MM-dd");
        return (
          <MoodWeekDay
            key={key}
            date={date}
            mood={getMood(date)}
            data-month={date.getMonth()}
            data-year={date.getFullYear()}
            current={isSameMonth(date, monthDate)}
            selected={selected}
            ref={selected ? selectedRef : undefined}
          />
        );
      })}
    </div>
  );
}
