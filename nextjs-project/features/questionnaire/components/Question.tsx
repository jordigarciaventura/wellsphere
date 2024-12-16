import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { OptionValue } from "@/features/questionnaire/types/answers";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  questionValue: string;
  options: { label: string; value: OptionValue }[];
  className?: string;
  selectedValue?: OptionValue;
  onValueChange: (questionValue: string, answerValue: OptionValue) => void;
}

export default function Question({
  label,
  questionValue,
  options,
  className,
  selectedValue,
  onValueChange,
}: Props) {
  return (
    <RadioGroup
      className={cn("mb-8 flex flex-col gap-8 px-2", className)}
      onValueChange={(value) =>
        onValueChange(questionValue, value as OptionValue)
      }
      value={selectedValue}
    >
      <Label className="h-12 text-balance text-lg">{label}</Label>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <Option
            key={option.value}
            label={option.label}
            value={option.value}
            questionValue={questionValue}
          />
        ))}
      </div>
    </RadioGroup>
  );
}

function Option({
  label,
  value,
  questionValue,
}: {
  label: string;
  value: string;
  questionValue: string;
}) {
  return (
    <div className="relative flex h-32 w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
      <RadioGroupItem
        value={value}
        id={`${questionValue}-${value}`}
        className="order-1 after:absolute after:inset-0"
      />
      <div className="w-full">
        <Label htmlFor={questionValue}>{label}</Label>
      </div>
    </div>
  );
}
