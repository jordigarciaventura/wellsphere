"use client";

import { Button } from "@/components/ui/button";
import {
  getWeekdayByIndex,
  getWeekdaysAbbreviations,
} from "@/features/tasks/lib/date";
import { Weekday } from "@/features/tasks/types/date";
import { cn } from "@/lib/utils";

interface Props {
  selectedDays: Weekday[];
  setSelectedDays: (days: Weekday[]) => void;
}

export default function RecurrencyFormField({
  selectedDays,
  setSelectedDays,
}: Props) {
  const weekDaysAbbreviations = getWeekdaysAbbreviations();

  const toggleDay = (day: Weekday) => {
    setSelectedDays(
      selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day],
    );
  };

  return (
    <div className="flex items-center justify-around gap-2">
      {weekDaysAbbreviations.map((dayAbbreviation, index) => {
        const day = getWeekdayByIndex(index) as Weekday;
        const isSelected = selectedDays.includes(day);
        return (
          <Button
            key={index}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              isSelected
                ? "bg-primary text-white"
                : "bg-violet-200 text-gray-800",
            )}
            onClick={() => toggleDay(day)}
          >
            {dayAbbreviation}
          </Button>
        );
      })}
    </div>
  );
}
