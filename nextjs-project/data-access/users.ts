import { users as usersTable } from "@/db/authSchema";
import { db } from "@/db/index";
import { eq } from "drizzle-orm/sql";

export async function insertUser(userData: { name: string }) {
  await db.insert(usersTable).values(userData).execute();
}

export async function getUsers() {
  return await db.select().from(usersTable);
}

export async function getUserById(id: number) {
  return await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id.toString()));
}

export async function updateUser(userId: number, username: string) {
  await db
    .update(usersTable)
    .set({ name: username })
    .where(eq(usersTable.id, userId.toString()));
}

export async function deleteUserById(id: number) {
  await db.delete(usersTable).where(eq(usersTable.id, id.toString()));
}
