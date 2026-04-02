"use client";

import CarouselSection from "./CarouselSection";
import ProductCard from "./ProductCard";
import Image from "next/image";

const topDeals = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" },
  { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" },
  { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" },
  { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }
];

type Showroom = {
  name: string;
  image: string;
  deals: number;
  distance: string;
  directionUrl: string;
};

export default function ShowroomCard({ showroom }: { showroom: Showroom }) {
  if (!showroom) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4">

      <h2 className="text-2xl font-semibold">About Showroom</h2>

      {/* Responsive Showroom Card */}
      <div className="flex flex-col md:flex-row gap-4 bg-white">

        {/* Image */}
        <div className="w-full md:w-72 flex-shrink-0">
          <Image
            src={showroom.image}
            alt={showroom.name}
            width={280}
            height={160}
            className="rounded-md w-full h-44 md:h-40 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-2">

          {/* Title + Direction */}
          <div className="flex justify-between items-start gap-2 flex-wrap">
            <h4 className="text-base font-bold text-[#1E3862]">{showroom.name}</h4>

            <a
              href={showroom.directionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#1192E8] text-sm hover:underline"
            >
              <Image src="/images/direction.svg" alt="direction" width={14} height={14} />
              Direction
            </a>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <Image src="/images/deals.svg" alt="deals" width={20} height={20} />
              <span>{showroom.deals} Deals</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/images/direction_icon.svg" alt="distance" width={20} height={20} />
              <span>{showroom.distance}</span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-3">
            <button className="text-sm w-full sm:w-40 h-10 border border-gray-300 rounded-md hover:bg-gray-100 transition text-[#1E3862]">
              View all Offers
            </button>
          </div>

        </div>
      </div>

      {/* Carousel Section */}
      <CarouselSection
        title="Available deals at Showroom"
        deals={topDeals}
        CardComponent={ProductCard}
        cardsPerPage={4}
        viewAllLink="/top_deals"
      />
    </div>
  );
}