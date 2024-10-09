import { cookies } from "next/headers";

export const getThemeFromCookies = () => {
  const mode = (cookies().get("mui.mode")?.value ?? "system") as
    | "system"
    | "light"
    | "dark"
    | undefined;
  const systemMode = cookies().get("mui.systemMode")?.value as
    | "dark"
    | "light"
    | undefined;

  const themeMode = (systemMode ?? mode ?? "light") as "light" | "dark";

  return themeMode;
};
