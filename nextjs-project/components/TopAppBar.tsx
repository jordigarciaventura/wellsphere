"use client";

import { ArrowBack } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signOut, useSession } from "next-auth/react";

export default function TopAppBar() {
  const { data: session } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WellSphere
          </Typography>
          <div className="flex items-center gap-4">
            <Typography variant="body2">{session?.user?.name}</Typography>
            <Avatar src={session?.user?.image || ""}>WS</Avatar>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
