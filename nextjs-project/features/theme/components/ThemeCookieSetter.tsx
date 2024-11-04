"use client";

import { setCookie } from "cookies-next";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeCookieSetter() {
  const { theme } = useTheme();

  useEffect(() => {
    setCookie("__theme__", theme, {
      expires: new Date(Date.now() + 60 * 60 * 24 * 365),
      path: "/",
    });
  }, [theme]);

  return null;
}
