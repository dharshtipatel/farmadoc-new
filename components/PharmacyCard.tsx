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
  return (
    <div className="w-[305px] border border-gray-300 rounded-[8px] flex flex-col gap-[12px] pb-[20px] bg-white">

      {/* Image Container with relative positioning for badges */}
      <div className="relative w-[302px] h-[160px] rounded-t-[8px] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
        />

        {/* Star Badge - Top Left */}
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

        {/* Deals Badge - Top Right */}
        {deals && (
          <div className="absolute top-3 right-3 bg-blue-100 text-blue-600 rounded-md px-2 py-1 flex items-center gap-1 text-xs font-semibold">
            <span>🔥</span>
            <span>{deals} Deals</span>
          </div>
        )}

        {/* Distance Badge - Bottom Right */}
        {distance && (
          <div className="absolute bottom-3 right-3 bg-gray-100 text-gray-700 rounded-md px-2 py-1 text-xs font-semibold">
            {distance} Km
          </div>
        )}

      </div>

      {/* Content Section */}
      <div className="px-[16px] flex flex-col gap-[8px]">

        <h6 className="text-[16px] font-bold text-[#000000] font-['Helvetica Neue']">
          {name}
        </h6>

        <p className="flex text-[13px] text-gray-500 truncate">
          <MapPin size={14} className="mr-1" />
          {address}
        </p>

        <Link
          href={`/productdetails?type=${
            type === "pharmacy" ? btoa("pharmacydetails") : btoa("showroomdetail")
          }`}
          passHref
        >
          <button
            className="w-[265px] h-[40px] border border-gray-300 rounded-[4px] flex items-center justify-center gap-[10px] px-4 py-[8px] text-[14px] leading-[23px] font-medium tracking-[0.01em] text-[#1E3862] hover:bg-gray-50"
            type="button"
          >
            View Offers
          </button>
        </Link>

      </div>
    </div>
  );
}