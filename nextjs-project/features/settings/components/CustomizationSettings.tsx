import LanguageSelect from "@/features/language/components/LanguageSelect";
import ThemeToggleButton from "@/features/theme/components/ThemeToggleButton";

export default function Customization() {
  return (
    <div className="space-y-4">
      {/* Título alinhado */}
      <div className="flex items-center gap-4">
        <h2 className="mb-0 text-lg font-medium">Customization</h2>
      </div>

      {/* Quadro com borda arredondada */}
      <div
        className="border border-gray-300 bg-card p-4 shadow-sm"
        style={{ borderRadius: "20px" }}
      >
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <ThemeToggleButton />
          </div>
          <div className="w-full">
            <LanguageSelect />
          </div>
        </div>
      </div>
    </div>
  );
}
