"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DimensionRadialChart } from "@/features/insights/components/DimensionRadialChart";
import { getDimensionIcon } from "@/lib/icons";
import { Dimension } from "@/types/mood";

export default function DimensionsRadialChart() {
  const PhysicalIcon = getDimensionIcon(Dimension.Physical);
  const EmotionalIcon = getDimensionIcon(Dimension.Emotional);
  const IntellectualIcon = getDimensionIcon(Dimension.Intellectual);
  const SocialIcon = getDimensionIcon(Dimension.Social);
  const SpiritualIcon = getDimensionIcon(Dimension.Spiritual);
  const OccupationalIcon = getDimensionIcon(Dimension.Occupational);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dimensions of Wellness</CardTitle>
        <CardDescription>Current stats</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="justify-items mx-auto grid w-full max-w-2xl grid-cols-2 justify-items-center gap-2 px-2 xs:grid-cols-3">
          <DimensionRadialChart
            icon={<PhysicalIcon className="size-5" />}
            title="Physical"
            value={0.75}
            color="--physical"
          />
          <DimensionRadialChart
            icon={<EmotionalIcon className="size-5" />}
            title="Emotional"
            value={0.5}
            color="--emotional"
          />
          <DimensionRadialChart
            icon={<IntellectualIcon className="size-5" />}
            title="Intellectual"
            value={0.25}
            color="--intellectual"
          />
          <DimensionRadialChart
            icon={<SocialIcon className="size-5" />}
            title="Social"
            value={0.1}
            color="--social"
          />
          <DimensionRadialChart
            icon={<SpiritualIcon className="size-5" />}
            title="Spiritual"
            value={0.9}
            color="--spiritual"
          />
          <DimensionRadialChart
            icon={<OccupationalIcon className="size-5" />}
            title="Occupational"
            value={1}
            color="--occupational"
          />
        </div>
      </CardContent>
    </Card>
  );
}
