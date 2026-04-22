"use client";

import { useEffect, useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultItems: FAQItem[] = [
  {
    question: "Are near-expiry medicines safe to use?",
    answer:
      "Yes. All medicines listed on FarmaDoc are approved, sealed, and sourced directly from licensed pharmacies.",
  },
  {
    question: "Why are these medicines available at lower prices?",
    answer:
      "Pharmacies sell surplus or near-expiry inventory at discounted prices.",
  },
];

export default function FAQAccordion({
  showHeader = true,
  items = defaultItems,
}: {
  showHeader?: boolean;
  items?: FAQItem[];
}) {
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
            Frequently Asked Questions
          </h2>

          <p className="text-[#6B6F72] text-sm mb-8">
            Everything you need to know, from reservations to pickups, all in
            one place.
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
                Q{index + 1}. {item.question}
              </h3>

              <span className="text-2xl font-bold">{isOpen ? "-" : "+"}</span>
            </div>

            {isOpen && (
              <p className="mt-2 text-[14px] text-[#6B6F72] font-inter">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}

      {items.length === 0 && (
        <p className="text-[14px] text-[#6B6F72] font-inter">
          No FAQs available for this section right now.
        </p>
      )}
    </div>
  );
}