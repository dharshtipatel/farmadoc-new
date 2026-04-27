"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PharmacyBannerCard from "@/components/PharmacyBannerCard";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductTabs from "@/components/ProductTabs";
import Footer from "@/components/Footer";
import { useAppTranslation } from "@/lib/useAppTranslation";

function ProductDetailsContent() {
  const { get } = useAppTranslation();
  const searchParams = useSearchParams();
  const decodedType = searchParams.get("type") || "";

  const banner = get("productDetailsPage.banner", {
    name: "Dell'Orso Pharmacy",
    city: "Milan",
    address: "Bear Street, 1, Milan, ME, 20121",
    distance: "1.5 Km",
    phone: "+391234567890",
    operatingHours: {
      Thu: "10:00 AM - 02:00 PM",
      Fri: "09:00 AM - 01:00 PM",
      Sat: "Closed",
      Sun: "Closed",
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PharmacyBannerCard
        name={banner.name}
        city={banner.city}
        address={banner.address}
        distance={banner.distance}
        phone={banner.phone}
        image="/images/3.png"
        starBadge="/images/star_badge.png"
        operatingHours={banner.operatingHours}
      />

      <div className="mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductTabs type={decodedType} />
        </Suspense>
      </div>
    </div>
  );
}

export default function ProductDetailsPage() {
  const { t } = useAppTranslation();

  return (
    <div>
      <Header />
      <div className="pt-[80px] sm:pt-[135px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumb currentPage={t("productDetailsPage.breadcrumb")} />
      </div>

      <Suspense fallback={<div className="flex justify-center p-20">{t("productDetailsPage.loadingProductDetails")}</div>}>
        <ProductDetailsContent />
      </Suspense>

      <Footer />
    </div>
  );
}
