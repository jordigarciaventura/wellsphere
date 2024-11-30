"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

interface Props {
  color: string;
  label: string;
  title: string;
  description: string;
  data: any[];
}

export function DimensionAreaChart({
  color,
  label,
  title,
  description,
  data,
}: Props) {
  const chartConfig = {
    dimension: {
      label,
      color,
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <ChartContainer
          config={chartConfig}
          className="max-h-52 w-full overflow-hidden"
        >
          <AreaChart
            accessibilityLayer
            data={data}
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
            <Area
              dataKey="value"
              type="basis"
              fill={color}
              fillOpacity={0.4}
              stroke={color}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
