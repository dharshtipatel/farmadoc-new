"use client";

import { useAppTranslation } from "@/lib/useAppTranslation";

export default function Hero() {
  const { t } = useAppTranslation();

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-r from-blue-100 to-green-100 text-center">

      <h1 className="text-[48px] md:text-5xl font-medium text-[#1E3862] mb-6 font-helvetica">
        {t("hero.titleLine1")} <br />
        {t("hero.titleLine2")}
      </h1>

      <p className="max-w-[732px] mx-auto text-[#6B6F72] mb-8 font-inter font-medium text-[18px]">
        {t("hero.description")}
      </p>

      <div className="flex justify-center gap-4">

        <button className="bg-[#1192E8] text-[16px] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-inter font-medium">
          {t("hero.primaryCta")} →
        </button>

        <button className="bg-white border border-[#1192E8] text-[#1192E8] px-6 py-3 rounded-lg hover:bg-blue-50 transition text-[16px] font-inter font-medium">
          {t("hero.secondaryCta")}
        </button>

      </div>
    </section>
  );
}