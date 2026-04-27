"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import FAQAccordion from "./FAQAccordion";
import DescriptionTab from "./DescriptionTab";
import ShowroomCard from "./ShowroomCard";
import TopSellers from "./TopSellers";
import TopDeals from "./TopDeals";
import InfoSection from "./InfoSection";
import ServiceCard from "./ServiceCard";
import CarouselSection from "./CarouselSection";
import ProductCard from "./ProductCard";
import { useAppTranslation } from "@/lib/useAppTranslation";

const MapView = dynamic(() => import("./MapView"), { ssr: false });

type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
};

type Seller = {
  name: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
  distance: string;
  image?: string;
};

type Showroom = {
  name: string;
  image: string;
  deals: number;
  distance: string;
  directionUrl: string;
};

const defaultDescription =
  "<p><strong>Elira Extra Comfort Fluid Foundation SPF 15</strong> is an advanced makeup treatment that combines coverage, hydration, and sun protection in a single formula.</p><p>It contains patented complexes of hyaluronic acids for a smooth, plumping, and radiating action on the face.</p><ul><li>Medium buildable coverage</li><li>SPF 15 sun protection</li><li>Lightweight and silky texture</li><li>Hypoallergenic and non-comedogenic</li></ul>";

const defaultTopDeals = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" },
  { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi2.png", type: "Pharmacy" },
  { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi3.png", type: "Pharmacy" },
  { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi4.png", type: "Pharmacy" }
];

const defaultServices: Service[] = [
  { id: "1", title: "Blood Glucose Test", description: "Simple finger prick for diabetes screening", price: 30, originalPrice: 35, discount: 14, image: "/images/serviceicon.svg" },
  { id: "2", title: "Cholesterol Test", description: "Check your heart health levels", price: 45, originalPrice: 50, discount: 10, image: "/images/serviceicon.svg" },
  { id: "3", title: "Vitamin D Test", description: "Detect vitamin D deficiency", price: 25, originalPrice: 30, discount: 17, image: "/images/serviceicon.svg" },
  { id: "4", title: "Thyroid Test", description: "Monitor thyroid hormone levels", price: 40, originalPrice: 50, discount: 20, image: "/images/serviceicon.svg" }
];

const defaultSellers: Seller[] = [
  { name: "Herba Salus Parapharmacy, Via Gramsci, Piazza Marsilio Ficino..", price: 213.2, oldPrice: 213.2, discountPercent: 25, distance: "500m", image: "/images/1.png" },
  { name: "Farmacia del Corso, Corso Vittorio Emanuele II, Roma.", price: 180, oldPrice: 213.2, discountPercent: 10, distance: "1km", image: "/images/2.png" },
  { name: "L'Erboristeria di Sara, Via Roma, Firenze.", price: 150.5, oldPrice: 213.2, discountPercent: 9, distance: "1.4km", image: "/images/2.png" }
];

const defaultShowroom: Showroom = {
  name: "BENU Pharmacy San Giovanni Valdarno N. 01; Via Napoli",
  image: "/images/2.png",
  deals: 15,
  distance: "1.5 km from your location",
  directionUrl: "https://maps.google.com"
};

export default function ProductTabs({ type }: { type: string }) {
  const { get } = useAppTranslation();
  const normalizedType = type?.trim().toLowerCase();

  const tabLabels = get("productTabs.tabs", {
    deals: "Deals",
    services: "Services",
    info: "Info",
    description: "Description",
    aboutShowroom: "About Showroom",
    faqs: "FAQ's",
    topSellers: "Top Sellers",
    map: "Map"
  });

  const tabs =
    normalizedType === "showroomdetail" || normalizedType === "pharmacydetails"
      ? [tabLabels.deals, tabLabels.services, tabLabels.info]
      : normalizedType === "showroom"
        ? [tabLabels.description, tabLabels.aboutShowroom, tabLabels.faqs]
        : [tabLabels.topSellers, tabLabels.map, tabLabels.description, tabLabels.faqs];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const currentTab = tabs.includes(activeTab) ? activeTab : tabs[0];

  const description = get<string>("productTabs.descriptionHtml", defaultDescription);
  const topDeals = get("productTabs.topDeals", defaultTopDeals);
  const services = get<Service[]>("productTabs.services", defaultServices);
  const sellersData = get<Seller[]>("productTabs.sellers", defaultSellers);
  const showroom = get<Showroom>("productTabs.showroom", defaultShowroom);
  const showroomInfo = get("productTabs.showroomInfo", {
    about:
      "This is a verified Showroom+ pharmacy offering trusted medicines, professional healthcare services, and exclusive in-store deals. Customers can reserve products online and collect them directly from the pharmacy with expert guidance from qualified professionals.",
    loyaltyInfo:
      "Yes, this pharmacy accepts loyalty cards. Eligible offers and discounts can be applied at the time of pickup, subject to pharmacy terms.",
    paymentMethods: [
      { name: "Credit / Debit Cards", icon: "/images/debitcard.svg" },
      { name: "Cash", icon: "/images/cashicon.svg" },
      { name: "Digital Wallets", icon: "/images/ewallet.svg" },
      { name: "Online Payment", icon: "/images/onlinepaymenticon.svg" }
    ],
    policies: [
      "Products must be collected within the reservation period shown at checkout",
      "Pickup is available during pharmacy opening hours",
      "A valid prescription may be required for certain medicines",
      "Uncollected reservations may be cancelled as per pharmacy policy"
    ]
  });
  const pharmacyInfo = get("productTabs.pharmacyInfo", {
    about:
      "This is a verified pharmacy offering essential medicines, professional guidance, and convenient pickup options for online reservations."
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="flex flex-wrap items-center gap-2 py-2 text-[16px] font-medium text-gray-500 font-inter border-t border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-2 transition-colors whitespace-nowrap ${
              currentTab === tab ? "text-blue-600" : "hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-6">
        {currentTab === tabLabels.services && (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              {tabLabels.services} <span className="text-gray-500 text-sm">({services.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-start">
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </>
        )}

        {currentTab === tabLabels.info && type === "showroomdetail" && (
          <InfoSection
            type="showroom"
            about={showroomInfo.about}
            loyaltyInfo={showroomInfo.loyaltyInfo}
            paymentMethods={showroomInfo.paymentMethods}
            policies={showroomInfo.policies}
          />
        )}

        {currentTab === tabLabels.info && type === "pharmacydetails" && (
          <div className="flex flex-col gap-6">
            <InfoSection type="pharmacy" about={pharmacyInfo.about} loyaltyInfo="" paymentMethods={[]} policies={[]} />
            <CarouselSection
              title="productTabs.youMightBeInterestedIn"
              subtitle="productTabs.discoverRelatedItems"
              deals={topDeals}
              CardComponent={ProductCard}
              cardsPerPage={4}
              viewAllLink="/top_deals"
              className="mx-0"
            />
          </div>
        )}

        {currentTab === tabLabels.deals && <TopDeals deals={topDeals} />}
        {currentTab === tabLabels.topSellers && <TopSellers sellers={sellersData} />}
        {currentTab === tabLabels.map && <MapView lat={45.4642} lng={9.19} />}
        {currentTab === tabLabels.description && <DescriptionTab description={description} />}
        {currentTab === tabLabels.aboutShowroom && type?.toLowerCase() === "showroom" && <ShowroomCard showroom={showroom} />}
        {currentTab === tabLabels.faqs && <FAQAccordion />}
      </div>
    </div>
  );
}
