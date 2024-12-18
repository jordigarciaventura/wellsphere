import { db } from "@/db";
import { users } from "@/db/authSchema";
import { eq } from "drizzle-orm";

export async function getUserIdByEmail(email: string): Promise<string | null> {
  const result = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return result.length > 0 ? result[0]!.id : null;
}
