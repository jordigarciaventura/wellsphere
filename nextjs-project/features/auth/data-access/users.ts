import { db } from "@/db";
import { users } from "@/db/authSchema";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string) {
  return await db
    .select()
    .from(users)
    .where(eq(users.email, email));
}

export async function getUserById(id: string) {
  return await db
    .select()
    .from(users)
    .where(eq(users.id, id));
}