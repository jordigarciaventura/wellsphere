import LanguageSelect from "@/components/LanguageSelect";
import ToggleColorMode from "@/components/ToggleColorMode";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default async function Example({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Main");

  return (
    <div>
      <LanguageSelect />
      <ToggleColorMode />
      <h1>{t("welcome")}</h1>;
    </div>
  );
}
