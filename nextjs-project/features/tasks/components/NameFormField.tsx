"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from 'next-intl';

interface Props {
  name: string;
  setName: (name: string) => void;
}

export default function NameFormField({ name, setName }: Props) {
  const t = useTranslations("NameFormField");
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" className="text-muted">
        {t("name")}
      </Label>
      <Input
        id="name"
        placeholder="Name"
        className="rounded-none border-b border-l-0 border-r-0 border-t-0 bg-transparent placeholder:text-white focus-visible:ring-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
