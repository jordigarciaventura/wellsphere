import { cn } from "@/lib/utils";

interface Props {
  content: string;
  className?: string;
}

export default function UserMessage({ content, className }: Props) {
  return (
    <div className={cn(className, "mr-auto flex gap-4")}>
      <img src="/assets/User_Img.svg" alt="User Icon" className="size-7" />
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
