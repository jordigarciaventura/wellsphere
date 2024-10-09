"use client";

import { useAppStore } from "@/state/store";
import { useColorScheme } from "@mui/material";
import { setCookie } from "cookies-next";
import { useEffect } from "react";

export default function ThemeCookieSetter() {
  const { mode } = useColorScheme();

  const setMode = useAppStore((state) => state.setMode);

  useEffect(() => {
    if (mode) {
      setCookie("mui.mode", mode ?? "light", {
        expires: new Date(Date.now() + 60 * 60 * 24 * 365),
        path: "/",
      });
      setMode(mode);
    }
  }, [mode]);

  return null;
}
