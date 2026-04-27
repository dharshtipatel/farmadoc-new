"use client";

import { useMemo, useState } from "react";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import Header from "../../components/Header";
import Footer from "@/components/Footer";

interface FAQTab {
  id: string;
  label: string;
  faqs: FAQItem[];
}

const tabs: FAQTab[] = [
  {
    id: "book-medicine",
    label: "How to book Medicine",
    faqs: [
      {
        questionKey: "How do I search for a medicine on FarmaDoc?",
        answerKey:
          "Use the search bar to find your medicine, open the product page, and review price, expiry, and pharmacy details before adding it to your cart.",
      },
      {
        questionKey: "Do I need a prescription before placing the order?",
        answerKey:
          "Prescription medicines require a valid prescription during checkout, while OTC medicines can be ordered directly.",
      },
    ],
  },
  {
    id: "order-pickup",
    label: "Order Pick up",
    faqs: [
      {
        questionKey: "How will I know when my order is ready for pickup?",
        answerKey:
          "You will receive a confirmation once the pharmacy accepts the order and another update when it is ready for collection.",
      },
      {
        questionKey: "What should I carry for pickup?",
        answerKey:
          "Bring your order confirmation and any required prescription so the pharmacy can verify the order quickly.",
      },
    ],
  },
  {
    id: "cart-checkout",
    label: "Cart Check Out",
    faqs: [
      {
        questionKey: "Can I review my medicines before payment?",
        answerKey:
          "Yes, your cart shows the selected medicines, quantity, pricing, and pickup details before you complete checkout.",
      },
      {
        questionKey: "What payment options are available at checkout?",
        answerKey:
          "Available payment methods depend on the pharmacy setup and may include online payment or pay-at-pickup options.",
      },
    ],
  },
  {
    id: "become-partner",
    label: "Become a Partner",
    faqs: [
      {
        questionKey: "How can a pharmacy join FarmaDoc as a partner?",
        answerKey:
          "A pharmacy can apply through the partner onboarding flow and submit the required business and license details for verification.",
      },
      {
        questionKey: "What are the benefits of becoming a FarmaDoc partner?",
        answerKey:
          "Partners can list inventory, reduce medicine waste, reach more customers, and manage near-expiry stock more efficiently.",
      },
    ],
  },
  {
    id: "how-it-works",
    label: "How it works",
    faqs: [
      {
        questionKey: "What is the FarmaDoc process from order to pickup?",
        answerKey:
          "Customers browse discounted medicines, place an order, receive confirmation from the pharmacy, and collect the order from the selected pickup location.",
      },
      {
        questionKey: "Why are medicines listed at discounted prices?",
        answerKey:
          "FarmaDoc helps pharmacies sell surplus or near-expiry inventory responsibly, which lets customers access lower prices.",
      },
    ],
  },
];

export default function Faqs() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    [activeTabId]
  );

  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px]" />
      <div className="bg-gradient-to-r from-[#e9eff7] to-[#dbead7]">
        <div className="max-w-7xl py-4 px-6 mx-auto">
          <h1 className="text-[32px] font-helvetica md:text-3xl font-medium text-[#1E3862] mt-20">
            Frequently Asked Questions
          </h1>

          <p className="text-[#6B6F72] mt-2 text-[18px] font-medium font-inter md:text-base">
            Everything you need to know about FarmaDoc. Can&apos;t find your
            answer? Reach us directly.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2 text-[14px] font-medium font-inter rounded-md border transition ${
                  activeTabId === tab.id
                    ? "bg-[#1E3862] text-white"
                    : "bg-white text-[#1E3862] border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <div>
              <h2 className="text-[24px] font-bold text-black">
                {activeTab.label}
              </h2>
            </div>
          </div>
        </div>
        <FAQAccordion showHeader={false} items={activeTab.faqs} />
        <Footer />
      </div>
    </div>
  );
}
