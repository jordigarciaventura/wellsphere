import { cn } from "@/lib/utils";
import { IconElement } from "@/types/icons";
import { useEffect, useState } from "react";

interface Props {
  steps: {
    label: string;
    value: string;
    icon: IconElement;
    color: string;
  }[];
  progress: number[];
  currentStep: number;
}

export default function Stepper({ steps, progress, currentStep }: Props) {
  return (
    <div className="flex max-w-screen-lg items-center px-4 sm:mb-8 sm:px-4">
      {steps.map((step, index) => {
        const isActive = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === steps.length - 1;

        const Icon = step.icon;

        return (
          <div
            key={step.value}
            className={cn("flex items-center", !isLast && "w-full")}
          >
            <div
              className="relative mx-[-1px] flex size-10 shrink-0 items-center justify-center rounded-full sm:size-14"
              style={{
                backgroundColor: isActive ? step.color : "transparent",
                color: step.color,
              }}
            >
              <RadialProgress percentage={progress[index] ?? 0}>
                <span className="text-sm font-bold text-white">
                  <Icon
                    className="size-6 sm:size-8"
                    style={{
                      color: isActive ? "white" : step.color,
                    }}
                  />
                </span>
              </RadialProgress>
              <span
                className={cn(
                  "absolute -bottom-1/2 left-1/2 -translate-x-1/2 text-sm font-bold",
                  isCurrent ? "block" : "hidden text-gray-400 sm:block",
                )}
                style={{
                  color: isCurrent ? step.color : "",
                }}
              >
                {step.label}
              </span>
            </div>
            {!isLast && (
              <div
                className="mx-1 h-[1px] w-full bg-foreground sm:mx-2 sm:h-[2px]"
                style={
                  isActive
                    ? {
                        backgroundColor: step.color,
                      }
                    : {}
                }
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const RadialProgress = ({
  percentage,
  children,
}: {
  percentage: number;
  children: React.ReactNode;
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(percentage);

  useEffect(() => {
    const animation = requestAnimationFrame(() =>
      setAnimatedPercentage(percentage),
    );
    return () => cancelAnimationFrame(animation);
  }, [percentage]);

  return (
    <div className="relative h-full w-full">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        {percentage < 1 && (
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200 dark:text-neutral-700"
            strokeWidth="2"
          ></circle>
        )}

        {/* Animated progress circle */}
        {percentage > 0 && (
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current transition-[stroke-dashoffset] duration-500 ease-in-out"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - 100 * animatedPercentage}
            strokeLinecap="round"
          ></circle>
        )}
      </svg>

      {/* Center content */}
      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {children}
      </div>
    </div>
  );
};
