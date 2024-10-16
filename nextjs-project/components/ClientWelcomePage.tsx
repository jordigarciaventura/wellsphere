"use client";

import Logo from "@/public/favicon.svg";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";

export default function ClientWelcomePage() {
  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 4, width: 200, height: 200 }}>
          <Image
            src={Logo as string}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Welcome to WellSphere
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Welcome to WellSphere. We welcome you to the new innovative experience
          in improving your overall health by targeting all 6 dimensions of
          Wellness.
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Button variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Log In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
