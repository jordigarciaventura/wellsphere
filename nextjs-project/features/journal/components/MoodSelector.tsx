"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { saveMoodEntryUseCase } from "@/features/journal/actions/moods";
import { getMoodIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Mood } from "@/types/mood";

interface Props {
  date: Date;
  selectedMood: Mood | null;
}

export default function MoodSelector({ date, selectedMood }: Props) {
  const handleMoodSelect = async (mood: Mood) => {
    try {
      await saveMoodEntryUseCase(date, mood);
      console.log(`Mood updated to: ${mood}`);
    } catch (error) {
      console.error("Failed to update mood:", error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <Label>How are you feeling today?</Label>
      <div className="flex justify-around gap-1">
        {Object.values(Mood).map((mood) => {
          const isSelected = selectedMood === mood;
          return (
            <Button
              key={mood}
              size="icon"
              variant="outline"
              onClick={() => handleMoodSelect(mood)}
              className={cn(
                "flex flex-col items-center gap-2 transition-colors",
                isSelected &&
                  "bg-primary/10 focus:bg-primary/10 dark:bg-primary/50",
              )}
            >
              {getMoodIcon(mood)}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
