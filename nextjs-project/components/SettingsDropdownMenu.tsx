"use client";

import LanguageMenuItems from "@/components/language/language-menu-items";
import ClientThemeIcon from "@/components/theme/ClientThemeIcon";
import useThemeToggle from "@/components/theme/useThemeToggle";
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
          <Settings className="mr-2 size-4" />
          <span>Settings</span>
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
