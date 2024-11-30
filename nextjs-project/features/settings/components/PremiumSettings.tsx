import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { CircleUserRound } from "lucide-react";

export default function PremiumSettings() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Premium</h2>
        <Link
          href={route.pricing}
          className="rounded-full bg-[#9C2CF3] px-4 py-2 font-semibold text-white shadow-md transition-all hover:bg-[#7a23c1]"
        >
          Subscribe
        </Link>
      </div>

      <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
        <CircleUserRound className="size-6" />
        <span>Current Plan: Premium</span>
      </div>
    </div>
  );
}
