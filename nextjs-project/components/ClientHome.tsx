"use client";

import MoodWeekCarousel from "@/components/mood/MoodWeekCarousel";
import { Button } from "@/components/ui/button";

export default function ClientHome() {
  const moods = [
    {
      date: new Date(2024, 9, 10),
      mood: 0,
    },
    {
      date: new Date(2024, 9, 11),
      mood: 1,
    },
    {
      date: new Date(2024, 9, 12),
      mood: 2,
    },
    {
      date: new Date(2024, 9, 13),
      mood: 3,
    },
    {
      date: new Date(2024, 9, 14),
      mood: 4,
    },
    {
      date: new Date(2024, 9, 15),
      mood: 0,
    },
    {
      date: new Date(2024, 9, 16),
      mood: 1,
    },
    {
      date: new Date(2024, 9, 17),
      mood: 2,
    },
    {
      date: new Date(2024, 9, 18),
      mood: 3,
    },
    {
      date: new Date(2024, 9, 19),
      mood: 4,
    },
    {
      date: new Date(2024, 9, 20),
      mood: 0,
    },
    {
      date: new Date(2024, 9, 21),
      mood: 1,
    },
    {
      date: new Date(2024, 9, 22),
      mood: 2,
    },
    {
      date: new Date(2024, 9, 23),
      mood: 3,
    },
    {
      date: new Date(2024, 9, 24),
      mood: 4,
    },
    {
      date: new Date(2024, 9, 25),
      mood: 0,
    },
    {
      date: new Date(2024, 9, 26),
      mood: 1,
    },
    {
      date: new Date(2024, 9, 27),
      mood: 2,
    },
    {
      date: new Date(2024, 9, 29),
      mood: 4,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <MoodWeekCarousel
        year={2024}
        month={9}
        moods={moods}
        selectedDate={new Date(2024, 9, 10)}
      />
      <Button className="mb-4 bg-gradient-linear">Button</Button>
    </div>
  );
}
