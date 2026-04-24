"use client";
import Header from "../../components/Header";
import PharmaMovement from "@/components/PharmaMovement";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import CarouselSection from "@/components/CarouselSection";
import TestimonialCard from "@/components/TestimonialCard";
export default function PharmacySignupPage() {
    const comments = [
    {
        id: 1,
        title: "Huge Savings Without Compromise",
        quote: "I saved almost €40 on supplements that were still months away from expiry. Pickup was smooth and the pharmacy staff were very friendly.",
        author: "Laura M., Milano",
        rating: 5,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 2,
        title: "Quick & Convenient",
        quote: "The online reservation and pickup system is so easy! I got my medicines without waiting in long queues.",
        author: "Marco T., Rome",
        rating: 4,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 3,
        title: "Trusted & Safe",
        quote: "I was initially skeptical about near-expiry medicines, but FarmaDoc ensures everything is safe and verified by licensed pharmacies.",
        author: "Elena R., Turin",
        rating: 5,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 4,
        title: "Fantastic Customer Support",
        quote: "Their customer service answered all my questions promptly. I feel confident ordering from FarmaDoc again.",
        author: "Giovanni L., Florence",
        rating: 5,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 5,
        title: "Saves Time and Money",
        quote: "I discovered great deals on supplements and medications near me. It really helps reduce waste and saves me money.",
        author: "Sara P., Naples",
        rating: 4,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    ];
    const [openLogin, setOpenLogin] = useState(false);
    const rows = [
  {
    feature: "Product listing management",
    traditional: { type: "icon", value: "cross" },
    farmadoc: { type: "icon", label: "Fully managed by FarmaDoc team" },
  },
  {
    feature: "Tech skills required",
    traditional: { type: "icon", value: "check" },
    farmadoc: { type: "badge", label: "Zero tech knowledge needed" },
  },
  {
    feature: "Offer & discount creation",
    traditional: { type: "badge", value: "Manual" },
    farmadoc: { type: "icon", label: "Automatically optimized" },
  },
  {
    feature: "Search & map visibility",
    traditional: { type: "badge", value: "Limited" },
    farmadoc: { type: "icon", label: "Priority placement guaranteed" },
  },
  {
    feature: "Setup time",
    traditional: { type: "badge", value: "Days to weeks" },
    farmadoc: { type: "icon", label: "Live in 48 hours" },
  },
  {
    feature: "Monthly reporting",
    traditional: { type: "icon", value: "cross" },
    farmadoc: { type: "icon", label: "Detailed analytics included" },
  },
  {
    feature: "Dedicated account manager",
    traditional: { type: "icon", value: "cross" },
    farmadoc: { type: "icon", label: "Direct support line" },
  },
  {
    feature: "Commission model",
    traditional: { type: "badge", value: "High fees" },
    farmadoc: { type: "icon", label: "Low, transparent flat rate" },
  },
];
  return (
  <div>
        <Header showSearch={false}/>
        <div className="pt-[80px]"></div>
        
        <div className="relative w-full">
            {/* Background Image */}
            <Image
                src="/images/pharma_banner.png"
                alt="Banner"
                width={1920}
                height={866}
                priority
                className="w-full h-auto"
            />

            {/* Overlay */}
            <div className="absolute inset-0">
                
                <div className="absolute bottom-0 left-0 w-full px-20 pb-20 flex justify-between items-end">
                
                {/* LEFT CONTENT */}
                <div className="text-white max-w-xl">
                    <p className="text-[40px] font-helvetica sm:text-4xl mb-4 sm:whitespace-nowrap font-medium">
                    Promote Without Managing Anything
                    </p>

                    <p className="text-[18px] font-inter sm:text-base md:text-lg mb-4 text-white font-medium">
                    Join Italy's leading pharmaceutical marketplace and start moving 
                    surplus inventory today. FarmaDoc's admin team handles everything —
                    from product uploads to promotions. You just show up.
                    </p>

                    <div className="flex flex-wrap gap-4">
                    <button onClick={() => setOpenLogin(true)} className="bg-[#33B1FF] hover:bg-blue-700 px-6 py-3 rounded font-semibold font-medium text-[16px] font-inter">
                        Join FarmaDoc →
                    </button>

                    <button className="border border-[#33B1FF] text-[#33B1FF] px-6 py-3 rounded font-semibold">
                        Talk to Our Team
                    </button>
                    </div>
                </div>

                {/* RIGHT BADGES */}
                <div className="hidden sm:flex gap-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg text-[14px] font-semibold font-inter">
                    <Image
                        src="/images/pharma-banner-logo.svg"
                        alt="Banner"
                        width={24}
                        height={24}
                        priority
                    />
                    <span>No setup required</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg text-[14px] font-semibold font-inter">
                    <Image
                        src="/images/pharma-banner-logo1.svg"
                        alt="Banner"
                        width={24}
                        height={24}
                        priority
                    />
                    <span>We manage listings</span>
                    </div>
                </div>

                </div>
            </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-[20px]">
        <div className="pr-6 border-r border-gray-200">
            <h2 className="text-[52px] font-medium font-helvetica text-[#1E3862]">4500+</h2>
            <p className="text-[16px] text-gray-500 font-inter font-medium">Pharmacies onboarded</p>
        </div>

        <div className="pr-6 border-r border-gray-200">
            <h2 className="text-[52px] font-medium font-helvetica text-[#1E3862]">48h</h2>
            <p className="text-[16px] text-gray-500 font-inter font-medium">Average time to go live</p>
        </div>

        <div className="pr-6 border-r border-gray-200">
            <h2 className="text-[52px] font-medium font-helvetica text-[#1E3862]">50%</h2>
            <p className="text-[16px] text-gray-500 font-inter font-medium whitespace-nowrap">
            reduction of up to 50% of surplus stock
            </p>
        </div>

        <div>
            <h2 className="text-[52px] font-medium font-helvetica text-[#1E3862]">4.8</h2>
            <p className="text-[16px] text-gray-500 font-inter font-medium">Partner satisfaction score</p>
        </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-10">
        <h1 className="text-[32px] md:text-3xl font-bold text-[#1E3862] mb-3 font-medium font-helvetica">
            We do the work. You get the clients.
        </h1>

        <p className="text-[#6B6F72] text-[16px] md:text-base font-inter">
            Unlike traditional marketplaces, FarmaDoc's team manages everything.
            No dashboards to learn, no listings to maintain.
        </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pb-16">

        {/* Card 1 */}
        <div className="border border-[#EEF2F5] rounded-xl p-6 bg-white">
            <div className="text-[#1E3862] mb-3">
                <Image
                    src="/images/logo1.svg"
                    alt="Banner"
                    width={48}
                    height={48}
                    priority
                />
            </div>
            <h3 className="font-semibold mb-2 text-[20px] font-inter">We Upload Your Products</h3>
            <p className="text-[#6B6F72] text-[16px] font-inter">
            Our admin team handles all product uploads, descriptions, and categorization.
            You just provide the inventory list.
            </p>
        </div>

        {/* Card 2 */}
        <div className="border border-[#EEF2F5] rounded-xl p-6 bg-white">
            <div className="text-[#1E3862] mb-3">
                <Image
                    src="/images/logo2.svg"
                    alt="Banner"
                    width={48}
                    height={48}
                    priority
                />
            </div>
            <h3 className="font-semibold mb-2 text-[20px] font-inter">We Manage Your Offers</h3>
            <p className="text-[#6B6F72] text-[16px] font-inter">
            FarmaDoc creates and optimizes discount offers to maximize sales and reach.
            </p>
        </div>

        {/* Card 3 */}
        <div className="border border-[#EEF2F5] rounded-xl p-6 bg-white">
            <div className="text-[#1E3862] mb-3">
                <Image
                    src="/images/logo3.svg"
                    alt="Banner"
                    width={48}
                    height={48}
                    priority
                />
            </div>
            <h3 className="font-semibold mb-2 text-[20px] font-inter">We Handle Visibility</h3>
            <p className="text-[#6B6F72] text-[16px] font-inter">
            Strategic placement in search results, maps, and featured sections.
            </p>
        </div>

        {/* Card 4 */}
        <div className="border border-[#EEF2F5] rounded-xl p-6 bg-white">
            <div className="text-[#1E3862] mb-3">
                <Image
                    src="/images/logo4.svg"
                    alt="Banner"
                    width={48}
                    height={48}
                    priority
                />
            </div>
            <h3 className="font-semibold mb-2 text-[20px] font-inter">You Get Results</h3>
            <p className="text-[#6B6F72] text-[16px] font-inter">
            Monthly reports on sales, visibility, and customer reach.
            </p>
        </div>

        </div>

        <div className="bg-[#243E63] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">
            
            {/* LEFT IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
                src="/images/farma-banner.png"
                alt="Banner"
                width={650}
                height={720}
                priority
                className="object-contain"
            />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full lg:w-1/2 text-white flex flex-col justify-center">
            
            <h2 className="text-[36px] sm:text-3xl md:text-4xl font-medium mb-4 font-helvetica">
                Stand out with Premium visibility
            </h2>

            <p className="text-white font-inter mb-8 text-[16px] sm:text-base">
                Unlike traditional marketplaces, FarmaDoc's team manages everything.
                No dashboards to learn, no listings to maintain.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
                <div className="flex gap-4 border-b border-[#244477] p-4">
                <div>
                    <Image
                        src="/images/feature-placement.svg"
                        alt="Banner"
                        width={48}
                        height={48}
                        priority
                        className="object-contain"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-[20px] font-inter">Featured Placement</h4>
                    <p className="text-[16px] font-inter">
                    Your pharmacy appears at the top of search results and on the homepage deals section.
                    </p>
                </div>
                </div>

                <div className="flex gap-4 border-b border-[#244477] p-4">
                <div>
                    <Image
                        src="/images/priority-visibility.svg"
                        alt="Banner"
                        width={48}
                        height={48}
                        priority
                        className="object-contain"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-[20px] font-inter">Priority Map Visibility</h4>
                    <p className="text-[16px] font-inter">
                    Highlighted pin on the geo-discovery map, visible above standard listings in your area.
                    </p>
                </div>
                </div>

                <div className="flex gap-4 border-b border-[#244477] p-4">
                <div>
                    <Image
                        src="/images/boosted-offer.svg"
                        alt="Banner"
                        width={48}
                        height={48}
                        priority
                        className="object-contain"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-[20px] font-inter">Boosted Offers</h4>
                    <p className="text-[16px] font-inter">
                    Promotional banner on high-traffic deal pages. Increase visibility during key sales periods.
                    </p>
                </div>
                </div>

                <div className="flex gap-4  border-[#244477] p-4">
                <div>
                    <Image
                        src="/images/verified_badge.svg"
                        alt="Banner"
                        width={48}
                        height={48}
                        priority
                        className="object-contain"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-[20px] font-inter">Verified Badge</h4>
                    <p className="text-[16px] font-inter">
                    Premium verification badge builds customer trust and increases conversion rates by up to 40%.
                    </p>
                </div>
                </div>
            </div>

            <button className="mt-8 bg-white text-[#243E63] px-6 py-3 rounded-md font-semibold w-fit">
                Upgrade to Premium →
            </button>

            </div>
        </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-[32px] font-helvetica font-medium text-[#1E3862] mb-2">
            Traditional Marketplace vs. FarmaDoc
        </h1>
        <p className="text-gray-500 mb-6 text-[16px] font-inter font-medium">
            See the difference a fully managed model makes.
        </p>

        <div className="border border-[#EEF2F5] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#E5F6FF] font-medium p-4 text-[20px] text-[#000000] font-inter">
                <div>Feature</div>
                <div className="">Traditional</div>
                <div className="">FarmaDoc ✦</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
            <div
                key={i}
                className="grid grid-cols-3 items-center p-4 border-b border-[#EEF2F5] last:border-b-0 text-sm"
            >
                <div className="text-[#6B6F72] text-[18px] font-medium font-inter">{row.feature}</div>

                {/* Traditional */}
                <div className="flex">
                {row.traditional.type === "icon" ? (
                    row.traditional.value === "check" ? (
                    <Image
                        src="/images/Check.svg"
                        alt="Check"
                        width={33}
                        height={33}
                        priority
                        className=""
                    />
                    ) : (
                    <Image
                        src="/images/x.svg"
                        alt="X"
                        width={33}
                        height={33}
                        priority
                        className=""
                    />
                    )
                ) : (
                    <span className="px-3 py-1 rounded-full bg-[#FFF6E2] text-[#FF7903] text-[16px] font-medium font-inter">
                    {row.traditional.value}
                    </span>
                )}
                </div>

                {/* FarmaDoc */}
                <div className="flex">
                {row.farmadoc.type === "icon" ? (
                    <div className="flex items-center gap-2 bg-[#E6FFF0] text-[#008B38] pr-4 py-1 rounded-full text-[16px] font-inter font-medium">
                    <Image
                        src="/images/Check.svg"
                        alt="Check"
                        width={33}
                        height={33}
                        priority
                        className=""
                    />
                    {row.farmadoc.label}
                    </div>
                ) : (
                    <span className="px-4 py-1 rounded-full bg-[#E5F6FF] text-[#1192E8] text-[16px] font-medium font-inter">
                    {row.farmadoc.label}
                    </span>
                )}
                </div>
            </div>
            ))}
        </div>
        </div>
        {openLogin && (
            <LoginModal onClose={() => setOpenLogin(false)} initialStep="pharmacySignup" />
        )}

        {/* <CarouselSection
            title="What Our Partners Say"
            subtitle="Discover how partners across Italy are boosting revenue, fighting waste, and reaching new customers with FarmaDoc."
            deals={comments}
            CardComponent={TestimonialCard}
            cardsPerPage={4}
            titleClassName="text-[32px] text-[#1E3862] font-helvetica font-medium"
        /> */}
        <PharmaMovement />
        <FAQAccordion />
        
        <Footer />
  </div>
  );
}