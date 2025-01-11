import ClientThemeToggleButton from "@/features/theme/components/ClientThemeToggleButton";
import ThemeIcon from "@/features/theme/components/ThemeIcon";
import { getTranslations } from "next-intl/server";

export default async function ThemeToggleButton() {
  const t = await getTranslations("Components.theme-toggle");

  return (
    <ClientThemeToggleButton>
      <ThemeIcon className="size-5" />
      <span>{t("theme")}</span>
    </ClientThemeToggleButton>
  );
}
