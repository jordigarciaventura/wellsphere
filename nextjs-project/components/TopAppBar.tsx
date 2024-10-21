"use client";

import { Avatar, Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Menu } from "lucide-react";
import dynamic from "next/dynamic";

const ColorDot = dynamic(
  () =>
    import("@mui/material/styles").then((mod) =>
      mod.styled("span")(({ theme }) => ({
        width: 8,
        height: 8,
        backgroundColor: "#00796b",
        borderRadius: "50%",
        display: "inline-block",
        marginRight: theme.spacing(1),
      })),
    ),
  { ssr: false },
);

export default function TopAppBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="mx-auto flex w-full justify-between">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          WellSphere
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ColorDot />
          <Avatar sx={{ width: 32, height: 32 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
