"use client";

import useThemeToggle from "@/features/theme/components/useThemeToggle";

interface Props {
  children?: React.ReactNode;
}

export default function ClientThemeToggleButton({ children }: Props) {
  const toggleTheme = useThemeToggle();

  return (
    <button
      onClick={toggleTheme}
      className="flex w-full items-center gap-4 px-4 py-3 text-left"
    >
      {children}
    </button>
  );
}
