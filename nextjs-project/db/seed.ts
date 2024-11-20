import { Weekday } from "@/features/tasks/types/date";
import { Dimension, Mood } from "@/types/mood";
import { faker } from "@faker-js/faker";
import { formatDate } from "date-fns";
import _ from "lodash";
import { db } from "./index";
import { moodEntriesTable, tasksTable } from "./schema";

const userId = "1f78ab55-95be-4352-8da9-ecc2cec651e8";
const endDate = new Date();
const startDate = new Date(endDate);
startDate.setMonth(startDate.getMonth() - 1);

const moods = Object.values(Mood);
const dimensions = Object.values(Dimension);
const weekdays = Object.values(Weekday);

async function insertMoodEntries(
  userId: string,
  startDate: Date,
  endDate: Date,
) {
  for (
    let date = new Date(startDate);
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
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    for (let i = 0; i < _.random(3, 10); i++) {
      await db.insert(tasksTable).values({
        userId,
        title: faker.lorem.words(),
        description: faker.lorem.sentence(),
        completed: _.sample([true, false]),
        dimensions: _.sampleSize(dimensions, 2),
        createdAt: date,
        updatedAt: date,
        startDate: date,
        endDate: date,
        weekdays: _.sampleSize(weekdays, 2),
      });
    }
  }
}

const main = async () => {
  await insertMoodEntries(userId, startDate, endDate);
  await insertTasks(userId, startDate, endDate);

  process.exit();
};

main();
