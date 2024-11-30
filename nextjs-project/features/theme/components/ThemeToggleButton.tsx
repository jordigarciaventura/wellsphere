import ClientThemeToggleButton from "@/features/theme/components/ClientThemeToggleButton";
import ThemeIcon from "@/features/theme/components/ThemeIcon";

export default function ThemeToggleButton() {
  return (
    <ClientThemeToggleButton>
      <ThemeIcon className="size-5" />
      <span>Theme</span>
    </ClientThemeToggleButton>
  );
}
