"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LocalizedCalendar from "@/features/language/components/LocalizedCalendar";
import { JournalingEntry } from "@/types/journal";
import { useState } from "react";

interface Props {
  data: JournalingEntry[];
}

export default function JournalHeatMapChart({ data }: Props) {
  const [month, setMonth] = useState<Date>(new Date());

  const journalingDates = data.map((entry) => new Date(entry.date));

  const handleMonthChange = (date: Date) => {
    setMonth(date);
    console.log(date);
  };

  const handleDayClick = (date: Date) => {
    console.log(date);
  };

  return (
    <Card className="relative w-full">
      <CardHeader>
        <div className="flex w-full items-center gap-4">
          <CardTitle>Journaling</CardTitle>
          <Button
            className="text-xs"
            size="sm"
            variant="outline"
            onClick={() => setMonth(new Date())}
            disabled={month.toDateString() === new Date().toDateString()}
          >
            Today
          </Button>
        </div>
      </CardHeader>
      <CardContent className="w-full">
        <LocalizedCalendar
          mode="default"
          month={month}
          modifiers={{
            journaling: journalingDates,
          }}
          modifiersClassNames={{
            journaling: "bg-primary",
          }}
          onDayClick={handleDayClick}
          onMonthChange={handleMonthChange}
          numberOfMonths={4}
          initialFocus
          today={new Date()}
          classNames={{
            day_today: "ring-2 ring-accent-foreground",
            day: "size-8 rounded-sm",
            months: "flex flex-wrap justify-center gap-8",
          }}
          disabled={(date) => date > new Date()}
        />
      </CardContent>
    </Card>
  );
}
