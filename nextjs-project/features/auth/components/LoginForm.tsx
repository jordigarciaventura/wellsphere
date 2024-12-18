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
import { useSearchParams } from "next/navigation";

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      event.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;
    signIn("credentials", {
      email,
      password,
      callbackUrl,
    });
  }

  console.log("callbackUrl", callbackUrl);

  return (
    <Card className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signIn("google", { callbackUrl })}
            >
              <IconBrandGoogleFilled />
              Login with Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signIn("github", { callbackUrl })}
            >
              <IconBrandGithub /> Login with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href={route.register} className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
