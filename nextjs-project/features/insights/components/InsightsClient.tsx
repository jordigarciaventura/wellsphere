"use client";

import JournalHeatMapChart from "@/features/insights/components/JournalHeatMapChart";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DimensionsAreaChart from "@/features/insights/components/DimensionsAreaChart";
import DimensionsRadialChart from "@/features/insights/components/DimensionsRadialChart";
import { MoodLineChart } from "@/features/insights/components/MoodLineChart";
import { addDays } from "date-fns";

const generateJournalingEntries = (startDate: Date, endDate: Date) => {
  const dates = [];

  for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
    if (Math.random() < 0.5) {
      continue;
    }

    dates.push({
      date: date.toISOString().slice(0, 10),
    });
  }

  return dates;
};

const journalingEntries = generateJournalingEntries(
  new Date("2024-06-01"),
  new Date(),
);

export default function InsightsClient() {
  return (
    <div className="mx-auto my-8 flex max-w-2xl flex-col px-4">
      <Tabs defaultValue="dimensions">
        <TabsList className="mb-8 flex h-auto flex-wrap items-center justify-center">
          <TabsTrigger value="dimensions" className="px-4 py-4">
            Dimensions summary
          </TabsTrigger>
          <TabsTrigger value="mood-evolution" className="px-4 py-4">
            Mood evolution
          </TabsTrigger>
          <TabsTrigger value="dimensions-evolution" className="px-4 py-4">
            Dimensions evolution
          </TabsTrigger>
          <TabsTrigger value="journal" className="px-4 py-4">
            Journaling
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dimensions">
          <DimensionsRadialChart />
        </TabsContent>
        <TabsContent value="mood-evolution">
          <MoodLineChart />
        </TabsContent>
        <TabsContent value="dimensions-evolution">
          <DimensionsAreaChart />
        </TabsContent>
        <TabsContent value="journal">
          <JournalHeatMapChart data={journalingEntries} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
