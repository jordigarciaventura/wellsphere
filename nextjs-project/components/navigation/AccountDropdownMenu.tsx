import SessionAvatar from "@/components/avatar/SessionAvatar";
import { Button } from "@/components/ui/button";
import SettingsDropdownMenu from "@/features/settings/components/SettingsDropdownMenu";

export default function AccountDropdownMenu() {
  return (
    <SettingsDropdownMenu>
      <Button className="rounded-full" size="icon" variant="ghost">
        <SessionAvatar />
      </Button>
    </SettingsDropdownMenu>
  );
}
