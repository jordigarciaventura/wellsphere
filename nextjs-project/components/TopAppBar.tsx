import { ArrowBack } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { auth } from "@/auth"

export default async function TopAppBar() {
  
  const session = await auth();

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
          <Avatar src={session?.user?.image || ''}>WS</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
