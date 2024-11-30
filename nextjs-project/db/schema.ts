import { users as usersTable } from "@/db/authSchema.ts";
import { Weekday } from "@/features/tasks/types/date";
import { enumToPgEnum } from "@/lib/utils";
import { Dimension, Mood, Role } from "@/types/mood";
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

export const weeksdaysEnum = pgEnum("weekdays", enumToPgEnum(Weekday));

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
  startDate: timestamp(),
  endDate: timestamp(),
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
    userId: varchar({ length: 255 }),
    role: messageRoleEnum().notNull(),
    content: text().notNull(),
    createdAt: timestamp().defaultNow(),
    metadata: json(),
  },
  (table) => ({
    userIdIndex: index("user_id_idx").on(table.userId),
    createdAtIndex: index("created_at_idx").on(table.createdAt),
  }),
);
