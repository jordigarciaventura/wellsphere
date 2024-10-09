import LanguageSelect from "@/components/LanguageSelect";
import ToggleColorMode from "@/components/ToggleColorMode";
import { getTranslations } from "next-intl/server";

export default async function Example() {
  const t = await getTranslations("Main");

  return (
    <div>
      <LanguageSelect />
      <ToggleColorMode />
      <h1>{t("welcome")}</h1>;
    </div>
  );
}
