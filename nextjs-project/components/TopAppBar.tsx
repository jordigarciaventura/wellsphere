import AccountDropdownMenu from "@/components/AccountDropdownMenu";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default async function TopAppBar() {
  return (
    <div className="static top-0 flex h-16 items-center px-4 md:h-16">
      <div className="mx-auto flex w-full max-w-4xl justify-between">
        <p className="text-2xl font-bold">WellSphere</p>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <div className="absolute right-0 top-0 mr-2 mt-2 flex size-2 items-center justify-center rounded-full bg-primary text-xs font-medium"></div>
            <Bell />
          </Button>
          <AccountDropdownMenu />
        </div>
      </div>
    </div>
  );
}
