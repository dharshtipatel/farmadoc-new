"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { HowItWorksCard } from "./HowItWorksCard";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function Banner() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useAppTranslation();

  const howItWorksData = [
    {
      id: 1,
      imageSrc: "/images/Frame.svg",
      altText: "location",
      title: t("banner.howItWorks.step1"),
    },
    {
      id: 2,
      imageSrc: "/images/medicine_icon.svg",
      altText: "deals",
      title: t("banner.howItWorks.step2"),
    },
    {
      id: 3,
      imageSrc: "/images/pick_up.svg",
      altText: "pickup",
      title: t("banner.howItWorks.step3"),
    },
  ];

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Banner Content */}
        <div className="mx-auto max-w-4xl text-center">
          
          <h1 className="font-bold text-[#1E3862] text-[32px]">
            {t("banner.title")}
          </h1>

          <p className="text-[#6B6F72] mt-2 text-[20px] font-inter">
            {t("banner.subtitle")}
          </p>

          {/* Search Bar */}
          <form className="flex mt-6">
            <div className="flex items-center bg-white border border-[#243b5e] rounded-xl px-4 py-4 w-full">
              
              <Search className="text-[#243b5e] mr-3" size={22} />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("banner.searchPlaceholder")}
                className="w-full outline-none text-gray-600 text-lg"
              />
            </div>
          </form>

        </div>

        {/* How It Works Section */}
        <div className="mt-2">
          <h3 className="text-gray-600 font-medium mb-5">
            {t("banner.howItWorks.title")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {howItWorksData.map((card) => (
              <HowItWorksCard
                key={card.id}
                imageSrc={card.imageSrc}
                altText={card.altText}
                title={card.title}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}