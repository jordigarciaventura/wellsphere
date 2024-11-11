import { format } from "date-fns";

export function getDayAbbreviations(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in the month
  const dayAbbreviations = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayName = format(date, "EEE"); // 'EEE' returns the abbreviated day name (e.g., "Tue")
    dayAbbreviations.push(dayName);
  }

  return dayAbbreviations;
}

export function formatMonthAndYear(month: number, year: number) {
  return format(new Date(year, month), "MMM, yyyy");
}
