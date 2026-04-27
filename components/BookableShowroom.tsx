"use client";

import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function BookableShowroom() {
  const { t } = useAppTranslation();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[32px] md:text-3xl font-medium text-[#1E3862] font-helvetica">
          {t("bookable.title")}
        </h1>

        <p className="text-[16px] font-medium font-inter md:text-base text-[#6B6F72] mt-2 max-w-2xl">
          {t("bookable.subtitle")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#F3FAFF] rounded-xl p-6 relative">

          <span className="absolute top-8 right-4 bg-[#FFB703] font-inter font-medium text-white text-[12px] px-4 py-2 rounded-full">
            {t("bookable.pharmacy.badge")}
          </span>

          <div className="mb-4">
            <Image
              src="/images/bookable.svg"
              alt="pharmacy"
              width={52}
              height={52}
            />
          </div>

          <h3 className="text-[24px] font-inter font-semibold text-[#1E3862] mb-2">
            {t("bookable.pharmacy.title")}
          </h3>

          <p className="text-[16px] text-[#6B6F72] font-inter mb-4">
            {t("bookable.pharmacy.description")}
          </p>

          <ul className="space-y-2 text-[16px] text-[#6B6F72] font-inter">

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.pharmacy.list.noBooking")}
            </li>

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.pharmacy.list.payDirect")}
            </li>

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.pharmacy.list.fcfs")}
            </li>

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.pharmacy.list.preview")}
            </li>

          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#F3FFE9] rounded-xl p-6 relative">

          <span className="absolute top-8 right-4 bg-green-600 font-inter font-medium text-white text-[12px] px-4 py-2 rounded-full">
            {t("bookable.showroom.badge")}
          </span>

          <div className="mb-4">
            <Image
              src="/images/showroom.svg"
              alt="showroom"
              width={52}
              height={52}
            />
          </div>

          <h3 className="text-[24px] font-inter font-semibold text-[#1E3862] mb-2">
            {t("bookable.showroom.title")}
          </h3>

          <p className="text-[16px] text-[#6B6F72] font-inter mb-4">
            {t("bookable.showroom.description")}
          </p>

          <ul className="space-y-2 text-[16px] text-[#6B6F72] font-inter">

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.showroom.list.hold")}
            </li>

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.showroom.list.payment")}
            </li>

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.showroom.list.cancel")}
            </li>

            <li className="flex items-center gap-2">
              <Image src="/images/bluecheck.svg" alt="showroom" width={24} height={24} />
              {t("bookable.showroom.list.qr")}
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
}