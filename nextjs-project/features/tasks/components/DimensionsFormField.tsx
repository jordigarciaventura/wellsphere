"use client";

import { Button } from "@/components/ui/button";
import EmotionalIcon from "@/lib/icons/EmotionalIcon";
import IntellectualIcon from "@/lib/icons/IntellectualIcon";
import OccupationalIcon from "@/lib/icons/OccupationaIcon";
import PhysicalIcon from "@/lib/icons/PhysicalIcon";
import SocialIcon from "@/lib/icons/SocialIcon";
import SpiritualIcon from "@/lib/icons/SpiritualIcon";
import { cn } from "@/lib/utils";
import { Dimension } from "@/types/mood";

const dimensionsConfig: Record<
  Dimension,
  { label: string; icon: JSX.Element; color: string }
> = {
  emotional: {
    label: "Emotional",
    icon: <EmotionalIcon />,
    color: "bg-emotional",
  },
  spiritual: {
    label: "Spiritual",
    icon: <SpiritualIcon />,
    color: "bg-spiritual",
  },
  physical: {
    label: "Physical",
    icon: <PhysicalIcon />,
    color: "bg-physical",
  },
  occupational: {
    label: "Occupational",
    icon: <OccupationalIcon />,
    color: "bg-occupational",
  },
  intellectual: {
    label: "Intellectual",
    icon: <IntellectualIcon />,
    color: "bg-intellectual",
  },
  social: {
    label: "Social",
    icon: <SocialIcon />,
    color: "bg-social",
  },
};

interface Props {
  selectedDimensions: Dimension[];
  setSelectedDimensions: (dimensions: Dimension[]) => void;
}

export default function DimensionsFormField({
  selectedDimensions,
  setSelectedDimensions,
}: Props) {
  const toggleDimension = (dimension: Dimension) => {
    setSelectedDimensions(
      selectedDimensions.includes(dimension)
        ? selectedDimensions.filter((d: Dimension) => d !== dimension)
        : [...selectedDimensions, dimension],
    );
  };

  return (
    <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3">
      {Object.entries(dimensionsConfig).map(
        ([dimension, { label, icon, color }]) => {
          const isSelected = selectedDimensions.includes(
            dimension as Dimension,
          );
          return (
            <Button
              key={dimension}
              aria-label={`Toggle ${dimension}`}
              className={cn(
                `flex items-center justify-start ${color} gap-2 text-white hover:${color} rounded-sm`,
                isSelected
                  ? "ring-2 ring-primary"
                  : "opacity-70 hover:opacity-100",
              )}
              onClick={() => toggleDimension(dimension as Dimension)}
            >
              {icon} {label}
            </Button>
          );
        },
      )}
    </div>
  );
}
