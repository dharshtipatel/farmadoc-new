"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useAppTranslation } from "@/lib/useAppTranslation";

const categories = [
  "General Inquiry",
  "Booking & Reservation Help",
  "Payment Issues",
  "Pickup & Collections",
  "Product Authenticity",
  "Become a Partner",
  "Technical Issue",
  "Premium Showroom",
  "Other",
];

export default function HelpSection() {
  const { t, lang } = useAppTranslation();


  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(t("help.selectCategory"));
  }, [lang]);

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-green-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] font-medium font-helvetica text-[#1E3862]">
            {t("help.title")}
          </h1>

          <p className="text-sm sm:text-base md:text-[18px] font-inter text-[#6B6F72] mt-2 max-w-[732px] mx-auto">
            {t("help.subtitle")}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-5">

            <span className="px-4 py-2 bg-[#FFF8E9] rounded-full flex items-center gap-2">
              <Image src="/images/cont1.svg" alt="icon" width={22} height={22} />
              <span className="text-[14px] font-medium">
                {t("help.badges.responseTime")}
              </span>
            </span>

            <span className="px-4 py-2 bg-[#F4FBFF] rounded-full flex items-center gap-2">
              <Image src="/images/cont2.svg" alt="icon" width={22} height={22} />
              <span className="text-[14px] font-medium">
                {t("help.badges.gdpr")}
              </span>
            </span>

            <span className="px-4 py-2 bg-[#FAF6FF] rounded-full flex items-center gap-2">
              <Image src="/images/cont3.svg" alt="icon" width={22} height={22} />
              <span className="text-[14px] font-medium">
                {t("help.badges.languages")}
              </span>
            </span>

          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT PANEL */}
          <div className="bg-[#1E3862] text-white rounded-xl p-4 sm:p-6 flex flex-col justify-between">

            <div className="space-y-6">

              <div className="border-b border-[#325792] py-2 flex items-start gap-3">
                <Image src="/images/msg.svg" alt="email" width={40} height={40} />
                <div>
                  <p className="text-[14px] font-medium">
                    {t("help.emailSupport")}
                  </p>
                  <p className="font-semibold text-[16px] sm:text-[18px]">
                    support@farmadoc.it
                  </p>
                </div>
              </div>

              <div className="border-b border-[#325792] py-2 flex items-start gap-3">
                <Image src="/images/msg.svg" alt="email" width={40} height={40} />
                <div>
                  <p className="text-[14px] font-medium">
                    {t("help.partnerSupport")}
                  </p>
                  <p className="font-semibold text-[16px] sm:text-[18px]">
                    partner@farmadoc.it
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Image src="/images/location1.svg" alt="location" width={40} height={40} />
                <div>
                  <p className="text-[14px] font-medium">
                    {t("help.headquarter")}
                  </p>
                  <p className="font-semibold text-[16px] sm:text-[18px]">
                    Via Brera 14, Milano <br />
                    <span className="text-[12px]">
                      20121, Milan MI, Italia
                    </span>
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Help */}
            <div className="mt-8 space-y-3">

              <p className="font-medium">
                {t("help.quickHelp")}
              </p>

              {[
                { key: "promote" },
                { key: "howItWorks" },
                { key: "faq" },
              ].map((item, i) => (
                <button
                  key={i}
                  className="w-full bg-white text-[15px] sm:text-[16px] font-medium text-[#1E3862] px-4 py-3 rounded-md flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <span>{t(`help.quick.${item.key}`)}</span>
                  </div>
                  <span>→</span>
                </button>
              ))}

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="md:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#D6DADD]">

            <h2 className="text-[20px] sm:text-[24px] font-medium font-helvetica text-[#1E3862] mb-1">
              {t("help.form.title")}
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#6B6F72] mb-6">
              {t("help.form.subtitle")}
            </p>

            <form className="space-y-4">

              <div>
                <label className="text-[14px] font-medium">
                  {t("help.form.fullName")}
                </label>
                <input
                  type="text"
                  placeholder={t("help.form.fullNamePlaceholder")}
                  className="w-full mt-1 px-3 py-2 border border-[#D6DADD] rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="text-[14px] font-medium">
                    {t("help.form.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("help.form.emailPlaceholder")}
                    className="w-full mt-1 px-3 py-2 border border-[#D6DADD] rounded-md"
                  />
                </div>

                <div className="relative">
                  <label className="text-[14px] font-medium">
                    {t("help.form.category")}
                  </label>

                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="w-full mt-1 px-3 py-2 border border-[#D6DADD] rounded-md flex justify-between items-center bg-white"
                  >
                    <span>{selected}</span>
                    <span>▾</span>
                  </button>

                  {open && (
                    <div className="absolute z-50 mt-2 w-full bg-white border rounded-xl shadow-lg">
                      {categories.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelected(item);
                            setOpen(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>

              <div>
                <label className="text-[14px] font-medium">
                  {t("help.form.message")}
                </label>
                <textarea
                  rows={4}
                  placeholder={t("help.form.messagePlaceholder")}
                  className="w-full mt-1 px-3 py-2 border border-[#D6DADD] rounded-md"
                />
              </div>

              <p className="text-[12px] text-[#6B6F72]">
                {t("help.form.disclaimer")}
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#1E3862] text-white px-5 py-3 rounded-md flex items-center gap-2"
              >
                <Image src="/images/send-email.svg" alt="send" width={22} height={22} />
                <span>{t("help.form.submit")}</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}