"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface PharmacyBannerProps {
  image: string;
  badge?: string;
  title: ReactNode;
  description: string;
  buttonText: string;
  note?: string;
}

export default function PharmacyBanner({
  image,
  badge,
  title,
  description,
  buttonText,
  note,
}: PharmacyBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
      <div className="relative w-full h-[395px] sm:h-[395px] md:h-[395px] lg:h-[395px] overflow-hidden rounded-md flex items-center">

        {/* Banner Image */}
        <Image
          src={image}
          alt="Pharmacy Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #33B1FF 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute left-4 sm:left-8 md:left-14 z-10 max-w-full sm:max-w-lg text-white flex flex-col gap-2 sm:gap-4">
          
          {badge && (
            <p className="text-sm sm:text-sm font-medium opacity-80">{badge}</p>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-tight break-words">
            {title}
          </h1>

          <p className="text-sm sm:text-base opacity-90 break-words">
            {description}
          </p>

          <button className="mt-2 sm:mt-4 w-fit bg-[#1B2E4B] px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold hover:bg-[#15243A] transition-colors text-sm sm:text-base">
            {buttonText}
          </button>

          {note && (
            <p className="text-xs opacity-60 mt-1 sm:mt-2">{note}</p>
          )}

        </div>
      </div>
    </section>
  );
}