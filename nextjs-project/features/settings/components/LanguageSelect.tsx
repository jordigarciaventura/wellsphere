"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { localeLabels } from "@/features/language/utils/i18n";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useParams } from "next/navigation";
import { useTransition } from "react";

interface Props {
  defaultLocale: string;
  className?: string;
}

export function LanguageSelect({ defaultLocale, className }: Props) {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const handleChange = (value: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      );
    });
  };

  return (
    <Select defaultValue={defaultLocale} onValueChange={handleChange}>
      <SelectTrigger className={className}>
        <div className="flex w-full justify-start gap-4 text-[1rem]">
          <Globe className="size-5" />
          <SelectValue placeholder="Language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {Object.entries(localeLabels).map(([key, label]) => (
            <SelectItem key={key} value={key}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
