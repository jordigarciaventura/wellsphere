import ClientUserAvatar from "@/components/avatar/ClientSessionAvatar";
import { cn } from "@/lib/utils";

interface Props {
  content: string;
  className?: string;
}

export default function UserMessage({ content, className }: Props) {
  return (
    <div className={cn(className, "mr-auto flex gap-4")}>
      <ClientUserAvatar className="size-7" />
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
