"use client";

import Header from "../../components/Header";
import PharmaMovement from "@/components/PharmaMovement";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import { useAppTranslation } from "@/lib/useAppTranslation";

type PromotePageData = {
  hero: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    badges: string[];
  };
  stats: { value: string; label: string }[];
  work: {
    title: string;
    description: string;
    cards: { icon: string; title: string; description: string }[];
  };
  premium: {
    title: string;
    description: string;
    features: { icon: string; title: string; description: string }[];
    button: string;
  };
  comparison: {
    title: string;
    subtitle: string;
    headers: string[];
    rows: {
      feature: string;
      traditional: { type: string; value: string };
      farmadoc: { type: string; label: string };
    }[];
  };
};

export default function PharmacySignupPage() {
  const { get } = useAppTranslation();
  const [openLogin, setOpenLogin] = useState(false);

  const page = get<PromotePageData>("promotePage", {
    hero: {
      title: "Promote Without Managing Anything",
      description:
        "Join Italy's leading pharmaceutical marketplace and start moving surplus inventory today. FarmaDoc's admin team handles everything from product uploads to promotions. You just show up.",
      primaryButton: "Join FarmaDoc",
      secondaryButton: "Talk to Our Team",
      badges: ["No setup required", "We manage listings"],
    },
    stats: [
      { value: "4500+", label: "Pharmacies onboarded" },
      { value: "48h", label: "Average time to go live" },
      { value: "50%", label: "Reduction of up to 50% of surplus stock" },
      { value: "4.8", label: "Partner satisfaction score" },
    ],
    work: {
      title: "We do the work. You get the clients.",
      description:
        "Unlike traditional marketplaces, FarmaDoc's team manages everything. No dashboards to learn, no listings to maintain.",
      cards: [
        { icon: "/images/logo1.svg", title: "We Upload Your Products", description: "Our admin team handles all product uploads, descriptions, and categorization. You just provide the inventory list." },
        { icon: "/images/logo2.svg", title: "We Manage Your Offers", description: "FarmaDoc creates and optimizes discount offers to maximize sales and reach." },
        { icon: "/images/logo3.svg", title: "We Handle Visibility", description: "Strategic placement in search results, maps, and featured sections." },
        { icon: "/images/logo4.svg", title: "You Get Results", description: "Monthly reports on sales, visibility, and customer reach." },
      ],
    },
    premium: {
      title: "Stand out with Premium visibility",
      description:
        "Unlike traditional marketplaces, FarmaDoc's team manages everything. No dashboards to learn, no listings to maintain.",
      features: [
        { icon: "/images/feature-placement.svg", title: "Featured Placement", description: "Your pharmacy appears at the top of search results and on the homepage deals section." },
        { icon: "/images/priority-visibility.svg", title: "Priority Map Visibility", description: "Highlighted pin on the geo-discovery map, visible above standard listings in your area." },
        { icon: "/images/boosted-offer.svg", title: "Boosted Offers", description: "Promotional banner on high-traffic deal pages. Increase visibility during key sales periods." },
        { icon: "/images/verified_badge.svg", title: "Verified Badge", description: "Premium verification badge builds customer trust and increases conversion rates by up to 40%." },
      ],
      button: "Upgrade to Premium",
    },
    comparison: {
      title: "Traditional Marketplace vs. FarmaDoc",
      subtitle: "See the difference a fully managed model makes.",
      headers: ["Feature", "Traditional", "FarmaDoc"],
      rows: [
        { feature: "Product listing management", traditional: { type: "icon", value: "cross" }, farmadoc: { type: "icon", label: "Fully managed by FarmaDoc team" } },
        { feature: "Tech skills required", traditional: { type: "icon", value: "check" }, farmadoc: { type: "badge", label: "Zero tech knowledge needed" } },
        { feature: "Offer & discount creation", traditional: { type: "badge", value: "Manual" }, farmadoc: { type: "icon", label: "Automatically optimized" } },
        { feature: "Search & map visibility", traditional: { type: "badge", value: "Limited" }, farmadoc: { type: "icon", label: "Priority placement guaranteed" } },
      ],
    },
  });

  return (
    <div>
      <Header showSearch={false} />
      <div className="pt-[80px]"></div>

      <div className="relative w-full">
        <Image src="/images/pharma_banner.png" alt="Banner" width={1920} height={866} priority className="w-full h-auto" />

        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full px-20 pb-20 flex justify-between items-end">
            <div className="text-white max-w-xl">
              <p className="text-[40px] font-helvetica sm:text-4xl mb-4 sm:whitespace-nowrap font-medium">
                {page.hero.title}
              </p>

              <p className="text-[18px] font-inter sm:text-base md:text-lg mb-4 text-white font-medium">
                {page.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => setOpenLogin(true)} className="bg-[#33B1FF] hover:bg-blue-700 px-6 py-3 rounded font-semibold font-medium text-[16px] font-inter">
                  {page.hero.primaryButton}
                </button>

                <button className="border border-[#33B1FF] text-[#33B1FF] px-6 py-3 rounded font-semibold">
                  {page.hero.secondaryButton}
                </button>
              </div>
            </div>

            <div className="hidden sm:flex gap-4">
              {page.hero.badges.map((badge: string, index: number) => (
                <div key={badge} className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg text-[14px] font-semibold font-inter">
                  <Image src={index === 0 ? "/images/pharma-banner-logo.svg" : "/images/pharma-banner-logo1.svg"} alt="badge" width={24} height={24} priority />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
        {page.stats.map((stat, index) => (
          <div key={stat.label} className={index < page.stats.length - 1 ? "pr-6 border-r border-gray-200" : ""}>
            <h2 className="text-[52px] font-medium font-helvetica text-[#1E3862]">{stat.value}</h2>
            <p className="text-[16px] text-gray-500 font-inter font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h1 className="text-[32px] md:text-3xl font-bold text-[#1E3862] mb-3 font-medium font-helvetica">
          {page.work.title}
        </h1>

        <p className="text-[#6B6F72] text-[16px] md:text-base font-inter">
          {page.work.description}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pb-16">
        {page.work.cards.map((card) => (
          <div key={card.title} className="border border-[#EEF2F5] rounded-xl p-6 bg-white">
            <div className="text-[#1E3862] mb-3">
              <Image src={card.icon} alt={card.title} width={48} height={48} priority />
            </div>
            <h3 className="font-semibold mb-2 text-[20px] font-inter">{card.title}</h3>
            <p className="text-[#6B6F72] text-[16px] font-inter">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#243E63] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image src="/images/farma-banner.png" alt="Banner" width={650} height={720} priority className="object-contain" />
          </div>

          <div className="w-full lg:w-1/2 text-white flex flex-col justify-center">
            <h2 className="text-[36px] sm:text-3xl md:text-4xl font-medium mb-4 font-helvetica">
              {page.premium.title}
            </h2>

            <p className="text-white font-inter mb-8 text-[16px] sm:text-base">
              {page.premium.description}
            </p>

            <div className="space-y-6">
              {page.premium.features.map((feature, index) => (
                <div key={feature.title} className={`flex gap-4 p-4 ${index < page.premium.features.length - 1 ? "border-b border-[#244477]" : ""}`}>
                  <div>
                    <Image src={feature.icon} alt={feature.title} width={48} height={48} priority className="object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[20px] font-inter">{feature.title}</h4>
                    <p className="text-[16px] font-inter">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-white text-[#243E63] px-6 py-3 rounded-md font-semibold w-fit">
              {page.premium.button}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-[32px] font-helvetica font-medium text-[#1E3862] mb-2">{page.comparison.title}</h1>
        <p className="text-gray-500 mb-6 text-[16px] font-inter font-medium">{page.comparison.subtitle}</p>

        <div className="border border-[#EEF2F5] rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-[#E5F6FF] font-medium p-4 text-[20px] text-[#000000] font-inter">
            {page.comparison.headers.map((header: string) => (
              <div key={header}>{header}</div>
            ))}
          </div>

          {page.comparison.rows.map((row, i) => (
            <div key={`${row.feature}-${i}`} className="grid grid-cols-3 items-center p-4 border-b border-[#EEF2F5] last:border-b-0 text-sm">
              <div className="text-[#6B6F72] text-[18px] font-medium font-inter">{row.feature}</div>

              <div className="flex">
                {row.traditional.type === "icon" ? (
                  <Image src={row.traditional.value === "check" ? "/images/Check.svg" : "/images/x.svg"} alt="status" width={33} height={33} priority />
                ) : (
                  <span className="px-3 py-1 rounded-full bg-[#FFF6E2] text-[#FF7903] text-[16px] font-medium font-inter">{row.traditional.value}</span>
                )}
              </div>

              <div className="flex">
                {row.farmadoc.type === "icon" ? (
                  <div className="flex items-center gap-2 bg-[#E6FFF0] text-[#008B38] pr-4 py-1 rounded-full text-[16px] font-inter font-medium">
                    <Image src="/images/Check.svg" alt="check" width={33} height={33} priority />
                    {row.farmadoc.label}
                  </div>
                ) : (
                  <span className="px-4 py-1 rounded-full bg-[#E5F6FF] text-[#1192E8] text-[16px] font-medium font-inter">{row.farmadoc.label}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} initialStep="pharmacySignup" />}

      <PharmaMovement />
      <FAQAccordion />
      <Footer />
    </div>
  );
}
