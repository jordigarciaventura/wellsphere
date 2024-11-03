"use client";

import useThemeToggle from "@/components/theme/useThemeToggle";
import { Button } from "@/components/ui/button";

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
