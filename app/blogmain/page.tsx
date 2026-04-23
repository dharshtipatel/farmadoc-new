"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FactoryCard from "@/components/FactoryCard";

const tabs = [
  { id: "health-tips", label: "Health Tips" },
  { id: "medicines-guide", label: "Medicines Guide" },
  { id: "wellness", label: "Wellness" },
  { id: "pharmacy-insights", label: "Pharmacy Insights" },
  { id: "nutrition", label: "Nutrition" },
  { id: "fitness", label: "Fitness" },
  { id: "skincare", label: "Skincare" },
  { id: "mentalhealth", label: "Mental Health" },
  { id: "preventivecare", label: "Preventive Care" },
  { id: "commonillness", label: "Common Illness" },
  { id: "supplements", label: "Supplements" },
];

const blogData: Record<string, any[]> = {
  "health-tips": Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Health Tips Article ${i + 1}`,
    date: "12 Aug, 2025",
    category: "Health",
    image: "/images/blogimage.svg",
  })),
  "medicines-guide": Array.from({ length: 15 }, (_, i) => ({
    id: i,
    title: `Medicines Guide ${i + 1}`,
    date: "10 Aug, 2025",
    category: "Medicine",
    image: "/images/blogimage.svg",
  })),
};

export default function BlogMainPage() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const [visibleCount, setVisibleCount] = useState(8);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const activeData = useMemo(() => {
    return blogData[activeTabId] || [];
  }, [activeTabId]);

  const visibleData = activeData.slice(0, visibleCount);
  const activeTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTabId);
  }, [activeTabId]);

  // reset when tab changes
  useEffect(() => {
    setVisibleCount(8);
  }, [activeTabId]);

  // infinite scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setVisibleCount((prev) => {
            if (prev >= activeData.length) return prev;
            return prev + 4;
          });
        }
      },
      {
        threshold: 1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [activeData.length]);

  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px]" />

      <div className="bg-[#E5F6FF]">
        <div className="max-w-7xl py-4 px-6 mx-auto">

          {/* Heading */}
          <h1 className="text-[32px] font-medium text-[#1E3862] mt-20">
            Stay Informed with Updates
          </h1>

          <p className="text-[#6B6F72] mt-2 text-[18px] font-medium font-inter md:text-base">
            Explore the latest articles and resources to stay ahead in the world of factory automation and engineering solutions.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2 text-[14px] font-medium rounded-md border transition ${
                  activeTabId === tab.id
                    ? "bg-[#1E3862] text-white"
                    : "bg-white text-[#1E3862] border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          

          <div className="mt-10">
            <div>
              <h2 className="text-[24px] font-medium text-[#1E3862]">
                {activeTab?.label}
              </h2>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {visibleData.map((item) => (
              <FactoryCard
                key={item.id}
                title={item.title}
                date={item.date}
                category={item.category}
                image={item.image}
                href={`/blogDetails?label=${encodeURIComponent(
                  activeTab?.label ?? ""
                )}&date=${encodeURIComponent(
                  item.date
                )}&category=${encodeURIComponent(item.category)}`}
              />
            ))}
          </div>

          <div ref={loaderRef} className="h-10" />

        </div>

        <Footer />
      </div>
    </div>
  );
}
