import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  subMonths,
} from "date-fns";

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

export function dateMonthBoundary(date: Date) {
  const startDate = startOfMonth(subMonths(date, 1));
  const endDate = endOfMonth(addMonths(date, 1));
  return eachDayOfInterval({ start: startDate, end: endDate });
}
