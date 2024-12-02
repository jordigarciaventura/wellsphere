"use client";

import { WeekDay } from "@/components/weekly-carousel/WeekDay";
import { dateMonthBoundary } from "@/features/home/utils/date";
import { cn } from "@/lib/utils";
import { formatDate, isSameDay, isSameMonth } from "date-fns";
import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";

type WeekItem = {
  date: Date;
  element: React.ReactNode;
};

interface Props {
  selectedDate: Date;
  items: WeekItem[];
  emptyElement: React.ReactNode;
  readonly?: boolean;
  onMonthChange?: (date: Date) => void;
  onDayChange?: (date: Date) => void;
}

export default function WeeklyCarousel({
  selectedDate,
  items,
  emptyElement,
  readonly = false,
  onMonthChange,
  onDayChange,
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

  const getItem = (date: Date) => {
    const item = items.find((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === date.getFullYear() &&
        itemDate.getMonth() === date.getMonth() &&
        itemDate.getDate() === date.getDate()
      );
    });

    return item?.element ?? emptyElement;
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
          <WeekDay
            key={key}
            date={date}
            data-month={date.getMonth()}
            data-year={date.getFullYear()}
            current={isSameMonth(date, monthDate)}
            selected={selected}
            ref={selected ? selectedRef : undefined}
            onClick={() => onDayChange?.(date)}
          >
            {getItem(date)}
          </WeekDay>
        );
      })}
    </div>
  );
}
