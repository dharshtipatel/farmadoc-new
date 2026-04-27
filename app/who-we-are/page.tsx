"use client";

import Header from "../../components/Header";
import StatsSection from "../../components/StatsSection";
import CarouselSection from "@/components/CarouselSection";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import FarmaDocCTA from "@/components/FarmaDocCTA";
import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function WhoWeAre() {
  const { t } = useAppTranslation();

  const comments = [
    {
      id: 1,
      title: "Huge Savings Without Compromise",
      quote:
        "I saved almost €40 on supplements that were still months away from expiry. Pickup was smooth and the pharmacy staff were very friendly.",
      author: "Laura M., Milano",
      rating: 5,
      quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
      id: 2,
      title: "Quick & Convenient",
      quote:
        "The online reservation and pickup system is so easy! I got my medicines without waiting in long queues.",
      author: "Marco T., Rome",
      rating: 4,
      quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
      id: 3,
      title: "Trusted & Safe",
      quote:
        "I was initially skeptical about near-expiry medicines, but FarmaDoc ensures everything is safe and verified by licensed pharmacies.",
      author: "Elena R., Turin",
      rating: 5,
      quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
      id: 4,
      title: "Fantastic Customer Support",
      quote:
        "Their customer service answered all my questions promptly. I feel confident ordering from FarmaDoc again.",
      author: "Giovanni L., Florence",
      rating: 5,
      quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
      id: 5,
      title: "Saves Time and Money",
      quote:
        "I discovered great deals on supplements and medications near me. It really helps reduce waste and saves me money.",
      author: "Sara P., Naples",
      rating: 4,
      quotationIconSrc: "/images/quotation-mark.svg",
    },
  ];

  return (
    <div>
      <Header showSearch={false} />
      <div className="pt-[80px]" />

      {/* HERO SECTION */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 items-start mt-4">
            <div>
              <h1 className="text-[60px] font-medium text-[#1E3862] font-helvetica leading-tight">
                {t("whoWeAre.heroTitle")}
              </h1>
            </div>

            <div className="text-[#6B6F72] text-[16px] font-medium font-inter leading-relaxed space-y-4">
              <p>{t("whoWeAre.heroParagraph1")}</p>
              <p>{t("whoWeAre.heroParagraph2")}</p>
            </div>
          </div>

          {/* STATIC IMAGE (UNCHANGED) */}
          <div className="mt-10">
            <Image
              src="/images/who-we-are-banner.jpg"
              alt="Banner"
              width={1280}
              height={500}
              priority
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">

            {/* STATIC IMAGE (UNCHANGED) */}
            <span className="flex items-center gap-2 bg-[#FFF8E9] text-[14px] font-semibold font-inter px-4 py-2 rounded-full">
              <Image
                src="/images/yellow-search.svg"
                alt="search"
                width={22}
                height={22}
              />
              {t("whoWeAre.badgeFounded")}
            </span>

            {/* STATIC IMAGE (UNCHANGED) */}
            <span className="flex items-center gap-2 bg-[#F0F9FF] text-[14px] font-semibold font-inter px-4 py-2 rounded-full">
              <Image
                src="/images/blue-search.svg"
                alt="search"
                width={22}
                height={22}
              />
              {t("whoWeAre.badgeLocation")}
            </span>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-[32px] font-medium text-[#1E3862] mb-8">
            {t("whoWeAre.sectionTitle")}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-[#D6DADD]">

            {/* CARD 1 */}
            <div className="p-6 border-r border-[#D6DADD]">
              <div className="w-8 h-8 mb-4">
                <Image
                  src="/images/patient-first.svg"
                  alt="Patient First"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-semibold mb-2 text-[20px] font-inter">
                {t("whoWeAre.card1Title")}
              </h3>
              <p className="text-[16px] font-inter text-[#6B6F72]">
                {t("whoWeAre.card1Desc")}
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 border-r border-[#D6DADD]">
              <div className="w-8 h-8 mb-4">
                <Image
                  src="/images/sustainability.svg"
                  alt="Sustainability"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-semibold mb-2 text-[20px] font-inter">
                {t("whoWeAre.card2Title")}
              </h3>
              <p className="text-[16px] font-inter text-[#6B6F72]">
                {t("whoWeAre.card2Desc")}
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 border-r border-[#D6DADD]">
              <div className="w-8 h-8 mb-4">
                <Image
                  src="/images/truth-safety.svg"
                  alt="Trust & Safety"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-semibold mb-2 text-[20px] font-inter">
                {t("whoWeAre.card3Title")}
              </h3>
              <p className="text-[16px] font-inter text-[#6B6F72]">
                {t("whoWeAre.card3Desc")}
              </p>
            </div>

            {/* CARD 4 */}
            <div className="p-6">
              <div className="w-8 h-8 mb-4">
                <Image
                  src="/images/community-impact.svg"
                  alt="Community Impact"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="font-semibold mb-2 text-[20px] font-inter">
                {t("whoWeAre.card4Title")}
              </h3>
              <p className="text-[16px] font-inter text-[#6B6F72]">
                {t("whoWeAre.card4Desc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-[#1E3862] mb-3 sm:mb-4 font-helvetica leading-snug">
          {t("whoWeAre.bottomTitle")}
        </h1>

        <p className="text-sm sm:text-base text-[#6B6F72] font-medium font-inter max-w-full md:max-w-[738px] leading-relaxed">
          {t("whoWeAre.bottomDescription")}
        </p>

        {/* STATIC IMAGE (UNCHANGED) */}
        <div className="mt-10 mb-8">
          <Image
            src="/images/who-we-are-banner1.jpg"
            alt="Banner"
            width={1280}
            height={500}
            priority
            className="w-full h-auto rounded-lg"
          />
        </div>

        <StatsSection />
      </div>

      {/* TESTIMONIALS */}
      <CarouselSection
        title="What Our Customers Say"
        subtitle="Real stories from people who saved money, reduced waste, and discovered trusted members through FarmaDoc."
        deals={comments}
        CardComponent={TestimonialCard}
        cardsPerPage={4}
      />

      {/* CTA */}
      <FarmaDocCTA
        title={t("whoWeAre.ctaTitle")}
        description={t("whoWeAre.ctaDescription")}
      />

      <Footer />
    </div>
  );
}