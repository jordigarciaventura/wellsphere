import ThemeCookieSetter from "@/theme/ThemeCookieSetter";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeCookieSetter />
      {children}
    </NextThemesProvider>
  );
}
