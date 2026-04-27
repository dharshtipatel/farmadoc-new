"use client";

import { useEffect, useState } from "react";
import { useAppTranslation } from "@/lib/useAppTranslation";

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}

const defaultItems: FAQItem[] = [
  {
    questionKey: "faq.items.q1.question",
    answerKey: "faq.items.q1.answer",
  },
  {
    questionKey: "faq.items.q2.question",
    answerKey: "faq.items.q2.answer",
  },
];

export default function FAQAccordion({
  showHeader = true,
  items = defaultItems,
}: {
  showHeader?: boolean;
  items?: FAQItem[];
}) {
  const { t } = useAppTranslation();

  const [openIndex, setOpenIndex] = useState<number | null>(
    items.length > 0 ? 0 : null
  );

  useEffect(() => {
    setOpenIndex(items.length > 0 ? 0 : null);
  }, [items]);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-5 relative space-y-2">

      {showHeader && (
        <>
          <h2 className="text-2xl font-semibold mb-2">
            {t("faq.title")}
          </h2>

          <p className="text-[#6B6F72] text-sm mb-8">
            {t("faq.subtitle")}
          </p>
        </>
      )}

      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`bg-[#EDF2FB] rounded-lg px-6 py-4 cursor-pointer transition-all duration-300 ${
              isOpen ? "h-auto" : "h-[68px]"
            }`}
            onClick={() => toggleItem(index)}
          >
            <div className="flex justify-between items-center">

              <h3 className="text-[18px] font-semibold text-black font-helvetica">
                Q{index + 1}. {t(item.questionKey)}
              </h3>

              <span className="text-2xl font-bold">
                {isOpen ? "-" : "+"}
              </span>

            </div>

            {isOpen && (
              <p className="mt-2 text-[14px] text-[#6B6F72] font-inter">
                {t(item.answerKey)}
              </p>
            )}
          </div>
        );
      })}

      {items.length === 0 && (
        <p className="text-[14px] text-[#6B6F72] font-inter">
          {t("faq.empty")}
        </p>
      )}
    </div>
  );
}