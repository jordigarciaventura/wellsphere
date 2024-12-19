import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeeklyCarousel from "@/components/weekly-carousel/WeeklyCarousel";
import { taskCards } from "@/features/home/data/tasks";
import { getGradientClass } from "@/features/home/utils/colors";
import { getMoodIcon } from "@/lib/icons";
import { MoodEntry } from "@/types/mood";
import { CircleDashed } from "lucide-react";

interface HomeContentProps {
  moodEntries: MoodEntry[];
  date: Date;
}

export default function HomeContent({
  moodEntries,
  date,
}: Readonly<HomeContentProps>) {
  return (
    <div className="mx-auto max-w-4xl px-5 py-5 pb-10">
      <WeeklyCarousel
        readonly
        selectedDate={date}
        emptyElement={<CircleDashed />}
        items={moodEntries.map((moodEntry) => ({
          date: moodEntry.date,
          element: getMoodIcon(moodEntry.mood),
        }))}
      />

      <div className="mt-5 rounded-2xl bg-card p-5 shadow-md">
        <Tabs defaultValue="my-tasks">
          <TabsList className="flex w-full gap-2 rounded-xl bg-card p-2">
            <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>
          <TabsContent value="my-tasks">
            <ScrollArea className="-mb-2 w-full gap-4 py-2">
              <div className="flex gap-4">
                {taskCards["my-tasks"].map((card, index) => (
                  <div
                    key={card.title}
                    className={`relative h-36 w-48 flex-none transform cursor-pointer rounded-lg p-4 text-white transition-transform duration-300 hover:scale-105 ${getGradientClass(card.color)}`}
                  >
                    <div className="mb-2 text-2xl">{card.icon}</div>
                    {card.badge && (
                      <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {card.badge}
                      </div>
                    )}
                    <h3 className="text-lg">{card.title}</h3>
                    <p className="text-sm opacity-80">{card.date}</p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="suggested">
            <ScrollArea className="-mb-2 w-full gap-4 py-2">
              <div className="flex gap-4">
                {taskCards["suggested"].map((card, index) => (
                  <div
                    key={card.title}
                    className={`relative h-36 w-48 flex-none transform cursor-pointer rounded-lg p-4 text-white transition-transform duration-300 hover:scale-105 ${getGradientClass(card.color)}`}
                  >
                    <div className="mb-2 text-2xl">{card.icon}</div>
                    {card.badge && (
                      <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {card.badge}
                      </div>
                    )}
                    <h3 className="text-lg">{card.title}</h3>
                    <p className="text-sm opacity-80">{card.date}</p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="challenges">
            <ScrollArea className="-mb-2 w-full gap-4 py-2">
              <div className="flex gap-4">
                {taskCards["challenges"].map((card, index) => (
                  <div
                    key={card.title}
                    className={`relative h-36 w-48 flex-none transform cursor-pointer rounded-lg p-4 text-white transition-transform duration-300 hover:scale-105 ${getGradientClass(card.color)}`}
                  >
                    <div className="mb-2 text-2xl">{card.icon}</div>
                    {card.badge && (
                      <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {card.badge}
                      </div>
                    )}
                    <h3 className="text-lg">{card.title}</h3>
                    <p className="text-sm opacity-80">{card.date}</p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h2 className="mb-2 text-2xl">Keep Moving</h2>
          <p className="mb-2 text-sm text-gray-500">Today's mood</p>
          <p>
            Lorem ipsum dolor sit amet, er adipiscing elit, sed dianummy nibh
            euismod dolor sit amet, er adipiscing elit, sed dianummy nibh
            euismod.
          </p>
        </div>
      </div>
    </div>
  );
}
