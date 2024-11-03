import LanguageSelect from "@/components/language/language-select";
import ThemeToggleButton from "@/components/theme/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
interface Props {
  params: { locale: string };
}

export default async function Example({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Main");

  return (
    <div className="flex flex-col gap-4">
      <h1>{t("welcome")}</h1>
      <LanguageSelect />
      <ThemeToggleButton />
      <Button>Button</Button>
      <Input placeholder="Input" />
      <Link href={route.home}>Home</Link>
    </div>
  );
}
