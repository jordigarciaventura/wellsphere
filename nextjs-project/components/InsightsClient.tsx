"use client";

import CircularProgress from "@/components/CircularProgress";
import MoodChart from "@/components/MoodChart";

export default function InsightsClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Oct, 2020</h2>
          <p className="text-gray-500">Track your progress</p>
        </div>
        <button className="rounded-full bg-purple-500 px-4 py-2 text-white">
          Monthly
        </button>
      </div>

      {/* Day counter */}
      <div className="my-4 text-center">
        <p className="text-sm text-gray-500">Days straight</p>
        <p className="text-4xl font-bold text-purple-500">20</p>
      </div>

      {/* Emojis for emotions */}
      <div className="mb-4 flex justify-center">
        <div className="mx-4 text-center">
          <span className="text-2xl">😁</span>
          <p className="text-sm">W1</p>
        </div>
        <div className="mx-4 text-center">
          <span className="text-2xl">😍</span>
          <p className="text-sm">W2</p>
        </div>
        <div className="mx-4 text-center">
          <span className="text-2xl">😐</span>
          <p className="text-sm">W3</p>
        </div>
        <div className="mx-4 text-center">
          <span className="text-2xl">😡</span>
          <p className="text-sm">W4</p>
        </div>
      </div>

      {/* Mood Tracking Chart */}
      <div className="my-6">
        <p className="text-center text-gray-500">Mood follow-up</p>
        <div className="mt-4 flex h-40 items-center justify-center rounded-lg bg-purple-200">
          <MoodChart />
        </div>
      </div>

      {/* Circular progress */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <CircularProgress label="Emotional" progress={241} total={500} />
        <CircularProgress label="Occupational" progress={370} total={500} />
        <CircularProgress label="Spiritual" progress={120} total={500} />
        <CircularProgress label="Physical" progress={241} total={500} />
        <CircularProgress label="Intelectual" progress={370} total={500} />
        <CircularProgress label="Social" progress={120} total={500} />
      </div>
    </div>
  );
}
