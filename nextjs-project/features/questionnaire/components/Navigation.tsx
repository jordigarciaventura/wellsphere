import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  currentStep: number;
  doneSteps: number;
  totalSteps: number;
  canPrevious: boolean;
  canNext: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Navigation({
  currentStep,
  doneSteps,
  totalSteps,
  canPrevious,
  canNext,
  onNext,
  onPrevious,
}: Props) {
  return (
    <div className="flex w-full items-center gap-2 px-2">
      <Button variant="outline" onClick={onPrevious} disabled={!canPrevious}>
        <ArrowLeft className="size-6" />
        <p>Back</p>
      </Button>
      <div className="mx-auto flex justify-between gap-4">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={cn("size-3 rounded-full", {
              "bg-primary": index < doneSteps,
              "bg-gray-300": index >= doneSteps,
              "ring-2 ring-foreground ring-offset-1": index === currentStep,
            })}
          ></div>
        ))}
      </div>
      <Button variant="outline" onClick={onNext} disabled={!canNext}>
        <p>Next</p>
        <ArrowRight className="size-6" />
      </Button>
    </div>
  );
}
