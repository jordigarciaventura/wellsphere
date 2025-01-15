import { UserIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface Props {
  content: string;
  className?: string;
}

export default function UserMessage({ content, className }: Props) {
  return (
    <div className={cn(className, "mr-auto flex items-start gap-4")}>
      <div className="flex size-10 items-center justify-center">
        <UserIcon />
      </div>
      <div
        className="prose dark:prose-invert"
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {content}
      </div>
    </div>
  );
}
