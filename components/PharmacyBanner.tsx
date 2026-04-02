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
    <section className="max-w-7xl mx-auto px-6 py-5 pr-2">
      <div className="relative h-[395px] w-full overflow-hidden rounded-md flex items-center">

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
        <div className="absolute left-14 z-10 max-w-lg text-white flex flex-col gap-4">
          
          {badge && (
            <p className="text-sm font-medium opacity-80">{badge}</p>
          )}

          <h1 className="text-3xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-base opacity-90">
            {description}
          </p>

          <button className="mt-4 w-fit bg-[#1B2E4B] px-6 py-3 rounded-md font-semibold hover:bg-[#15243A] transition-colors">
            {buttonText}
          </button>

          {note && (
            <p className="text-xs opacity-60 mt-2">{note}</p>
          )}

        </div>
      </div>
    </section>
  );
}