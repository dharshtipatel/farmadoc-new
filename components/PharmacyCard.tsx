"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

export type Pharmacy = {
  image: string;
  name: string;
  address: string;
  type: string;
  deals?: number;
  distance?: number;
  starBadge?: string;
};

export default function PharmacyCard({
  image,
  name,
  address,
  type,
  deals,
  distance,
  starBadge,
}: Pharmacy) {
  const encodeType = (value: string) => value;

  return (
    <div className="w-full max-w-[305px] sm:w-[305px] border border-gray-300 rounded-[8px] flex flex-col gap-[12px] pb-[20px] bg-white">

      {/* Image Container */}
      <div className="relative w-full h-[160px] sm:w-[302px] rounded-t-[8px] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className=""
          priority
        />

        {/* Star Badge */}
        {starBadge && (
          <div className="absolute top-3 left-3">
            <Image
              src={starBadge}
              alt="Star Badge"
              width={23}
              height={24}
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* Deals Badge */}
        {deals && (
          <div className="absolute top-3 right-3 bg-blue-100 text-blue-600 rounded-md px-2 py-1 flex items-center gap-1 text-xs font-semibold">
            <span>🔥</span>
            <span>{deals} Deals</span>
          </div>
        )}

        {/* Distance Badge */}
        {distance && (
          <div className="absolute bottom-3 right-3 bg-gray-100 text-gray-700 rounded-md px-2 py-1 text-xs font-semibold">
            {distance} Km
          </div>
        )}

      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-[16px] flex flex-col gap-[8px]">

        <h6 className="text-[16px] font-bold text-[#000000] font-['Helvetica Neue'] break-words">
          {name}
        </h6>

        <p className="flex items-start text-[13px] text-gray-500 gap-1 break-words">
          <MapPin size={14} className="flex-shrink-0 mt-[2px]" />
          {address}
        </p>

        <Link
          href={`/productdetails?type=${
            type === "pharmacy" ? encodeType("pharmacydetails") : encodeType("showroomdetail")
          }`}
          passHref
        >
          <button
            className="w-full sm:w-[265px] h-[40px] border border-gray-300 rounded-[4px] flex items-center justify-center gap-[10px] px-4 py-[8px] text-[14px] leading-[23px] font-medium tracking-[0.01em] text-[#1E3862] hover:bg-gray-50"
            type="button"
          >
            View Offers
          </button>
        </Link>

      </div>
    </div>
  );
}