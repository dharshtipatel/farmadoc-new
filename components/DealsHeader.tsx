"use client";

import { useState } from "react";

interface DealsHeaderProps {
  title: string;
  count?: number;
  subtitle: string;
}

const sortOptions = [
  "Relevance",
  "Nearest Pharmacy",
  "Best Discount",
  "Price: Low to High",
  "Expiring Soon",
  "Longer Expiry First",
];

export default function DealsHeader({
  title,
  count,
  subtitle,
}: DealsHeaderProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  return (
    <div className="flex items-start justify-between pb-3">
      
      {/* Left */}
      <div>
        <h2 className="text-[24px] font-bold text-black font-helvetica">
          {title}
          {count !== undefined && (
            <span className="text-gray-500 text-sm ml-2">({count})</span>
          )}
        </h2>

        <p className="text-sm text-gray-500 mt-4  ">
          {subtitle}
        </p>
      </div>

      {/* Right - Sort */}
      <div className="relative w-[237px] font-inter">
      {/* Select Box */}
      <div
        className="border border-gray-300 rounded-md flex items-center justify-between px-3 h-[44px] cursor-pointer bg-white w-[237px]"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <span className="text-[14px] text-gray-500 whitespace-nowrap">
            Sort by:
          </span>

          <span className="text-[14px] text-[#1E3862]">
            {selected}
          </span>
        </div>

        {/* Right side arrow */}
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-1 w-[237px] border border-gray-300 rounded-md bg-white z-20">
          {sortOptions.map((option) => (
            <div
              key={option}
              className="h-[30px] flex items-center px-3 text-[14px] text-[#1E3862] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}