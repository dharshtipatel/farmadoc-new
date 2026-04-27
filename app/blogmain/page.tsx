"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FactoryCard from "@/components/FactoryCard";
import { useAppTranslation } from "@/lib/useAppTranslation";

type Tab = {
  id: string;
  label: string;
};

type BlogItem = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
};

export default function BlogMainPage() {
  const { t, get } = useAppTranslation();

  // ✅ Safe translation data
  const tabs: Tab[] = get<Tab[]>("blogPage.tabs", []);
  const blogData: Record<string, BlogItem[]> =
    get<Record<string, BlogItem[]>>("blogPage.blogData", {});

  const [activeTabId, setActiveTabId] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(8);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  // ✅ Set default tab safely
  useEffect(() => {
    if (tabs.length > 0 && !activeTabId) {
      setActiveTabId(tabs[0].id);
    }
  }, [tabs, activeTabId]);

  // reset visible items on tab change
  useEffect(() => {
    setVisibleCount(8);
  }, [activeTabId]);

  // active tab data
  const activeData = useMemo(() => {
    return blogData[activeTabId] || [];
  }, [activeTabId, blogData]);

  const visibleData = useMemo(() => {
    return activeData.slice(0, visibleCount);
  }, [activeData, visibleCount]);

  const activeTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTabId);
  }, [activeTabId, tabs]);

  // ✅ Infinite scroll (fixed & stable)
  useEffect(() => {
    const node = loaderRef.current;
    if (!node) return;

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
        threshold: 0.2,
        rootMargin: "100px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [activeData.length, activeTabId]);

  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px]" />

      <div className="bg-[#E5F6FF]">
        <div className="max-w-7xl py-4 px-6 mx-auto">

          {/* Heading */}
          <h1 className="text-[32px] font-medium text-[#1E3862] mt-20">
            {t("blogPage.heading")}
          </h1>

          <p className="text-[#6B6F72] mt-2 text-[18px] font-medium font-inter md:text-base">
            {t("blogPage.description")}
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

          {/* Active Tab Title */}
          <div className="mt-10">
            <h2 className="text-[24px] font-medium text-[#1E3862]">
              {activeTab?.label || ""}
            </h2>
          </div>

          {/* Blog Grid */}
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

          {/* Infinite Scroll Trigger */}
          <div ref={loaderRef} className="h-10" />

        </div>

        <Footer />
      </div>
    </div>
  );
}