import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  const words = name.trim().split(/\s+/).slice(0, 2);
  const initials = words.reduce((acc, word) => acc + word[0], "");

  return initials.toUpperCase();
}
