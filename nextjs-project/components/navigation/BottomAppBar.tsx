"use client";

import ChatIcon from "@/components/navigation/ChatIcon";
import HomeIcon, { type IconProps } from "@/components/navigation/HomeIcon";
import InsightsIcon from "@/components/navigation/InsightsIcon";
import JournalIcon from "@/components/navigation/JournalIcon";
import TasksIcon from "@/components/navigation/TasksIcon";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils/style";
import { getNthRouteSegment } from "@/utils/url";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationData = [
  { href: route.chats, icon: ChatIcon, text: "Chat" },
  { href: route.tasks, icon: TasksIcon, text: "Tasks" },
  { href: route.home, icon: HomeIcon, text: "Home" },
  { href: route.journal, icon: JournalIcon, text: "Journal" },
  { href: route.insights, icon: InsightsIcon, text: "Insights" },
];

interface NavigationButtonProps {
  href: string;
  icon: React.ComponentType<IconProps>;
  text: string;
  selected?: boolean;
}

const NavigationButton = ({
  href,
  icon: Icon,
  text,
  selected,
}: NavigationButtonProps) => {
  return (
    <Link
      href={href}
      prefetch
      className={cn(
        "group flex w-full flex-col items-center justify-center gap-1 text-sm font-medium text-muted-foreground focus:text-primary",
      )}
    >
      <Icon useSolidColor={!selected} solidColor="#D8DEF3" />
      {text}
    </Link>
  );
};

export default function BottomAppBar() {
  const pathname = usePathname();

  const [selectedRoute, setSelectedRoute] = useState(
    () => `/${getNthRouteSegment(pathname, 1) ?? ""}`,
  );

  useEffect(() => {
    const currentSegment = getNthRouteSegment(pathname, 1) ?? "";
    setSelectedRoute(`/${currentSegment}`);
  }, [pathname]);

  return (
    <nav className="flex h-14 w-full items-center justify-around md:h-16">
      <div className="mx-auto flex h-full w-full max-w-2xl items-center justify-between gap-4">
        {navigationData.map((nav) => (
          <NavigationButton
            key={nav.href}
            href={nav.href}
            icon={nav.icon}
            text={nav.text}
            selected={nav.href === selectedRoute}
          />
        ))}
      </div>
    </nav>
  );
}
