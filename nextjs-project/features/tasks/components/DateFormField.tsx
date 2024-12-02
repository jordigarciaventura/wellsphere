"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useTranslations } from 'next-intl';

interface Props {

  
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  startTime: string | undefined;
  setStartTime: (startTime: string) => void;
  endTime: string | undefined;
  setEndTime: (endTime: string) => void;
}

export default function DateFormField({
  date,
  setDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: Props) {
  const t = useTranslations("DateFormField");
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="endDate" className="text-muted">
          {t("date")}
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start rounded-none border-x-0 border-b border-t-0 !bg-transparent text-left font-normal !text-white focus:bg-transparent",
              )}
            >
              <CalendarIcon />
              {date ? formatDate(date, "PPP") : <span>{t("pickdate")}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="startTime" className="text-muted">
            {t("starttime")}
          </Label>
          <Input
            type="time"
            id="startTime"
            aria-label="Choose time"
            className="w-full rounded-none border-x-0 border-b border-t-0 bg-transparent placeholder:text-white focus-visible:ring-0"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="endTime" className="text-muted">
            {t("endtime")}
          </Label>
          <Input
            type="time"
            id="endTime"
            aria-label="Choose time"
            className="w-full rounded-none border-x-0 border-b border-t-0 bg-transparent placeholder:text-white focus-visible:ring-0"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
