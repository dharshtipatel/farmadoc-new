"use client";

import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function PharmaMovement() {
  const { t } = useAppTranslation();

  const benefits = [
    {
      icon: "/images/drug.svg",
      titleKey: "pharmaMovement.benefits.stock"
    },
    {
      icon: "/images/drug_1.svg",
      titleKey: "pharmaMovement.benefits.losses"
    },
    {
      icon: "/images/drug_2.svg",
      titleKey: "pharmaMovement.benefits.customers"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
      <div className="flex flex-col lg:flex-row w-full gap-5 border border-gray-200 rounded-md overflow-hidden pt-10 pr-4 lg:pr-10 bg-[#EDF2FB]">

        {/* Left side */}
        <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[380px]">
          <Image
            src="/images/pharmaMovement.png"
            alt="Pharmacy Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-6 pb-6 lg:pb-0">

          <p className="text-sm text-[#1192E8]">
            {t("pharmaMovement.badge")}
          </p>

          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#1E3862] pt-2">
            {t("pharmaMovement.title")}
          </h2>

          <p className="text-[13px] sm:text-[14px] text-[#6B6F72] pt-2 leading-relaxed">
            {t("pharmaMovement.description")}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-4">
            {benefits.map((item, index) => (
              <BenefitItem
                key={index}
                icon={item.icon}
                title={t(item.titleKey)}
              />
            ))}
          </div>

          <button className="mt-4 bg-[#1E3862] text-white px-6 py-3 rounded-md font-inter w-fit">
            {t("pharmaMovement.button")}
          </button>

        </div>
      </div>
    </section>
  );
}

function BenefitItem({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col w-full sm:w-[186px] lg:w-[calc((100%/3)-12px)] h-auto sm:h-[106px] items-start">
      <Image src={icon} alt={title} width={40} height={40} />
      <p className="text-sm font-semibold text-[#1E3862] mt-4">
        {title}
      </p>
    </div>
  );
}