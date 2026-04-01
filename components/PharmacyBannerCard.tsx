"use client";

import Image from "next/image";
import { Clock } from "lucide-react";

type Props = {
  name: string;
  city: string;
  address: string;
  distance: string;
  image: string;
  starBadge?: string;
  operatingHours: {
    Mon?: string;
    Tue?: string;
    Wed?: string;
    Thu?: string;
    Fri?: string;
    Sat?: string;
    Sun?: string;
  };
};

export default function PharmacyBannerCard({
  name,
  city,
  address,
  distance,
  image,
  starBadge,
  operatingHours,
}: Props) {
  const defaultHours = {
    Mon: "09:00 AM - 01:00 PM",
    Tue: "09:00 AM - 01:00 PM",
    Wed: "09:00 AM - 01:00 PM",
    Thu: "Closed",
    Fri: "Closed",
    Sat: "Closed",
    Sun: "Closed",
  };

  const hours = { ...defaultHours, ...operatingHours };
  const leftDays = ["Mon", "Tue", "Wed", "Thu"];
  const rightDays = ["Fri", "Sat", "Sun"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col lg:flex-row gap-4 lg:gap-6">
      
      {/* Left Image */}
      <div className="relative w-full lg:w-[522px] h-[320px] flex-shrink-0">
        <Image src={image} alt={name} fill className="object-cover rounded-md" />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between gap-4 h-[320px]">
        
        {/* Top Section: Title + Star */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold text-[#1E3862] flex items-center gap-2">
            {name}, {city}
            {starBadge && (
              <Image
                src={starBadge}
                alt="Star Badge"
                width={23}
                height={24}
                className="object-contain"
                priority
              />
            )}
          </h2>
        </div>

        {/* Address, Distance, Direction */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-1">
              <Image src="/images/location.svg" alt="location" width={20} height={20} />
              <span>{address}</span>
            </div>

            <div className="flex items-center gap-1">
              <Image src="/images/direction_icon.svg" alt="distance" width={20} height={20} />
              <span>{distance}</span>
            </div>
          </div>

          <div className="flex items-center border border-gray-300 rounded-sm px-2 py-1">
            <a
              href={''}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#1192E8] text-sm hover:underline"
            >
              <span>Direction</span>
              <Image src="/images/direction.svg" alt="direction" width={14} height={14} />
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-gray-50 rounded-md p-5 flex-1 overflow-y-auto">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={26} />
            <h4 className="font-semibold text-[#1E3862] text-[16px]">Operating Hours</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 text-sm text-gray-500">
            <div className="space-y-2">
              {leftDays.map((day) => (
                <p key={day}>
                  {day}: {hours[day]}
                </p>
              ))}
            </div>
            <div className="space-y-2">
              {rightDays.map((day) => (
                <p key={day}>
                  {day}: {hours[day]}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-gray-500 mt-3">
            <span>Reserve/Book available</span>
            <span>|</span>
            <span>Pay Online/Pay in Store</span>
            <span>|</span>
            <span>Pickup from Store only</span>
          </div>
        </div>
      </div>
    </div>
  );
}