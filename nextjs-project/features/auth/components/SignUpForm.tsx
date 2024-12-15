"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

import { signUpSchema } from "../registerSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { redirect } from "next/dist/server/api-utils";

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const username = (event.currentTarget.elements.namedItem(
    "name",
  ) as HTMLInputElement).value;
  const password = (event.currentTarget.elements.namedItem(
    "password",
  ) as HTMLInputElement).value;
  const confirmPassword = (event.currentTarget.elements.namedItem(
    "confirm-password",
  ) as HTMLInputElement).value;

  // Verify password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const email = (event.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verify email structure
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return;
  }

  type SignUpData = z.infer<typeof signUpSchema>;

  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    window.location.href = "/";
  } else {
    alert("Failed to create account");
  }
}

export function SignUpForm() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Fill the form to create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signIn("google")}
            >
              <IconBrandGoogleFilled />
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signIn("github")}
            >
              <IconBrandGithub /> Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href={route.login} className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
