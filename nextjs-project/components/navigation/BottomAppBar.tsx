"use client";

import ChatIcon from "@/components/navigation/ChatIcon";
import HomeIcon, { type IconProps } from "@/components/navigation/HomeIcon";
import InsightsIcon from "@/components/navigation/InsightsIcon";
import JournalIcon from "@/components/navigation/JournalIcon";
import TasksIcon from "@/components/navigation/TasksIcon";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { getNthRouteSegment } from "@/utils/url";
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const t = useTranslations('BottomAppBar');

  const navigationData = [    
    { href: route.chat, icon: ChatIcon, text: t("chat") },
    { href: route.tasks, icon: TasksIcon, text: t("tasks") },
    { href: route.home, icon: HomeIcon, text: t("home") },
    { href: route.journal, icon: JournalIcon, text: t("journal") },
    { href: route.insights, icon: InsightsIcon, text: t("insights") },
  ];

  const [selectedRoute, setSelectedRoute] = useState(
    () => `/${getNthRouteSegment(pathname, 1) ?? ""}`,
  );

  useEffect(() => {
    const currentSegment = getNthRouteSegment(pathname, 1) ?? "";
    setSelectedRoute(`/${currentSegment}`);
  }, [pathname]);

  return (
    <nav className="flex w-full items-center justify-around px-2 pb-1 pt-2">
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
