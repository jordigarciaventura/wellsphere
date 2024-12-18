"use client";

import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date-utils";
import React from "react";

export const WeekDay = React.forwardRef<
  HTMLDivElement,
  {
    date: Date;
    children: React.ReactNode;
    current?: boolean;
    selected?: boolean;
    onClick?: (date: Date) => void;
  }
>(function MoodDayElement(
  { date, current = false, selected = false, children, onClick, ...props },
  ref,
) {
  const dayAbbreviation = formatDate(date, "EEE");
  const dayNumber = formatDate(date, "d");

  return (
    <button
      className={cn(
        "flex min-w-[14.2857%] snap-start flex-col items-center justify-center gap-2",
        current ? "" : "text-neutral-500",
      )}
      onClick={() => onClick?.(date)}
      {...props}
    >
      <div ref={ref}>
        <div
          className={cn(
            "rounded-3xl px-4 py-3",
            selected ? "bg-primary/10 dark:bg-primary/50" : "",
          )}
        >
          <div className="flex flex-col items-center">
            <p className="text-xs">{dayAbbreviation}</p>
            <span className="text-xs font-thin">{dayNumber}</span>
          </div>

          {children}
        </div>
      </div>
    </button>
  );
});
