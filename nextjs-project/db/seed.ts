import { Dimension, Frequency, Mood } from "@/types/mood";
import { faker } from "@faker-js/faker";
import { formatDate } from "date-fns";
import _ from "lodash";
import { db } from "./index";
import { moodEntriesTable, tasksTable } from "./schema";

const userId = "1467157f-12ad-4a59-b4b5-1b18f36b3773";
const startDate = new Date(2024, 9, 1);
const endDate = new Date(2024, 10, 8);

const moods = Object.values(Mood);
const dimensions = Object.values(Dimension);
const frequencies = Object.values(Frequency);

async function insertMoodEntries(
  userId: string,
  startDate: Date,
  endDate: Date,
) {
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const randomIndex = Math.floor(Math.random() * moods.length);
    const dateStr = formatDate(date, "yyyy-MM-dd");

    await db.insert(moodEntriesTable).values({
      userId,
      date: dateStr,
      mood: moods[randomIndex] as Mood,
    });
  }
}

async function insertTasks(userId: string, startDate: Date, endDate: Date) {
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    await db.insert(tasksTable).values({
      userId,
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      completed: _.sample([true, false]),
      dimensions: _.sampleSize(dimensions, 2),
      createdAt: date,
      updatedAt: date,
      endDate: date,
      frequency: _.sample(frequencies) as Frequency,
    });
  }
}

const main = async () => {
  await insertMoodEntries(userId, startDate, endDate);
  await insertTasks(userId, startDate, endDate);

  process.exit();
};

main();
