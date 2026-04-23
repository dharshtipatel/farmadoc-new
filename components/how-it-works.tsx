"use client";

import Image from "next/image";

const steps = [
  {
    icon: '/images/htw1.svg',
    step: "Step 1",
    title: "Search Nearby Pharmacies",
    desc: "Enter your address or allow location access to instantly see all FarmaDoc-partnered pharmacies in your area. Filter by distance, category, or discount level.",
    color: "bg-[#EEFFFD] text-[#1192E8]",
  },
  {
    icon: '/images/htw2.svg',
    step: "Step 2",
    title: "Discover Deals & Offers",
    desc: "Browse curated pharmaceutical deals managed by the FarmaDoc team. All products are verified, and listed with transparent pricing and discount percentages.",
    color: "bg-[#FFF9EA] text-[#1192E8]",
  },
  {
    icon: '/images/htw3.svg',
    step: "Step 3",
    title: "Reserve or Book",
    desc: "Choose between Bookable items (hold for 24h with a small deposit) or Showroom items (visit the pharmacy to purchase). No commitment required for browsing.",
    color: "bg-[#EBFFF3] text-[#1192E8]",
  },
  {
    icon: '/images/htw4.svg',
    step: "Step 4",
    title: "Pay Online or at Pickup",
    desc: "Complete your transaction online via card, or pay directly at the pharmacy counter during pickup. Both options are fully supported — your choice.",
    color: "bg-[#FAF6FF] text-[#1192E8]",
  },
  {
    icon: '/images/htw5.svg',
    step: "Step 5",
    title: "Collect from the Pharmacy",
    desc: "Head to your chosen pharmacy and collect your reserved products at the dedicated FarmaDoc pickup counter. Show your confirmation QR code and you're done.",
    color: "bg-[#F8FAFF] text-[#1192E8]",
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12 px-4 md:px-16">
      
      {/* Heading */}
      <div className="max-w-[755px] w-full mx-auto mt-4 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-[48px] font-medium font-helvetica text-[#1E3862]">
          From search to pickup in minutes
        </h2>

        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-[18px] font-medium font-inter">
          FarmaDoc makes discovering, reserving, and collecting discounted pharmaceutical products effortless. Here's exactly how it works.
        </p>

        <button className="mt-4 bg-[#1192E8] text-white px-5 py-2 rounded-md text-[16px] font-inter font-medium hover:opacity-90">
          See How It Works →
        </button>
      </div>

      {/* Steps */}
      <div className="relative mt-20 space-y-10 max-w-[1146px] mx-auto">

        {/* Vertical Line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[20px] w-[1px] bg-gray-200" />

        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:gap-12 items-start relative"
          >
            {/* Icon */}
            <div className="relative z-10">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full px-2 py-2 ${item.color}`}
              >
                <Image src={item.icon} alt="icon" width={32} height={32} />
              </div>
            </div>

            {/* Step + Title */}
            <div className="w-full md:w-[319px] shrink-0">
              <p
                className={`inline-block px-4 py-2 rounded-md text-[14px] font-inter font-medium ${item.color}`}
              >
                {item.step}
              </p>

              <h4 className="text-[24px] font-semibold text-[#1E3862] font-inter mt-1">
                {item.title}
              </h4>
            </div>

            {/* Description */}
            <p className="text-[16px] font-inter text-[#6B6F72] leading-relaxed flex-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}