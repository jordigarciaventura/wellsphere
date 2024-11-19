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
import { Button } from "../../../components/ui/button";
import LanguageMenuItems from "./LanguageMenuItems";

export default function LanguageSelect() {
  const t = useTranslations("Components.language-select");

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="w-full">
        <Button variant="ghost" >
          <Globe className="h-5 w-5" /> Language Select
        </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LanguageMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
