import ClientThemeToggleButton from "@/features/theme/components/ClientThemeToggleButton";
import ThemeIcon from "@/features/theme/components/ThemeIcon";

export default function ThemeToggleButton() {
  return (
    
      <ClientThemeToggleButton>
        <div className="flex w-full items-center gap-4 px-4 py-3 text-left">
        <ThemeIcon className="h-5 w-5"/> 
        <span>Theme Select</span>
        </div>
      </ClientThemeToggleButton>
   
  );
}
