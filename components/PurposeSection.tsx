"use client";

import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function PurposeSection() {
  const { t } = useAppTranslation();

  return (
    <section className="w-full bg-white px-20 py-20">
      <div className="mb-12 max-w-[956px]">
        <h1 className="text-[32px] font-medium text-[#1E3862] md:text-4xl font-helvetica">
          {t("purposeSection.title")}
        </h1>

        <p className="mt-4 text-[16px] font-medium leading-relaxed text-[#6B6F72] md:text-base font-inter">
          {t("purposeSection.description")}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-[#F4FFE9] p-6">
          <div className="mb-3 text-2xl text-green-600">
            <Image
              src="/images/sustainability.svg"
              alt="sustainability"
              width={60}
              height={60}
              priority
              className="rounded-lg"
            />
          </div>

          <h3 className="mb-1 text-[24px] font-semibold font-inter">
            {t("purposeSection.cards.sustainability.title")}
          </h3>
          <p className="mb-3 text-[14px] font-medium text-green-600 font-inter">
            {t("purposeSection.cards.sustainability.tag")}
          </p>

          <p className="text-[16px] leading-relaxed text-[#6B6F72] font-inter">
            {t("purposeSection.cards.sustainability.description")}
          </p>
        </div>

        <div className="rounded-xl bg-[#F2FAFF] p-6">
          <div className="mb-3 text-2xl text-blue-500">
            <Image
              src="/images/Accessibility.svg"
              alt="accessibility"
              width={60}
              height={60}
              priority
              className="rounded-lg"
            />
          </div>

          <h3 className="mb-1 text-[24px] font-semibold font-inter">
            {t("purposeSection.cards.accessibility.title")}
          </h3>
          <p className="mb-3 text-[14px] font-medium text-blue-500 font-inter">
            {t("purposeSection.cards.accessibility.tag")}
          </p>

          <p className="text-[16px] leading-relaxed text-[#6B6F72] font-inter">
            {t("purposeSection.cards.accessibility.description")}
          </p>
        </div>

        <div className="rounded-xl bg-[#F8F3FF] p-6 md:col-span-2">
          <div className="mb-3 text-2xl text-purple-600">
            <Image
              src="/images/Efficiency.svg"
              alt="efficiency"
              width={60}
              height={60}
              priority
              className="rounded-lg"
            />
          </div>

          <h3 className="mb-1 text-[24px] font-semibold font-inter">
            {t("purposeSection.cards.efficiency.title")}
          </h3>
          <p className="mb-3 text-[14px] font-medium text-purple-600 font-inter">
            {t("purposeSection.cards.efficiency.tag")}
          </p>

          <p className="text-[16px] leading-relaxed text-[#6B6F72] font-inter">
            {t("purposeSection.cards.efficiency.description")}
          </p>
        </div>
      </div>
    </section>
  );
}