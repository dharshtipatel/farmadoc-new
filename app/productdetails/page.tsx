"use client";
import PharmacyBannerCard from "@/components/PharmacyBannerCard";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { useSearchParams } from "next/navigation";
import ProductTabs from "../../components/ProductTabs";
import Footer from "@/components/Footer";

export default function ProductDetailsPage() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const decodedType = typeParam ? atob(typeParam) : '';
  return (
    <div>
          <Header />
          <div className="pt-[135px]">
            <Breadcrumb currentPage={'Showroom & Pharmacies'} />
          </div>

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

          <ProductTabs type={decodedType} />
          <Footer />
      </div>
  );
}