"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { route } from "@/config/site";
import LanguageMenuItems from "@/features/language/components/LanguageMenuItems";
import ClientThemeIcon from "@/features/theme/components/ClientThemeIcon";
import useThemeToggle from "@/features/theme/components/useThemeToggle";
import { Link } from "@/i18n/routing";
import { Globe, Settings } from "lucide-react";
import { signOut } from "next-auth/react";

interface Props {
  children?: React.ReactNode;
}

export default function SettingsDropdownMenu({ children }: Props) {
  const toggleTheme = useThemeToggle();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={route.settings} className="flex h-full w-full gap-4">
            <Settings className="size-4" /> Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleTheme()}>
          <ClientThemeIcon className="mr-2 size-4" />
          <span>Theme</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Globe className="mr-2 size-4" />
            <span>Language</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <LanguageMenuItems />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="text-destructive"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
