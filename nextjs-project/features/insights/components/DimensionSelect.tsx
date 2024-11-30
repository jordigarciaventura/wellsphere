"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getDimensionIcon } from "@/lib/icons";
import { Dimension } from "@/types/mood";
import { getDimensionColor } from "@/utils/colors";
import { useState } from "react";

const items = [
  { id: "radio-physical", value: Dimension.Physical, label: "Physical" },
  { id: "radio-emotional", value: Dimension.Emotional, label: "Emotional" },
  { id: "radio-social", value: Dimension.Social, label: "Social" },
  {
    id: "radio-intellectual",
    value: Dimension.Intellectual,
    label: "Intellectual",
  },
  { id: "radio-spiritual", value: Dimension.Spiritual, label: "Spiritual" },
  {
    id: "radio-occupational",
    value: Dimension.Occupational,
    label: "Occupational",
  },
];

interface Props {
  onDimensionChange(dimension: Dimension): void;
}

export default function DimensionSelect({ onDimensionChange }: Props) {
  const [dimension, setDimension] = useState<Dimension>(Dimension.Physical);

  const handleDimensionChange = (value: string) => {
    setDimension(value as Dimension);
    onDimensionChange(value as Dimension);
  };

  return (
    <fieldset className="space-y-4">
      <RadioGroup
        className="grid grid-cols-2 gap-4 sm:grid-cols-3"
        defaultValue={dimension}
        onValueChange={handleDimensionChange}
      >
        {items.map((item) => {
          const DimensionIcon = getDimensionIcon(item.value as Dimension);
          const dimensionColor = getDimensionColor(item.value as Dimension);

          return (
            <label
              key={item.id}
              className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
              style={{
                borderColor: dimensionColor,
                backgroundColor: dimension === item.value ? dimensionColor : "",
              }}
            >
              <RadioGroupItem
                id={item.id}
                value={item.value}
                className="sr-only after:absolute after:inset-0"
              />
              <div className="flex items-center justify-center gap-2">
                {<DimensionIcon className="size-4" />}
                <p className="text-xs font-medium text-foreground">
                  {item.label}
                </p>
              </div>
            </label>
          );
        })}
      </RadioGroup>
    </fieldset>
  );
}
