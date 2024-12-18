"use client";

import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useTranslations } from 'next-intl';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function TaskOptions() {
  const t = useTranslations("TaskOptions");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Pencil />
          <span>{t("edit")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">
          <Trash2 />
          <span>{t("delete")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
