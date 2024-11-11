"use client";

import Editor from "@/components/rich-text/editor";
import { useState } from "react";

export default function ClientJournalPage() {
  const [value, setValue] = useState("");

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
