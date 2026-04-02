"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Deal {
  id: number;
  imageSrc: string;
  title: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
  offerEndsIn: string;
}

interface CategoryData {
  name: string;
  content: string;
  deals: Deal[];
}

interface SubMenuProps {
  categoriesData: CategoryData[];
}

export default function SubMenu({ categoriesData }: SubMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = categoriesData[activeIndex];

  return (
    <div className="absolute left-0 top-full mt-1 flex bg-white rounded-md z-10 min-w-[1280px] shadow-lg border border-gray-200 pointer-events-auto font-inter">
      
      {/* LEFT COLUMN */}
      <div className="flex flex-col min-w-[324px] pr-6 bg-[#F5F9FF] py-4 px-6">
        {categoriesData.map((cat, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)} // 🔥 hover change
            className={`py-3 px-3 cursor-pointer text-sm font-medium rounded-md ${
              activeIndex === index
                ? "bg-[#E5F6FF] text-[#1192E8]"
                : "text-gray-800 hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </div>
        ))}
      </div>

      {/* MIDDLE COLUMN */}
      <div className="flex-1 py-4 px-6">
        <h3 className="text-gray-800 font-semibold mb-4">
          {activeCategory.name}
        </h3>
        <p className="text-gray-600">{activeCategory.content}</p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="min-w-[480px] pl-6 bg-[#F8FCFF] py-4 px-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold flex items-center gap-1 text-gray-800">
            🔥 Hot Medicine Deals
          </h4>
          <span className="text-sm text-blue-600 cursor-pointer">
            View All →
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
  {activeCategory.deals.map((deal) => (
    <div
      key={deal.id}
      className="border rounded-md p-2 hover:shadow-md cursor-pointer"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-20 mb-2">
        {/* OFFER BADGE */}
        <span className="absolute top-1 right-1 text-xs bg-[#E5F6FF] text-[#1192E8] px-2 py-0.5 rounded-md z-10">
          Offer ends in {deal.offerEndsIn}
        </span>

        <Image
          src={deal.imageSrc}
          alt={deal.title}
          fill
          className="object-contain"
        />
      </div>

      {/* TITLE */}
      <p className="text-xs font-medium">{deal.title}</p>

      {/* PRICES */}
      <div className="flex items-center gap-2 mt-1">
        <p className="text-sm font-semibold">€{deal.price}</p>
        <p className="text-xs line-through text-gray-400">€{deal.oldPrice}</p>
        <p className="text-xs text-red-500 bg-[#FBE7E7]  rounded p-1 font-bold">
          {deal.discountPercent}% Off
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}