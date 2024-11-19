"use client";

import Editor from "@/components/rich-text/editor";
import { saveJournalEntryUseCase } from "@/features/journal/actions/journal";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

interface Props {
  date: Date;
  initialContent?: string | null;
}

export default function ClientJournalPage({ date, initialContent }: Props) {
  const [value, setValue] = useState<string>(initialContent ?? "");

  const debouncedSave = debounce(async (content: string) => {
    await saveJournalEntryUseCase(date, content);
  }, 500);

  useEffect(() => {
    debouncedSave(value);
    return () => {
      debouncedSave.cancel();
    };
  }, [value, debouncedSave]);

  return (
    <div className="flex flex-col items-center">
      <Editor
        content={value}
        onChange={setValue}
        placeholder="Write something..."
        className="w-full max-w-xl"
      />
    </div>
  );
}
