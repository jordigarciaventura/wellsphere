"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  className?: string;
  initialTheme?: string;
}

export default function ClientThemeIcon({ className, initialTheme }: Props) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme ?? initialTheme;

  return theme === "light" ? (
    <Moon className={cn("size-5 transition-all", className)} />
  ) : (
    <Sun className={cn("size-6 transition-all", className)} />
  );
}
