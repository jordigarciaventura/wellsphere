import { db } from "@/db/index" 
import { eq } from "drizzle-orm/sql";
import { usersTable } from "@/db/schema";

export async function insertUser(userData: { username: string }) {
    await db.insert(usersTable).values(userData).execute();
}

export async function getUsers() {
    return await db.select().from(usersTable);
}

export async function getUserById(id: number) {
    return await db.select().from(usersTable).where(eq(usersTable.id, id));
}

export async function updateUser(userId: number, username: string) {
    await db.update(usersTable).set({ username: username}).where(eq(usersTable.id, userId));
}

export async function deleteUserById(id: number) {
    await db.delete(usersTable).where(eq(usersTable.id, id));
}


