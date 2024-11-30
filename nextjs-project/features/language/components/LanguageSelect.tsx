"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageMenuItems from "./LanguageMenuItems";

export default function LanguageSelect() {
  const t = useTranslations("Components.language-select");

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="flex w-full items-center gap-4 px-4 py-3 text-left hover:bg-gray-100 focus:outline-none">
          <Globe className="h-5 w-5 text-gray-600" />
          <span className="text-gray-800">{t("language")}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LanguageMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
