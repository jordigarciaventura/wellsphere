import { NextRequest, NextResponse } from "next/server";
import { createUser, getUserByEmail } from "@/features/auth/data-access/users";
import { signUpSchema } from "@/features/auth/registerSchemas";
import { z } from "zod";
import { ConsoleLogWriter } from "drizzle-orm";


export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();
    
    const existingUser = await getUserByEmail(email);
    if (existingUser[0] != null) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    
    
    createUser(username, email, password);

  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}