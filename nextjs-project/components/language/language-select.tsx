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
import { Button } from "../ui/button";
import LanguageMenuItems from "./language-menu-items";

export default function LanguageSelect() {
  const t = useTranslations("Components.language-select");

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LanguageMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
