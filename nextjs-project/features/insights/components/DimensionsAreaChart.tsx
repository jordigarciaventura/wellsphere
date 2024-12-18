"use client";

import { DimensionAreaChart } from "@/features/insights/components/DimensionAreaChart";

import { Dimension } from "@/types/mood";
import { getDimensionColor } from "@/utils/colors";
import { addDays, format } from "date-fns";
import { capitalize } from "lodash";

const generateMockData = (startDate: Date, endDate: Date) => {
  const dates = [];
  const value = 0.5;
  for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
    const inc = Math.random() < 0.5 ? 0.05 : -0.05;

    dates.push({
      date: format(date, "yyyy-MM-dd"),
      value: Math.max(0, Math.min(1, value + inc)),
    });
  }
  return dates;
};

const today = new Date();
const tenDaysBeforeToday = addDays(today, -10);

export default function DimensionsAreaChart() {
  const physicalData = generateMockData(tenDaysBeforeToday, today);
  const emotionalData = generateMockData(tenDaysBeforeToday, today);
  const socialData = generateMockData(tenDaysBeforeToday, today);
  const intellectualData = generateMockData(tenDaysBeforeToday, today);
  const spiritualData = generateMockData(tenDaysBeforeToday, today);
  const occupationalData = generateMockData(tenDaysBeforeToday, today);

  const chartData = [
    { dimension: Dimension.Physical, data: physicalData },
    { dimension: Dimension.Emotional, data: emotionalData },
    { dimension: Dimension.Social, data: socialData },
    { dimension: Dimension.Intellectual, data: intellectualData },
    { dimension: Dimension.Spiritual, data: spiritualData },
    { dimension: Dimension.Occupational, data: occupationalData },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {chartData.map(({ dimension, data }) => (
        <DimensionAreaChart
          key={dimension}
          color={getDimensionColor(dimension)}
          label={dimension}
          title={capitalize(dimension)}
          description="Last 7 days evolution"
          data={data}
        />
      ))}
    </div>
  );
}
