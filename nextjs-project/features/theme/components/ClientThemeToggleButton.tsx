"use client";

import { Button } from "@/components/ui/button";
import useThemeToggle from "@/features/theme/components/useThemeToggle";

interface Props {
  children?: React.ReactNode;
}

export default function ClientThemeToggleButton({ children }: Props) {
  const toggleTheme = useThemeToggle();

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      {children}
    </Button>
  );
}
