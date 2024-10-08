"use client";

import { useColorScheme } from "@mui/material";
import { setCookie } from "cookies-next";
import { useEffect } from "react";

export default function ThemeCookieSetter() {
  const { mode } = useColorScheme();

  useEffect(() => {
    setCookie("mui.mode", mode ?? "light", {
      expires: new Date(Date.now() + 60 * 60 * 24 * 365),
      path: "/",
    });
  }, [mode]);

  return null;
}
