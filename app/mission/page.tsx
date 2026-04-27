"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import FarmaDocCTA from "@/components/FarmaDocCTA";
import PromisesSection from "@/components/PromisesSection";
import PurposeSection from "@/components/PurposeSection";
import StatsSection from "@/components/StatsSection";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { useAppTranslation } from "@/lib/useAppTranslation";

type PromiseItem = {
  icon: string;
  title: string;
  description: string;
};

export default function Mission() {
  const { t, get } = useAppTranslation();
  const promiseItems = get("missionPage.promisesItems", [] as PromiseItem[]);

  return (
    <div>
      <Header showSearch={false} />
      <div className="pt-[80px]" />
      <Hero />

      <div className="mb-4 px-20">
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/mission-banner.jpg"
            alt="Banner"
            width={1280}
            height={540}
            priority
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="w-full max-w-[680px] break-words text-[40px] italic leading-[1.1] text-white [font-family:var(--font-times)]">
              {t("missionPage.quote")}
            </p>

            <div className="mt-6 text-white">
              <p className="font-inter text-[20px] font-medium">
                {t("missionPage.founderName")}
              </p>
              <p className="font-inter text-[14px]">
                {t("missionPage.founderRole")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <PurposeSection />

      <div className="px-20">
        <StatsSection />
      </div>

      <PromisesSection
        imageSrc="/images/promises.jpg"
        title={t("missionPage.promisesTitle")}
        description={t("missionPage.promisesDescription")}
        buttonText={t("missionPage.promisesButton")}
        onButtonClick={() => alert("Clicked")}
        items={promiseItems}
      />

      <FarmaDocCTA
        title={t("missionPage.ctaTitle")}
        description={t("missionPage.ctaDescription")}
      />

      <Footer />
    </div>
  );
}
