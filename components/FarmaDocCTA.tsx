"use client";

import { useAppTranslation } from "@/lib/useAppTranslation";

type Props = {
  title: string;
  description: string;
};

export default function FarmaDocCTA({ title, description }: Props) {
  const { t } = useAppTranslation();

  return (
    <section className="bg-[#EEFFFD] py-16 px-6 text-center mt-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-[48px] font-medium font-helvetica sm:text-3xl md:text-4xl font-semibold text-[#1E3862] mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[20px] sm:text-base text-[#6B6F72] mb-8 leading-relaxed font-inter font-medium">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <button className="bg-[#1192E8] hover:bg-[#1f6fd1] text-white text-[16px] font-medium px-6 py-3 rounded-md transition flex items-center gap-2">
            {t("cta.find")}
            <span>→</span>
          </button>

          <button className="border border-[#1192E8] bg-white text-[#1192E8] hover:bg-[#2C7BE5]/10 text-[16px] font-medium px-6 py-3 rounded-md transition">
            {t("cta.partner")}
          </button>

        </div>
      </div>
    </section>
  );
}