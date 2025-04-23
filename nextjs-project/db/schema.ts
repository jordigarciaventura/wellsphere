import { users as usersTable } from "@/db/authSchema.ts";
import { Weekday } from "@/features/tasks/types/date";
import { enumToPgEnum } from "@/lib/utils";
import { Dimension, Mood, Role } from "@/types/mood";
import {
  boolean,
  date,
  foreignKey,
  index,
  integer,
  json,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const dimensionEnum = pgEnum("dimension", enumToPgEnum(Dimension));

export const weeksdaysEnum = pgEnum("weekdays", enumToPgEnum(Weekday));

export const moodEnum = pgEnum("mood", enumToPgEnum(Mood));

export const messageRoleEnum = pgEnum("role", enumToPgEnum(Role));

export const scoresTable = pgTable("scores", {
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => usersTable.id),
  date: date().notNull(), // it is a string
  dimensionId: dimensionEnum().notNull(),
  score: integer().notNull(),
});

export const moodEntriesTable = pgTable(
  "moodEntries",
  {
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    date: date().notNull(), // it is a string
    mood: moodEnum().notNull(),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.userId, t.date] }),
    };
  },
);

export const tasksTable = pgTable("tasks", {
  id: serial().primaryKey(),
  title: varchar({ length: 140 }).notNull(),
  description: varchar({ length: 200 }),
  completed: boolean().notNull().default(false),
  dimensions: dimensionEnum().array(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow(),
  startDate: timestamp({ withTimezone: true }),
  endDate: timestamp({ withTimezone: true }),
  weekdays: weeksdaysEnum().array(),
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => usersTable.id),
});

export const journalEntriesTable = pgTable(
  "journalEntries",
  {
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    date: date().notNull(), // it is a string
    content: text().notNull(),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.userId, t.date] }),
    };
  },
);

export const messagesTable = pgTable(
  "messages",
  {
    id: uuid().primaryKey(),
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    role: messageRoleEnum().notNull(),
    content: text().notNull(),
    createdAt: timestamp({ withTimezone: true }).defaultNow(),
    metadata: json(),
  },
  (table) => ({
    userIdIndex: index("user_id_idx").on(table.userId),
    createdAtIndex: index("created_at_idx").on(table.createdAt),
  }),
);

export const questionnaireTable = pgTable(
  "questionnaires",
  {
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    date: date().notNull(), // it is a string
    submited: boolean().notNull().default(false),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.date] }),
    };
  },
);

export const questionTable = pgTable(
  "questions",
  {
    id: serial().primaryKey(),
    dimension: dimensionEnum().notNull(),
    label: text().notNull(),
    value: text().notNull(),
    questionnaireUserId: varchar({ length: 50 }).notNull(),
    questionnaireDate: date().notNull(),
  },
  (table) => ({
    questionnaireReference: foreignKey({
      columns: [table.questionnaireUserId, table.questionnaireDate],
      foreignColumns: [questionnaireTable.userId, questionnaireTable.date],
    }),
  }),
);

export const optionTable = pgTable("options", {
  id: serial().primaryKey(),
  questionId: integer()
    .notNull()
    .references(() => questionTable.id),
  label: text().notNull(),
  value: text().notNull(),
  score: integer().notNull(),
});

export const responseTable = pgTable("responses", {
  userId: varchar({ length: 255 }).notNull(),
  questionId: integer()
    .notNull()
    .references(() => questionTable.id),
  optionId: integer()
    .notNull()
    .references(() => optionTable.id),
});
