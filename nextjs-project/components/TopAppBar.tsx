"use client";

import { Avatar, Box, Button, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
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
  const { data: session } = useSession();

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
          <div className="flex items-center gap-4">
            <Typography variant="body2">{session?.user?.name}</Typography>
            <Avatar src={session?.user?.image ?? ""}>WS</Avatar>
            {session ? (
              <Button color="inherit" onClick={() => signOut()}>
                Log Out
              </Button>
            ) : (
              <Button color="inherit" href="/login">
                Log In
              </Button>
            )}
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
