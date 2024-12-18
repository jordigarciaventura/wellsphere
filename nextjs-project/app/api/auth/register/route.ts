import { createUser, getUserByEmail } from "@/features/auth/data-access/users";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    const existingUser = await getUserByEmail(email);
    if (existingUser[0] != null) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    createUser(username, email, password);
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
