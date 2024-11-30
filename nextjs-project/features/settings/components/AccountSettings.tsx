import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { Bell, Edit, ShieldCheck } from "lucide-react";

export default function AccountSettings() {
  return (
    <div className="space-y-4">
      <h2 className="mb-0 text-lg font-medium">Account</h2>

      <div className="flex flex-col gap-2 rounded-lg border bg-card p-4 shadow-sm">
        <Link href={route.profile}>
          <button className="flex w-full items-center gap-4 px-4 py-3 text-left focus:outline-none">
            <Edit className="h-5 w-5" />
            <span>Edit Profile</span>
          </button>
        </Link>
        <button className="flex w-full items-center gap-4 px-4 py-3 text-left focus:outline-none">
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </button>
        <button className="flex w-full items-center gap-4 px-4 py-3 text-left focus:outline-none">
          <ShieldCheck className="h-5 w-5" />
          <span>Privacy Policy</span>
        </button>
      </div>
    </div>
  );
}
