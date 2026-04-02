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

const MapView = dynamic(() => import("./MapView"), { ssr: false });

const description = `
  <p><strong>Elira Extra Comfort Fluid Foundation SPF 15</strong> is an advanced makeup treatment that combines coverage, hydration, and sun protection in a single formula.</p>
  <p>It contains patented complexes of hyaluronic acids for a smooth, plumping, and radiating action on the face.</p>
  <ul>
    <li>Medium buildable coverage</li>
    <li>SPF 15 sun protection</li>
    <li>Lightweight and silky texture</li>
    <li>Hypoallergenic and non-comedogenic</li>
  </ul>
`;
const topDeals = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }
];

const services = [
  {
    id: "1",
    title: "Blood Glucose Test",
    description: "Simple finger prick for diabetes screening",
    price: 30,
    originalPrice: 35,
    discount: 14,
    image: "/images/serviceicon.svg",
  },
  {
    id: "2",
    title: "Cholesterol Test",
    description: "Check your heart health levels",
    price: 45,
    originalPrice: 50,
    discount: 10,
    image: "/images/serviceicon.svg",
  },
  {
    id: "3",
    title: "Vitamin D Test",
    description: "Detect vitamin D deficiency",
    price: 25,
    originalPrice: 30,
    discount: 17,
    image: "/images/serviceicon.svg",
  },
  {
    id: "4",
    title: "Thyroid Test",
    description: "Monitor thyroid hormone levels",
    price: 40,
    originalPrice: 50,
    discount: 20,
    image: "/images/serviceicon.svg",
  },
  {
    id: "5",
    title: "Liver Function Test",
    description: "Assess liver health and enzymes",
    price: 55,
    originalPrice: 65,
    discount: 15,
    image: "/images/serviceicon.svg",
  },
  {
    id: "6",
    title: "Kidney Function Test",
    description: "Evaluate kidney performance",
    price: 60,
    originalPrice: 70,
    discount: 14,
    image: "/images/serviceicon.svg",
  },
  {
    id: "7",
    title: "CBC Test",
    description: "Complete blood count analysis",
    price: 35,
    originalPrice: 40,
    discount: 12,
    image: "/images/serviceicon.svg",
  },
  {
    id: "8",
    title: "HbA1c Test",
    description: "Average blood sugar over 3 months",
    price: 50,
    originalPrice: 60,
    discount: 16,
    image: "/images/serviceicon.svg",
  },
];
const sellersData = [
  {
    name: "Herba Salus Parapharmacy, Via Gramsci,Piazza Marsilio Ficino..",
    price: 213.2,
    oldPrice: 213.2,
    discountPercent: 25,
    distance: "500m",
    image: "/images/1.png"
  },
  {
    name: "Farmacia del Corso, Corso Vittorio Emanuele II, Roma.",
    price: 180,
    oldPrice: 213.2,
    discountPercent: 10,
    distance: "1km",
    image: "/images/2.png"
  },
  {
    name: "L’Erboristeria di Sara, Via Roma, Firenze.",
    price: 150.5,
    oldPrice: 213.2,
    discountPercent: 9,
    distance: "1.4km",
    image: "/images/2.png"
  },
  {
    name: "L’Erboristeria di Sara, Via Roma, Firenze.",
    price: 150.5,
    oldPrice: 213.2,
    discountPercent: 9,
    distance: "1.4km",
    image: "/images/2.png"
  },
  {
    name: "L’Erboristeria di Sara, Via Roma, Firenze.",
    price: 150.5,
    oldPrice: 213.2,
    discountPercent: 9,
    distance: "1.4km",
    image: "/images/2.png"
  },
  {
    name: "L’Erboristeria di Sara, Via Roma, Firenze.",
    price: 150.5,
    oldPrice: 213.2,
    discountPercent: 9,
    distance: "1.4km",
    image: "/images/2.png"
  },
  {
    name: "L’Erboristeria di Sara, Via Roma, Firenze.",
    price: 150.5,
    oldPrice: 213.2,
    discountPercent: 9,
    distance: "1.4km",
    image: "/images/2.png"
  },
];

