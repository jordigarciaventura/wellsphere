import { Button } from "@/components/ui/button";
import { route } from "@/config/site";
import LanguageSelect from "@/features/language/components/LanguageSelect";
import ThemeToggleButton from "@/features/theme/components/ThemeToggleButton";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

interface Props {
  params: { locale: string };
}

export default async function WelcomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const t = await getTranslations("WelcomePage");

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-end gap-2 p-4">
        <div className="w-fit-content flex">
          <ThemeToggleButton />
          <LanguageSelect />
        </div>
      </div>
      <section className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:gap-20">
          <Image
            src="/assets/daisy.svg"
            alt="Welcome illustration"
            width={244}
            height={319}
            className="w-full max-w-52 md:max-w-64"
            priority
          />
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <h1 className="mb-2 text-2xl">{t("welcome")}</h1>
              <p className="mx-auto mb-6 max-w-xs text-lg text-gray-500">
                {t("paragraph")}
              </p>
            </div>
            <div className="flex w-full justify-center">
              <Link href={route.home}>
                <Button
                  className="px-6 py-3 text-base"
                  aria-label="Get Started with Daisy"
                >
                  {t("getstarted")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
