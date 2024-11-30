import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function enumToPgEnum<T extends Record<string, string | number>>(
  myEnum: T,
): [T[keyof T], ...T[keyof T][]] {
  return Object.values(myEnum).map((value) => value.toString()) as [
    T[keyof T],
    ...T[keyof T][],
  ];
}