const showroom = {
  name: "BENU Pharmacy San Giovanni Valdarno N. 01; Via Napoli",
  image: "/images/2.png",
  deals: 15,
  distance: "1.5 km from your location",
  directionUrl: "https://maps.google.com",
};

export default function ProductTabs({ type }: { type: string }) {
  // Dynamically choose tabs based on type
  const tabs =
  type?.toLowerCase() === "showroomdetail" || type?.toLowerCase() === "pharmacydetails"
    ? ["Deals", "Services", "Info"]
    : type?.toLowerCase() === "showroom"
      ? ["Description", "About Showroom", "FAQ's"]
      : ["Top Sellers", "Map", "Description", "FAQ's"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="max-w-7xl mx-auto py-5">
      {/* Tabs */}
      <div className="flex items-center py-4 text-[16px] font-medium text-gray-500 font-inter border-t border-b border-gray-200">
        {tabs.map((tab, index) => (
          <div key={tab} className="flex items-center">
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-8 relative transition-colors ${
                activeTab === tab ? "text-blue-600" : "hover:text-gray-700"
              }`}
            >
              {tab}
            </button>

            {index !== tabs.length - 1 && (
              <div className="h-[24px] w-px bg-gray-300 mx-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "Services" && (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Services <span className="text-gray-500 text-sm">({services.length}) </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  originalPrice={service.originalPrice}
                  discount={service.discount}
                  image={service.image}
                />
              ))}
            </div>
          </>
        )}
        {activeTab === "Info" && type === "showroomdetail" && (
          <div className="p-2">
          <InfoSection
            type="showroom"
            about="This is a verified Showroom+ pharmacy offering trusted medicines, professional healthcare services, and exclusive in-store deals. Customers can reserve products online and collect them directly from the pharmacy with expert guidance from qualified professionals."
            loyaltyInfo="Yes, this pharmacy accepts loyalty cards. Eligible offers and discounts can be applied at the time of pickup, subject to pharmacy terms."
            paymentMethods={[
              { name: "Credit / Debit Cards", icon: "/images/debitcard.svg" },
              { name: "Cash", icon: "/images/cashicon.svg" },
              { name: "Digital Wallets", icon: "/images/ewallet.svg" },
              { name: "Online Payment", icon: "/images/onlinepaymenticon.svg" },
            ]}
            policies={[
              "Products must be collected within the reservation period shown at checkout",
              "Pickup is available during pharmacy opening hours",
              "A valid prescription may be required for certain medicines",
              "Uncollected reservations may be cancelled as per pharmacy policy",
              "Orders must be collected within the timeframe indicated during checkout",
              "Available for pickup during regular hours",
              "A prescription may be needed to collect certain items",
              "Check policy regarding cancellation of reservations",
            ]}
          />
        </div>
        )}
        {activeTab === "Info" && type === "pharmacydetails" && (
          <div className="">
          <InfoSection
            type="pharmacy"
            about="This is a verified pharmacy offering essential medicines, professional guidance, and convenient pickup options for online reservations."
            loyaltyInfo=""
            paymentMethods={[]}
            policies={[]}
          />
          <CarouselSection
            title="You Might be interested in"
            subtitle="Discover items related to your search and similar products."
            deals={topDeals}
            CardComponent={ProductCard}
            cardsPerPage={4}
            viewAllLink="/top_deals"
            className="mx-0"
          />
          </div>
        )}
        {activeTab === "Deals" && (
          <TopDeals deals={topDeals} />
        )}
        {activeTab === "Top Sellers" && (
          <TopSellers sellers={sellersData} />
        )}
        {activeTab === "Map" && (
          <MapView lat={45.4642} lng={9.1900} />
        )}
        {activeTab === "Description" && (
          <DescriptionTab description={description} />
        )}
        {activeTab === "About Showroom" &&
          type?.toLowerCase() === "showroom" && (
            <ShowroomCard showroom={showroom} />
          )}
        {activeTab === "FAQ's" && <FAQAccordion />}
      </div>
    </div>
  );
}