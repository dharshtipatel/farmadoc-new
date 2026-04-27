"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import { useAppTranslation } from "@/lib/useAppTranslation";

type Props = {
  name: string;
  city: string;
  address: string;
  distance: string;
  image: string;
  phone?: string;
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
  phone,
  starBadge,
  operatingHours,
}: Props) {
  const { get, t } = useAppTranslation();
  const closed = t("pharmacyBannerCard.closed");
  const defaultHours = {
    Mon: "09:00 AM - 01:00 PM",
    Tue: "09:00 AM - 01:00 PM",
    Wed: "09:00 AM - 01:00 PM",
    Thu: closed,
    Fri: closed,
    Sat: closed,
    Sun: closed,
  };

  const dayLabels = get<Record<string, string>>("pharmacyBannerCard.days", {
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sat",
    Sun: "Sun",
  });

  const hours = { ...defaultHours, ...operatingHours };
  const leftDays = ["Mon", "Tue", "Wed", "Thu"];
  const rightDays = ["Fri", "Sat", "Sun"];
  const hasPhone = Boolean(phone?.trim());
  const sanitizedPhone = phone?.replace(/\D/g, "");

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col lg:flex-row gap-4 lg:gap-6">
      <div className="relative w-full lg:w-[522px] h-[368px] flex-shrink-0">
        <Image src={image} alt={name} fill className="rounded-md" />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-4 h-[368px]">
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
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#1192E8] text-sm hover:underline"
            >
              <span>{t("pharmacyBannerCard.direction")}</span>
              <Image src="/images/direction.svg" alt="direction" width={14} height={14} />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-md p-5 flex-1 overflow-y-auto">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={26} />
            <h4 className="font-semibold text-[#1E3862] text-[16px]">
              {t("pharmacyBannerCard.operatingHours")}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 text-sm text-gray-500">
            <div className="space-y-2">
              {leftDays.map((day) => (
                <p key={day}>
                  {dayLabels[day]}: {hours[day as keyof typeof hours]}
                </p>
              ))}
            </div>
            <div className="space-y-2">
              {rightDays.map((day) => (
                <p key={day}>
                  {dayLabels[day]}: {hours[day as keyof typeof hours]}
                </p>
              ))}
            </div>
          </div>

          {hasPhone && (
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${sanitizedPhone}`}
                className="sm:w-auto inline-flex items-center justify-center gap-1 rounded-md border border-[#1E3862] bg-white px-4 py-3 text-sm font-semibold text-[#1E3862] hover:bg-[#F6F9FF] transition min-w-[141px] h-[40px]"
              >
                <Image src="/images/phone.svg" alt="phone" width={23} height={23} className="object-contain" priority />
                {t("pharmacyBannerCard.call")}
              </a>
              {sanitizedPhone && (
                <a
                  href={`https://wa.me/${sanitizedPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="sm:w-auto inline-flex items-center justify-center gap-1 rounded-md border border-[#1E3862] bg-white px-4 py-3 text-sm font-semibold text-[#1E3862] hover:bg-[#F6F9FF] transition min-w-[141px] h-[40px]"
                >
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" width={23} height={23} className="object-contain" priority />
                  {t("pharmacyBannerCard.whatsApp")}
                </a>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-gray-500 mt-3">
            <span>{t("pharmacyBannerCard.reserveBookAvailable")}</span>
            <span>|</span>
            <span>{t("pharmacyBannerCard.payOnlinePayInStore")}</span>
            <span>|</span>
            <span>{t("pharmacyBannerCard.pickupFromStoreOnly")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
