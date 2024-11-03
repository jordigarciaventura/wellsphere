import SessionAvatar from "@/components/avatar/SessionAvatar";
import SettingsDropdownMenu from "@/components/SettingsDropdownMenu";
import { Button } from "@/components/ui/button";

export default function AccountDropdownMenu() {
  return (
    <SettingsDropdownMenu>
      <Button className="rounded-full" size="icon" variant="ghost">
        <SessionAvatar />
      </Button>
    </SettingsDropdownMenu>
  );
}
