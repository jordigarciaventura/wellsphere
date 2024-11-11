import ClientThemeIcon from "@/features/theme/components/ClientThemeIcon";
import { cookies } from "next/headers";

interface Props {
  className?: string;
}

export default function ThemeIcon({ className }: Props) {
  const theme = cookies().get("__theme__")?.value ?? "light";

  return <ClientThemeIcon initialTheme={theme} className={className} />;
}
