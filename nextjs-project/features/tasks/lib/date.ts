import { Weekday } from "@/features/tasks/types/date";
import { formatDate } from "@/utils/date-utils";

export function getWeekdaysAbbreviations() {
  const abbreviations = [];
  const startDate = new Date(2024, 0, 7);

  for (let i = 0; i < 7; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    abbreviations.push(formatDate(day, "EEEEE"));
  }

  return abbreviations;
}

export function getWeekdayByIndex(index: number): Weekday | undefined {
  const weekdays = Object.values(Weekday); // Create an array of enum values
  return weekdays[index]; // Access by index
}
