"use client";

import { Button } from "@/components/ui/button";

import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { createTaskUseCase } from "@/features/tasks/actions/tasks";
import DateFormField from "@/features/tasks/components/DateFormField";
import DimensionsFormField from "@/features/tasks/components/DimensionsFormField";
import NameFormField from "@/features/tasks/components/NameFormField";
import RecurrencyFormField from "@/features/tasks/components/RecurrencyFormField";
import TaskOptions from "@/features/tasks/components/TaskOptions";
import { Weekday } from "@/features/tasks/types/date";
import { Dimension } from "@/types/mood";
import { useTranslations } from 'next-intl';
import { useState } from "react";

export default function TaskForm() {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState<string | undefined>(undefined);
  const [endTime, setEndTime] = useState<string | undefined>(undefined);
  const [weekdays, setWeekdays] = useState<Weekday[]>([]);
  const [description, setDescription] = useState<string>("");
  const [dimensions, setDimensions] = useState<Dimension[]>([]);
  const t = useTranslations("TaskForm");

  const handleCreateTask = async () => {
    await createTaskUseCase({
      title: name,
      description,
      completed: false,
      dimensions,
      date: date as Date,
      startTime: startTime as string,
      endTime: endTime as string,
      weekdays: weekdays,
    });
  };

  return (
    <div>
      <div className="bg-gradient-linear pb-8 pt-4 text-white">
        <div className="mb-4 flex items-center justify-between px-6">
          <Link href={route.tasks} className="flex items-center gap-2">
            <ArrowLeft />
          </Link>
          <h2>{t("create")}</h2>
          <TaskOptions />
        </div>
        <div className="flex flex-col gap-4 px-6">
          <NameFormField name={name} setName={setName} />
          <DateFormField
            date={date}
            setDate={setDate}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
        </div>
      </div>
      <div className="-mt-4 flex flex-col gap-4 rounded-t-lg bg-background px-6 py-4">
        <div className="grid w-full gap-4">
          <Label htmlFor="recurrency">{t("recurrency")}</Label>
          <RecurrencyFormField
            selectedDays={weekdays}
            setSelectedDays={setWeekdays}
          />
        </div>
        <Separator />
        <div className="grid w-full gap-4">
          <Label htmlFor="description">{t("desc")}</Label>
          <Textarea
            placeholder="Type the task description here"
            id="description"
            className="rounded-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Separator />
        <div className="grid w-full gap-4">
          <Label htmlFor="category">{t("dimensions")}</Label>
          <DimensionsFormField
            selectedDimensions={dimensions}
            setSelectedDimensions={setDimensions}
          />
        </div>
        <div className="mt-7 flex w-full max-w-md justify-center">
          <Button
            className="mx-4 h-14 w-full rounded-full bg-gradient-linear"
            onClick={handleCreateTask}
          >
            {t("createtask")}
          </Button>
        </div>
      </div>
    </div>
  );
}
