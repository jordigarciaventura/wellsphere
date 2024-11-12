import { users as usersTable } from "@/db/authSchema.ts";
import { enumToPgEnum } from "@/lib/utils";
import { Dimension, Frequency, Mood, Role } from "@/types/mood";
import {
  boolean,
  date,
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

export const frequencyEnum = pgEnum("frequency", enumToPgEnum(Frequency));

export const moodEnum = pgEnum("mood", enumToPgEnum(Mood));

export const messageRoleEnum = pgEnum("role", enumToPgEnum(Role));

export const scoresTable = pgTable(
  "scores",
  {
    userId: varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    dimensionId: dimensionEnum().notNull(),
    score: integer().notNull(),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.userId, t.dimensionId] }),
    };
  },
);

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
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
  endDate: timestamp(),
  frequency: frequencyEnum(),
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => usersTable.id),
});

export const journalEntriesTable = pgTable("journalEntries", {
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => usersTable.id),
  createdAt: timestamp().defaultNow(),
  title: varchar({ length: 140 }).notNull(),
  entry: varchar({ length: 2000 }).notNull(),
});

export const chatsTable = pgTable(
  "chats",
  {
    id: uuid().primaryKey(),
    title: varchar({ length: 140 }).notNull(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
  },
  (table) => ({
    createdAtIndex: index("idx_created_at").on(table.createdAt),
  }),
);

export const messagesTable = pgTable(
  "messages",
  {
    id: uuid().primaryKey(),
    chatId: uuid()
      .notNull()
      .references(() => chatsTable.id, { onDelete: "cascade" }),
    role: messageRoleEnum().notNull(),
    content: text().notNull(),
    createdAt: timestamp().defaultNow(),
    metadata: json(),
  },
  (table) => ({
    chatIdIndex: index("idx_chat_id").on(table.chatId),
  }),
);
