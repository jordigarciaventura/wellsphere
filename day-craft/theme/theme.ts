"use client";

import { createTheme, ThemeOptions } from "@mui/material";

// https://zenoo.github.io/mui-theme-creator/
const themeOptions = {
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#00796b" },
        secondary: { main: "#ff7f50" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#00796b" },
        secondary: { main: "#ff7f50" },
      },
    },
  },
};

const theme = createTheme(themeOptions as ThemeOptions);

export default theme;
