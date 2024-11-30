"use client";

import { PolarGrid, RadialBar, RadialBarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

interface Props {
  icon: React.ReactNode;
  title: string;
  value: number;
  color?: string;
  className?: string;
}

export function DimensionRadialChart({
  icon,
  title,
  value,
  color,
  className,
}: Props) {
  const endAngle = -270 + 360 * (1 - value);

  const chartData = [{ value, fill: "var(--color-desktop)" }];

  const chartConfig = {
    value: {
      label: "Value",
    },
    desktop: {
      color: `hsl(var(${color}))`,
    },
  } satisfies ChartConfig;

  return (
    <div
      className={cn(
        "relative flex size-36 items-center justify-center",
        className,
      )}
    >
      <ChartContainer
        config={chartConfig}
        className="aspect-square h-full min-h-64 w-full"
      >
        <RadialBarChart
          accessibilityLayer
          data={chartData}
          startAngle={90}
          endAngle={endAngle}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[59, 48]}
          />
          <RadialBar dataKey="value" background cornerRadius={10}></RadialBar>
        </RadialBarChart>
      </ChartContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        {icon}
        <p className="text-xs font-medium">{title}</p>
      </div>
    </div>
  );
}
