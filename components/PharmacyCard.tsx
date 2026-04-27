"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { useAppTranslation } from "@/lib/useAppTranslation";

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
  const { t } = useAppTranslation();
  const encodeType = (value: string) => value;

  return (
    <div className="w-full max-w-[305px] sm:max-w-[305px] border border-gray-300 rounded-lg flex flex-col gap-3 pb-5 bg-white">

      {/* Image Container */}
      <div className="relative w-full aspect-[302/160] rounded-t-lg overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
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
            <span>{deals} {t("pharmacyCard.deals")}</span>
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
      <div className="px-4 sm:px-4 flex flex-col gap-2">

        <h6 className="text-[16px] font-bold text-black break-words">
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
            className="w-full h-10 border border-gray-300 rounded-md flex items-center justify-center gap-2 px-4 text-[14px] font-medium text-[#1E3862] hover:bg-gray-50"
            type="button"
          >
            {t("pharmacyCard.viewOffers")}
          </button>
        </Link>

      </div>
    </div>
  );
}
