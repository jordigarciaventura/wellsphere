"use client";

import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { getMoodIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { Mood } from "@/types/mood";
import { formatDate } from "@/utils/date-utils";
import React from "react";

export const MoodWeekDay = React.forwardRef<
  HTMLDivElement,
  {
    date: Date;
    mood: Mood | null;
    current?: boolean;
    selected?: boolean;
  }
>(function MoodDayElement(
  { date, mood, current = false, selected = false, ...props },
  ref,
) {
  const MoodIcon = getMoodIcon(mood);

  const dayAbbreviation = formatDate(date, "EEE");
  const dayNumber = formatDate(date, "d");

  return (
    <Link
      href={{
        pathname: route.tasks,
        query: { date: formatDate(date, "yyyy-MM-dd") },
      }}
      className={cn(
        "flex min-w-[14.2857%] snap-start flex-col items-center justify-center gap-2",
        current ? "" : "text-neutral-500",
      )}
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

          {MoodIcon}
        </div>
      </div>
    </Link>
  );
});
