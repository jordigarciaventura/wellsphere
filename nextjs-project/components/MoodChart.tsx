"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

// Emotion data (from sad to happy)
const emojis = ["😡", "😐", "😍", "😁"];

// Mood chart data
const moodData = {
  labels: ["W1", "W2", "W3", "W4"], // Weeks on the X axis
  datasets: [
    {
      label: "Mood",
      data: [0, 1, 3, 2], // Indices of the corresponding emotions
      backgroundColor: "rgba(128, 90, 213, 0.2)",
      borderColor: "rgba(128, 90, 213, 1)",
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: "rgba(128, 90, 213, 1)",
    },
  ],
};

// Chart options
const moodOptions: any = {
  scales: {
    y: {
      beginAtZero: true,
      max: 3, // Maximum index of the emotion array
      ticks: {
        callback: function (value: number) {
          return emojis[value]; // Shows emojis on the Y axis
        },
        stepSize: 1, // Step to alternate between emotions
      },
    },
  },
};

export default function MoodChart() {
  return <Line data={moodData} options={moodOptions} />; // Renders the chart
}
