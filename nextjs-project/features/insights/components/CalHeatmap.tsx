"use client";

import "@/features/insights/components/CalHeatmap.css";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";
import CalendarLabel from "cal-heatmap/plugins/CalendarLabel";
import Tooltip from "cal-heatmap/plugins/Tooltip";
import { addDays, format } from "date-fns";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const generateMockData = (startDate, length) =>
  Array.from({ length }, (_, i) => ({
    date: format(addDays(new Date(startDate), i), "yyyy-MM-dd"),
    value: Math.floor(Math.random() * 2),
  }));

const mockData = generateMockData("2012-01-01", 365);

interface Props {
  className?: string;
}

export default function Cal({ className }: Props) {
  const calContainerRef = useRef<HTMLDivElement>(null);
  const calInstanceRef = useRef<CalHeatmap | null>(null);
  const { resolvedTheme } = useTheme();

  const offColor = resolvedTheme === "dark" ? "#3E2F4A" : "#E0E0E0";
  const onColor = resolvedTheme === "dark" ? "#9C2CF3" : "#9C2CF3";

  useEffect(() => {
    if (!calContainerRef.current) return;

    // Clean up the previous heatmap instance if it exists
    if (calInstanceRef.current) {
      calInstanceRef.current.destroy();
    }

    // Create a new heatmap instance
    const cal = new CalHeatmap();
    cal.paint(
      {
        itemSelector: calContainerRef.current,
        theme: "light",
        data: {
          source: mockData,
          type: "json",
          x: "date",
          y: "value",
        },
        date: { start: new Date("2012-01-01"), locale: "en" },
        range: 5,
        scale: {
          color: {
            type: "categorical",
            range: [offColor, onColor],
            domain: [0, 1],
          },
        },
        domain: {
          type: "month",
          gutter: 4,
          label: { text: "MMMM", textAlign: "start", position: "top" },
        },
        subDomain: {
          type: "day",
          width: 24,
          height: 24,
          gutter: 4,
          radius: 4,
        },
      },
      [
        [
          Tooltip,
          {
            text: function (date, value, dayjsDate) {
              return `${value ? "Journaling" : "No journaling"} on ${dayjsDate.format(
                "dddd, MMMM D, YYYY",
              )}`;
            },
          },
        ],
        [
          CalendarLabel,
          {
            width: 30,
            textAlign: "end",
            text: () => ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            padding: [0, 25, 0, 25],
          },
        ],
      ],
    );

    // Store the instance in the ref
    calInstanceRef.current = cal;

    return () => {
      // Cleanup when the component unmounts
      if (calInstanceRef.current) {
        calInstanceRef.current.destroy();
        calInstanceRef.current = null;
      }
    };
  }, [resolvedTheme, offColor, onColor]);

  return (
    <div ref={calContainerRef} id="cal-heatmap" className={className}></div>
  );
}
