import { Button } from "@/components/ui/button";
import { route } from "@/config/site";
import AccountSettings from "@/features/settings/components/AccountSettings";
import CustomizationSettings from "@/features/settings/components/CustomizationSettings";
import PremiumSettings from "@/features/settings/components/PremiumSettings";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { locale: string };
}

export default function SettingsPage({ params: { locale } }: Props) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <Link href={route.home}>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full bg-purple-100 p-2 hover:bg-purple-200"
          >
            <ArrowLeft className="text-purple-500" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      <div className="mt-6 space-y-8">
        <AccountSettings />
        <CustomizationSettings defaultLocale={locale} />
        <PremiumSettings />
      </div>
    </div>
  );
}
