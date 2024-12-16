import "server-only";

import { db } from "@/db";
import {
  optionTable,
  questionnaireTable,
  questionTable,
  responseTable,
} from "@/db/schema";
import { and, eq, sql } from "drizzle-orm";

export async function getQuestionnaire(userId: string, date: Date) {
  const dateStr = date.toISOString().slice(0, 10);

  const questionnaire = await db
    .select({
      userId: questionnaireTable.userId,
      date: questionnaireTable.date,
      submited: questionnaireTable.submited,
    })
    .from(questionnaireTable)
    .where(
      and(
        eq(questionnaireTable.userId, userId),
        eq(questionnaireTable.date, dateStr),
      ),
    );

  if (!questionnaire) {
    throw new Error("Questionnaire not found");
  }

  const questions = await db
    .select({
      id: questionTable.id,
      dimension: questionTable.dimension,
      text: questionTable.text,
    })
    .from(questionTable)
    .where(
      and(
        eq(questionTable.questionnaireUserId, userId),
        eq(questionTable.questionnaireDate, dateStr),
      ),
    );

  const options = await db
    .select({
      id: optionTable.id,
      questionId: optionTable.questionId,
      text: optionTable.text,
      score: optionTable.score,
    })
    .from(optionTable)
    .where(
      and(
        eq(optionTable.questionId, sql`ANY(${questions.map((q) => q.id)})`), // Map all question IDs
      ),
    );

  const responses = await db
    .select({
      questionId: responseTable.questionId,
      optionId: responseTable.optionId,
    })
    .from(responseTable)
    .where(eq(responseTable.userId, userId));

  const detailedQuestions = questions.map((question) => ({
    ...question,
    options: options.filter((option) => option.questionId === question.id),
    response: responses.find((response) => response.questionId === question.id)
      ?.optionId,
  }));

  return {
    ...questionnaire,
    questions: detailedQuestions,
  };
}

export async function saveQuestionnaire(
  userId: string,
  date: Date,
  questions: {
    id: number;
    response: number;
  }[],
) {
  const dateStr = date.toISOString().slice(0, 10);

  await db.transaction(async (trx) => {
    await trx
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

    for (const { id, response } of questions) {
      await trx
        .insert(responseTable)
        .values({
          userId,
          questionId: id,
          optionId: response,
        })
        .onConflictDoUpdate({
          target: [responseTable.userId, responseTable.questionId],
          set: {
            optionId: response,
          },
        });
    }
  });
}

export async function saveResponse(
  userId: string,
  questionId: number,
  optionId: number,
) {
  await db
    .insert(responseTable)
    .values({
      userId,
      questionId,
      optionId,
    })
    .onConflictDoUpdate({
      target: [responseTable.userId, responseTable.questionId],
      set: {
        optionId,
      },
    });
}
