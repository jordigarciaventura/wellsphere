import { LanguageSelect } from "@/features/settings/components/LanguageSelect";
import ThemeToggleButton from "@/features/theme/components/ThemeToggleButton";

interface Props {
  defaultLocale: string;
}

export default function CustomizationSettings({ defaultLocale }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="mb-0 text-lg font-medium">Customization</h2>

      <div className="flex flex-col gap-2 rounded-lg border bg-card p-4 shadow-sm">
        <ThemeToggleButton />
        <LanguageSelect
          defaultLocale={defaultLocale}
          className="flex h-12 w-full items-center gap-4 bg-card px-4 py-3 text-left"
        />
      </div>
    </div>
  );
}
