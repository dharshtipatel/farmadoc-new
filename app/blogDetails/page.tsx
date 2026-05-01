"use client";

import { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

function BlogDetailsContent() {
  const { t } = useAppTranslation();
  const searchParams = useSearchParams();

  const label =
    searchParams.get("label") ||
    t("blogDetailsPage.defaultLabel");

  const date =
    searchParams.get("date") ||
    t("blogDetailsPage.defaultDate");

  const category =
    searchParams.get("category") ||
    t("blogDetailsPage.defaultCategory");

  const socials = [
    { icon: "/images/linkedin_icon.svg", alt: "LinkedIn" },
    { icon: "/images/facebook_icon.svg", alt: "Facebook" },
    { icon: "/images/insta_icon.svg", alt: "Instagram" },
    { icon: "/images/twitter_icon.svg", alt: "Twitter" },
  ];

  return (
    <div>
      <Header showSearch={false} />

      <div className="pt-[80px] sm:pt-[135px]">
        <Breadcrumb currentPage={t("blogDetailsPage.breadcrumb")} />
      </div>

      <section className="mx-auto max-w-7xl px-6">
        <div>
          <h1 className="text-[32px] font-medium text-[#1E3862] font-helvetica">
            {label}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-[14px] font-medium text-[#808080] font-inter">
            <span>{date}</span>
            <span className="text-[#D6DADD]">|</span>
            <span>{category}</span>
          </div>
        </div>

        <div className="mt-10">
          {t("blogDetailsPage.contentPlaceholder")}
        </div>

        <div className="mt-10">
          <div className="border-t border-gray-300 mb-4" />

          <div className="flex items-center justify-between">
            <span className="font-semibold text-[16px]">
              {t("blogDetailsPage.shareArticle")}
            </span>

            <div className="flex items-center gap-4 mb-5">
              {socials.map((social, i) => (
                <Image
                  key={i}
                  src={social.icon}
                  alt={social.alt}
                  width={32}
                  height={32}
                  className="cursor-pointer hover:opacity-80 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function BlogDetails() {
  const { t } = useAppTranslation();

  return (
    <Suspense
      fallback={
        <p className="text-center p-10">
          {t("blogDetailsPage.loading")}
        </p>
      }
    >
      <BlogDetailsContent />
    </Suspense>
  );
}
