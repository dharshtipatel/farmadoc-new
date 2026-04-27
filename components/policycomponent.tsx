"use client";

import { useAppTranslation } from "@/lib/useAppTranslation";

type PolicyProps = {
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
};

export default function PolicyComponent({
  title,
  date,
  description,
  content,
}: PolicyProps) {
  const { t } = useAppTranslation();

  return (
    <>
      <div className="bg-[#E5F6FF]">
        <div className="max-w-7xl py-10 px-6 mx-auto">

          {/* Heading */}
          <h1 className="text-[32px] font-medium text-[#1E3862] mt-20">
            {title}
          </h1>

          <p className="text-[#6B6F72] mt-2 text-[18px] font-medium font-inter md:text-base">
            {t("policy.effectiveDate")}: {date}
          </p>

          <p className="text-[#6B6F72] mt-2 text-[18px] font-medium font-inter md:text-base mb-12">
            {description}
          </p>

        </div>
      </div>

      <div className="max-w-7xl py-4 px-6 mx-auto">
        {content}
      </div>
    </>
  );
}