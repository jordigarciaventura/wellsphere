import { users as usersTable } from "@/db/authSchema.ts";
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  time,
  varchar,
} from "drizzle-orm/pg-core";

export const dimensionsTable = pgTable("dimensions", {
  id: serial().primaryKey(),
  name: varchar({ length: 20 }).notNull(),
});

export const scoresTable = pgTable(
  "scores",
  {
    userId: text()
      .notNull()
      .references(() => usersTable.id),
    dimensionId: integer()
      .notNull()
      .references(() => dimensionsTable.id),
    score: integer().notNull(),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.userId, t.dimensionId] }),
    };
  },
);

export const moodsTable = pgTable("moods", {
  id: serial().primaryKey(),
  name: varchar({ length: 20 }).notNull(),
});

export const moodEntriesTable = pgTable(
  "moodEntries",
  {
    userId: text()
      .notNull()
      .references(() => usersTable.id),
    date: varchar({ length: 8 }).notNull(),
    mood: integer().notNull(),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.userId, t.date] }),
    };
  },
);

export const tasksTable = pgTable("tasks", {
  taskId: serial().primaryKey(),
  title: varchar({ length: 140 }).notNull(),
  desc: varchar({ length: 200 }),
  userId: text()
    .notNull()
    .references(() => usersTable.id),
});

export const journalEntriesTable = pgTable(
  "journalEntries",
  {
    userId: text()
      .notNull()
      .references(() => usersTable.id),
    date: varchar({ length: 8 }).notNull(),
    title: varchar({ length: 140 }).notNull(),
    entry: varchar({ length: 2000 }).notNull(),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.userId, t.date] }),
    };
  },
);

export const conversationsTable = pgTable("conversations", {
  id: serial().primaryKey(),
  userId: text()
    .notNull()
    .references(() => usersTable.id),
  time: time().defaultNow(),
});

export const messagesTable = pgTable("messages", {
  id: serial().primaryKey(),
  conversationId: integer()
    .notNull()
    .references(() => conversationsTable.id),
  content: varchar({ length: 250 }).notNull(),
  time: time().defaultNow(),
});
