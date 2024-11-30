"use client";

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { getMoodColor } from "@/lib/colors";
import { getMoodIcon } from "@/lib/icons";
import { Mood, MoodEntry } from "@/types/mood";
import { getRandomMood } from "@/utils/mockData";
import { addDays } from "date-fns";

const generateMockData = (startDate: Date, endDate: Date) => {
  const dates = [];
  for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
    if (Math.random() < 0.1) {
      continue;
    }
    dates.push({
      date: date.toISOString().slice(0, 10),
      mood: getRandomMood(),
    });
  }
  return dates;
};

const incrementMood = (moodEntry: MoodEntry) =>
  ({
    ...moodEntry,
    mood: moodEntry.mood + 1,
  }) as MoodEntry;

const mockData = generateMockData(new Date("2024-01-01"), new Date());

const chartConfig = {
  mood: {
    label: "Mood",
  },
  veryhappy: {
    label: "Very Happy",
    color: "hsl(var(--mood-veryhappy))",
  },
  happy: {
    label: "Happy",
    color: "hsl(var(--mood-happy))",
  },
  neutral: {
    label: "Neutral",
    color: "hsl(var(--mood-neutral))",
  },
  sad: {
    label: "Sad",
    color: "hsl(var(--mood-sad))",
  },
  verysad: {
    label: "Very Sad",
    color: "hsl(var(--mood-verysad))",
  },
} satisfies ChartConfig;

const CustomYAxisTick = ({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: { value: number };
}) => {
  const moodIcons = {
    1: getMoodIcon(Mood.VerySad),
    2: getMoodIcon(Mood.Sad),
    3: getMoodIcon(Mood.Neutral),
    4: getMoodIcon(Mood.Happy),
    5: getMoodIcon(Mood.VeryHappy),
  };

  const icon = moodIcons[payload.value as keyof typeof moodIcons];

  return (
    <g transform={`translate(${x},${y})`}>
      {icon ? (
        <foreignObject x={-36} y={-12} width={32} height={32}>
          {icon}
        </foreignObject>
      ) : null}
    </g>
  );
};

export function MoodLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mood evolution</CardTitle>
        <CardDescription>Last 10 days</CardDescription>
      </CardHeader>
      <CardContent className="h-80 p-0">
        <ChartContainer
          config={chartConfig}
          className="h-full w-full overflow-hidden"
        >
          <BarChart accessibilityLayer data={mockData.map(incrementMood)}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis
              dataKey="mood"
              ticks={[1, 2, 3, 4, 5]}
              domain={[0, 6]}
              tick={(props) => <CustomYAxisTick {...props} />}
            />
            <Bar dataKey="mood" layout="vertical" radius={4}>
              {mockData.map(incrementMood).map((entry, index) => {
                return <Cell fill={getMoodColor(entry.mood)} />;
              })}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
