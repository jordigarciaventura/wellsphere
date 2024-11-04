import { cn } from "@/utils/style";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./markdown.module.scss";

interface Props {
  children?: string;
  className?: string;
}

export default function Markdown({ children, className }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[]}
      className={cn(
        "prose dark:prose-invert w-full max-w-[calc(100%-3rem)]",
        styles.markdown,
        className,
      )}
    >
      {children}
    </ReactMarkdown>
  );
}
