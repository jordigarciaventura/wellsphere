"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-01", mood: 0, fill: "var(--color-verysad)" },
  { date: "2024-04-02", mood: 1, fill: "var(--color-sad)" },
  { date: "2024-04-03", mood: 3, fill: "var(--color-happy)" },
  { date: "2024-04-04", mood: 2, fill: "var(--color-neutral)" },
  { date: "2024-04-05", mood: 4, fill: "var(--color-veryhappy)" },
  { date: "2024-04-06", mood: 1, fill: "var(--color-sad)" },
  { date: "2024-04-07", mood: 2, fill: "var(--color-neutral)" },
  { date: "2024-04-08", mood: 3, fill: "var(--color-happy)" },
  { date: "2024-04-09", mood: 2, fill: "var(--color-neutral)" },
];

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

export function MoodLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mood evolution</CardTitle>
        <CardDescription>30 days ago</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData.map((data) => ({
              ...data,
              mood: data.mood + 1,
            }))}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              tickFormatter={(value) => {
                switch (value) {
                  case 1:
                    return "Very Sad";
                  case 2:
                    return "Sad";
                  case 3:
                    return "Neutral";
                  case 4:
                    return "Happy";
                  case 5:
                    return "Very Happy";
                  default:
                    return "";
                }
              }}
            />
            <Bar dataKey="mood" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
