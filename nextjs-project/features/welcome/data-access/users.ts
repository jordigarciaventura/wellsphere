import { db } from "@/db";
import { questionnaireTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function isNewUser(userId: string) {
  const result = await db
    .select({ id: questionnaireTable.userId })
    .from(questionnaireTable)
    .where(
      and(
        eq(questionnaireTable.userId, userId),
        eq(questionnaireTable.submited, true),
      ),
    )
    .limit(1);

  return result.length === 0;
}
