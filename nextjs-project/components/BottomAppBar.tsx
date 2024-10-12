"use client";

import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { getNthRouteSegment } from "@/lib/url";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import CreateIcon from "@mui/icons-material/Create";
import HomeIcon from "@mui/icons-material/Home";
import InsightsIcon from "@mui/icons-material/Insights";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BottomAppBar() {
  const pathname = usePathname();
  const [value, setValue] = useState(
    () => getNthRouteSegment(pathname, 1) ?? "",
  );

  return (
    <BottomNavigation
      value={value}
      className="fixed bottom-0 left-0 right-0 mx-auto max-w-lg"
      onChange={(_, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        label="Chats"
        value="chats"
        icon={<ChatIcon />}
        component={Link}
        href={route.chats}
      />
      <BottomNavigationAction
        label="Tasks"
        value="tasks"
        icon={<CalendarMonthIcon />}
        component={Link}
        href={route.tasks}
      />
      <BottomNavigationAction
        label="Home"
        value=""
        icon={<HomeIcon />}
        component={Link}
        href={route.home}
      />
      <BottomNavigationAction
        label="Journal"
        value="journal"
        icon={<CreateIcon />}
        component={Link}
        href={route.journal}
      />
      <BottomNavigationAction
        label="Insights"
        value="insights"
        icon={<InsightsIcon />}
        component={Link}
        href={route.insights}
      />
    </BottomNavigation>
  );
}
