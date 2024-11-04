"use client";

import { localeLabels } from "@/features/language/utils/i18n";
import { usePathname, useRouter } from "@/i18n/routing";
import { DropdownMenuItem } from "components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function LanguageMenuItems() {
  const locale = useLocale();
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

  return Object.entries(localeLabels).map(([key, label]) => (
    <DropdownMenuItem
      key={key}
      onSelect={() => handleChange(key)}
      disabled={key === locale}
    >
      {label}
    </DropdownMenuItem>
  ));
}
