"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PharmacyBannerCard from "@/components/PharmacyBannerCard";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductTabs from "@/components/ProductTabs";
import Footer from "@/components/Footer";

function ProductDetailsContent() {
  const searchParams = useSearchParams();
  const [decodedType, setDecodedType] = useState("");

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setDecodedType(typeParam);
    }
  }, [searchParams]);

  return (
    <>
      <PharmacyBannerCard
        name="Dell'Orso Pharmacy"
        city="Milan"
        address="Bear Street, 1, Milan, ME, 20121"
        distance="1.5 Km"
        image="/images/3.png"
        starBadge="/images/star_badge.png"
        operatingHours={{
          Thu: "10:00 AM - 02:00 PM",
          Fri: "09:00 AM - 01:00 PM",
          Sat: "Closed",
          Sun: "Closed",
        }}
      />
      <Suspense fallback={<div>Loading product tabs...</div>}>
        <ProductTabs type={decodedType} />
      </Suspense>
    </>
  );
}

export default function ProductDetailsPage() {
  return (
    <div>
      <Header />
      <div className="pt-[135px]">
        <Breadcrumb currentPage={"Showroom & Pharmacies"} />
      </div>

      <Suspense fallback={<div className="flex justify-center p-20">Loading product details...</div>}>
        <ProductDetailsContent />
      </Suspense>

      <Footer />
    </div>
  );
}