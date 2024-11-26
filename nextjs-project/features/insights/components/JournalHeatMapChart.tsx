import Cal from "@/features/insights/components/CalHeatmap";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function JournalHeatMapChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Journaling</CardTitle>
        <CardDescription>2020</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <ScrollArea className="w-full">
          <Cal className="mb-4 h-56 w-full" />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
