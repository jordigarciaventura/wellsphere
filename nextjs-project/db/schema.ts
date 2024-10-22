import { users as usersTable } from "@/db/authSchema.ts";
import {
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

export const journalEntriesTable = pgTable("journalEntries", {
  userId: text()
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

export const messageRoleEnum = pgEnum("role", [
  "user",
  "system",
  "assistant",
  "tool",
]);

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
