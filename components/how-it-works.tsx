"use client";

import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function HowItWorks() {
  const { t } = useAppTranslation();

  const steps = [
    {
      icon: "/images/htw1.svg",
      step: t("howItWorks.steps.step1.label"),
      title: t("howItWorks.steps.step1.title"),
      desc: t("howItWorks.steps.step1.desc"),
      color: "bg-[#EEFFFD] text-[#1192E8]",
    },
    {
      icon: "/images/htw2.svg",
      step: t("howItWorks.steps.step2.label"),
      title: t("howItWorks.steps.step2.title"),
      desc: t("howItWorks.steps.step2.desc"),
      color: "bg-[#FFF9EA] text-[#1192E8]",
    },
    {
      icon: "/images/htw3.svg",
      step: t("howItWorks.steps.step3.label"),
      title: t("howItWorks.steps.step3.title"),
      desc: t("howItWorks.steps.step3.desc"),
      color: "bg-[#EBFFF3] text-[#1192E8]",
    },
    {
      icon: "/images/htw4.svg",
      step: t("howItWorks.steps.step4.label"),
      title: t("howItWorks.steps.step4.title"),
      desc: t("howItWorks.steps.step4.desc"),
      color: "bg-[#FAF6FF] text-[#1192E8]",
    },
    {
      icon: "/images/htw5.svg",
      step: t("howItWorks.steps.step5.label"),
      title: t("howItWorks.steps.step5.title"),
      desc: t("howItWorks.steps.step5.desc"),
      color: "bg-[#F8FAFF] text-[#1192E8]",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12 px-4 md:px-16">

      {/* Heading */}
      <div className="max-w-[755px] w-full mx-auto mt-4 text-center px-4">

        <h2 className="text-2xl sm:text-3xl md:text-[48px] font-medium font-helvetica text-[#1E3862]">
          {t("howItWorks.main.title")}
        </h2>

        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-[18px] font-medium font-inter">
          {t("howItWorks.main.description")}
        </p>

        <button className="mt-4 bg-[#1192E8] text-white px-5 py-2 rounded-md text-[16px] font-inter font-medium hover:opacity-90">
          {t("howItWorks.main.button")}
        </button>

      </div>

      {/* Steps */}
      <div className="relative mt-20 space-y-10 max-w-[1146px] mx-auto">

        <div className="hidden md:block absolute top-0 bottom-0 left-[20px] w-[1px] bg-gray-200" />

        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:gap-12 items-start relative"
          >

            <div className="relative z-10">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full px-2 py-2 ${item.color}`}
              >
                <Image src={item.icon} alt="icon" width={32} height={32} />
              </div>
            </div>

            <div className="w-full md:w-[319px] shrink-0">
              <p
                className={`inline-block px-4 py-2 rounded-md text-[14px] font-inter font-medium ${item.color}`}
              >
                {item.step}
              </p>

              <h4 className="text-[24px] font-semibold text-[#1E3862] font-inter mt-1">
                {item.title}
              </h4>
            </div>

            <p className="text-[16px] font-inter text-[#6B6F72] leading-relaxed flex-1">
              {item.desc}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}