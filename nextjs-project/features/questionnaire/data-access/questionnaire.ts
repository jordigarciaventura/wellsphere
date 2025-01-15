import { db } from "@/db";
import { questionnaireTable } from "@/db/schema";
import "server-only";

export async function submitQuestionnaire(userId: string, date: Date) {
  const dateStr = date.toISOString().slice(0, 10);

  try {
    await db
      .insert(questionnaireTable)
      .values({
        userId,
        date: dateStr,
        submited: true,
      })
      .onConflictDoUpdate({
        target: [questionnaireTable.userId, questionnaireTable.date],
        set: {
          submited: true,
        },
      });

    console.log("Questionnaire saved successfully.");
  } catch (error) {
    console.error("Error saving questionnaire:", error);
    throw error;
  }
}
