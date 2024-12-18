"use client";

import { Button } from "@/components/ui/button";
import { route } from "@/config/site";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import "./style.css";

export default async function WelcomePage() {
  const t = await getTranslations("WelcomePage");
  return (
    <section className="welcome-page">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-wrapper">
            <Image
              src="/assets/welcome.svg"
              alt="Welcome illustration"
              width={450}
              height={450}
              className="image"
              priority
            />
          </div>
          <div className="text-button-wrapper">
            <div className="text-content">
              <h1 className="heading">[{t("welcome")}]</h1>
              <p className="paragraph">{t("paragraph")}</p>
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
  );
}
