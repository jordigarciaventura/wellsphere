import { Checkbox } from "@/components/ui/checkbox";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { getDimensionIcon } from "@/lib/icons";
import { Dimension } from "@/types/mood";

interface Props {
  id: number;
  title: string;
  subtitle: string;
  completed: boolean;
  dimensions: string[];
  toggleTaskDone?: () => void;
}

export default function TaskListItem({
  id,
  title,
  subtitle,
  completed,
  dimensions,
  toggleTaskDone,
}: Props) {
  function handleCheckboxChange(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    toggleTaskDone && toggleTaskDone();
  }

  return (
    <Link href={route.task(id.toString())} passHref>
      <div className="relative flex w-full items-center gap-2 rounded-md bg-card px-4 py-2 shadow-sm">
        <Checkbox
          className="size-8 rounded-sm"
          checked={completed}
          onClick={handleCheckboxChange}
        />
        <div className="flex flex-col p-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xs font-normal text-neutral-400">{subtitle}</p>
          <div className="absolute bottom-1 right-2 flex gap-1">
            {dimensions.map((dimension) => {
              const Icon = getDimensionIcon(dimension as Dimension);
              return (
                <div
                  className="flex items-center justify-center p-1"
                  key={dimension}
                  style={{
                    backgroundColor: `var(--color-${dimension.toLowerCase()})`,
                    borderRadius: "0.25rem",
                  }}
                >
                  <Icon
                    key={dimension}
                    className="size-4 font-bold text-white"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
