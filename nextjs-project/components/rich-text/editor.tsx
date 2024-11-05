import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { cn } from "@/lib/utils";
import EditorToolbar from "./toolbar/editor-toolbar";

interface EditorProps {
  content: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

const Editor = ({ content, placeholder, className, onChange }: EditorProps) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return <></>;

  return (
    <div
      className={cn(
        "prose w-full border-b-8 bg-background px-2 dark:prose-invert",
        className,
      )}
    >
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} className="px-4 pt-4" />
    </div>
  );
};

export default Editor;
