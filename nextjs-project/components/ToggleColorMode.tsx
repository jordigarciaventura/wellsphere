import ClientToggleColorMode from "@/components/ClientToggleColorMode";
import { cookies } from "next/headers";

export default function ToggleColorMode() {
  const mode = (cookies().get("mui.mode")?.value ?? "system") as
    | "system"
    | "light"
    | "dark";

  return <ClientToggleColorMode initialMode={mode} />;
}
