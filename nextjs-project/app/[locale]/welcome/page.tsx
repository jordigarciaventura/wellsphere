import { Button } from "@/components/ui/button";
import { route } from "@/config/site";
import LanguageSelect from "@/features/language/components/LanguageSelect";
import ThemeToggleButton from "@/features/theme/components/ThemeToggleButton";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import "./style.css";

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
      <section className="items-center justify-center">
        <div className="container lg:mb-24">
          <div className="content-wrapper">
            <div className="image-wrapper">
              <Image
                src="/assets/welcome.svg"
                alt="Welcome illustration"
                width={490.69}
                height={560.45}
                className="image"
                priority
              />
            </div>
            <div className="text-button-wrapper">
              <div className="text-content">
                <h1 className="heading">{t("welcome")}</h1>
                <p className="paragraph min-h-20">{t("paragraph")}</p>
              </div>
              <div className="button-wrapper">
                <Link href={route.tutorial}>
                  <Button
                    className="get-started-button"
                    aria-label="Get Started with WellSphere"
                  >
                    {t("getstarted")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
