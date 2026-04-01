"use client";

import { ChevronRight } from "lucide-react";

const benefits = [
  {
    title: "Affordable Prices",
    description:
      "Access exclusive discounts on medicines & over the counter products",
    icon: (
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    ),
  },
  {
    title: "Reduce Waste",
    description:
      "Help the environment by reducing waste and the planet will thank you!",
    icon: (
      <path d="M3 10h2a6 6 0 016 6v4M21 14h-2a6 6 0 01-6-6v-4" />
    ),
  },
  {
    title: "Proximity",
    description:
      "Not just online shopping, real pharmacies, real professionals.",
    icon: (
      <path d="M8 7h8M12 3v4m6 8v-2a6 6 0 00-12 0v2a6 6 0 0012 0z" />
    ),
  },
];

export default function PharmaBenefits() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-5 relative">
      <div className="grid grid-cols-1 md:grid-cols-[337px_1fr_1fr_1fr] gap-6 border border-gray-200 rounded-md">

        {/* Left Text Block */}
        <div className="bg-blue-100 w-[337px] min-h-[241px] p-[32px] flex flex-col gap-[24px] rounded-tl-[8px] rounded-bl-[8px]">
          <h2 className="text-[#243b5e] font-bold text-lg leading-tight">
            We helps in reduce pharmaceutical waste.
          </h2>

          <p className="text-gray-600 text-sm">
            FarmaDoc is the marketplace where We help users find quality
            products at great prices at pharmacies and drugstores.
          </p>

          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center hover:underline"
          >
            Explore more <ChevronRight size={16} className="ml-1" />
          </a>
        </div>

        {/* Dynamic Cards */}
        {benefits.map((item, index) => (
          <div key={index} className="flex flex-col p-8 gap-[16px]">
            <div className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {item.icon}
              </svg>
            </div>

            <h5 className="font-bold text-[#243b5e] text-base">
              {item.title}
            </h5>

            <p className="text-[#6B6F72] text-[14px] font-inter'">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}