"use client";

// import DimensionsRadialChart from "@/features/insights/components/DimensionsRadialChart";
import JournalHeatMapChart from "@/features/insights/components/JournalHeatMapChart";
// import { MoodLineChart } from "@/features/insights/components/MoodLineChart";

export default function InsightsClient() {
  return (
    <div className="my-8 flex flex-col gap-8 px-4">
      {/* <MoodLineChart /> */}
      {/* <DimensionsRadialChart /> */}
      <JournalHeatMapChart />
    </div>
  );
}

// https://tremor.so/docs/visualizations/tracker
