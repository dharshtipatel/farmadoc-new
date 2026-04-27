"use client";

import Image from "next/image";
import Header from "../../components/Header";
import HowItWorksSection from "../../components/how-it-works";
import Footer from "@/components/Footer";
import BookableShowroom from "@/components/BookableShowroom";
import PromisesSection from "@/components/PromisesSection";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function HowItWorks() {
  const { t } = useAppTranslation();

  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px] mb-6" />

      <HowItWorksSection />

      {/* Image Section */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">

        <Image
          src="/images/htw-map-banner.svg"
          alt="map banner"
          fill
          priority
        />

        <div className="absolute inset-0" />

        <div className="absolute inset-0 flex">

          <div className="max-w-7xl mx-auto px-6 w-full flex">

            <div className="w-full lg:w-[630px] text-white mt-20">

              <div className="flex items-center gap-3 mb-3">
                <p className="text-[14px] font-inter font-medium tracking-widest uppercase opacity-80">
                  {t("howItWorks.journey.label")}
                </p>
                <span className="w-10 h-[2px] bg-white/60"></span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-medium font-helvetica mb-3">
                {t("howItWorks.journey.title")}
              </h1>

              <p className="text-[16px] font-inter font-medium opacity-90">
                {t("howItWorks.journey.description")}
              </p>

            </div>

          </div>

        </div>
      </div>

      <BookableShowroom />

      <PromisesSection
        imageSrc="/images/promises-htw.jpg"
        title={t("howItWorks.promises.title")}
        description={t("howItWorks.promises.description")}
        buttonText={t("howItWorks.promises.button")}
        onButtonClick={() => alert("Clicked")}
        items={[
          {
            icon: "/images/htw-i-1.svg",
            title: t("howItWorks.promises.items.noAccount.title"),
            description: t("howItWorks.promises.items.noAccount.description"),
          },
          {
            icon: "/images/htw-i-2.svg",
            title: t("howItWorks.promises.items.instant.title"),
            description: t("howItWorks.promises.items.instant.description"),
          },
          {
            icon: "/images/htw-i-3.svg",
            title: t("howItWorks.promises.items.inventory.title"),
            description: t("howItWorks.promises.items.inventory.description"),
          },
        ]}
      />

      <Footer />
    </div>
  );
}