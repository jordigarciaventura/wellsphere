"use client";

import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, _setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, _setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) setMessage(message);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(e);
  };

  const handleGitHubLogin = () => {
    console.log("GitHub Log In");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        {error && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {error}
          </Alert>
        )}
        {message && (
          <Alert severity="success" sx={{ width: "100%", mt: 2 }}>
            {message}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Log In"}
          </Button>
          <Divider sx={{ my: 2 }}>Or</Divider>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={handleGitHubLogin}
            sx={{ mb: 2 }}
          >
            Log in with GitHub
          </Button>
          <Link href={route.register} passHref>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Dont have an account? Sign up
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
