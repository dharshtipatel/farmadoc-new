"use client";

import { Heart, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  id: number; 
  name: string;
  pharmacy: string;
  price: number;
  oldPrice: number;
  discount: string;
  distance: string;
  expiry: string;
  image: string;
  type: string;
  isLiked?: boolean;
};

export default function ProductCard({
  id,
  name,
  pharmacy,
  price,
  oldPrice,
  discount,
  distance,
  expiry,
  image,
  type,
  isLiked = false,
}: ProductCardProps) {
  const router = useRouter();
  const encodeType = (value: string) => {
      return value;
  };
  
  return (
    <div className="bg-white rounded-xl p-4 w-full max-w-xs relative border border-gray-200">

      {/* Heart */}
      <button className="absolute top-3 left-3">
        <Heart 
          size={20} 
          className={isLiked ? "text-[#1192E8] fill-[#1192E8]" : "text-gray-500"} 
        />
      </button>

      {/* Badges */}
      <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
        <div className="text-xs bg-[#E5F6FF] text-[#1192E8] px-2 py-1 rounded">
          Offer ends in 2d
        </div>
        <div className="text-xs font-bold bg-[#EDF2FB] text-[#1E3862] px-2 py-1 rounded">
          Exp: {expiry}
        </div>
      </div>

      {/* Product Image */}
      <div className="flex justify-center my-4">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Distance */}
      <div className="absolute right-3 top-[150px] text-xs font-bold bg-[#EDF2FB] text-[#1E3862] px-2 py-1 rounded">
        {distance}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#000000]">{name}</h3>

      {/* Pharmacy */}
      <div className="flex items-center text-gray-500 text-sm mt-1">
        <MapPin size={14} className="mr-1" />
        {pharmacy}
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <span className="text-lg font-bold text-[#243b5e]">
          €{price.toFixed(2)}
        </span>
        <span className="line-through text-gray-400 text-sm">
          €{oldPrice.toFixed(2)}
        </span>
        <span className="font-bold bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
          {discount}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-4 sm:flex-row sm:gap-2">
        <button
          className="w-full h-10 text-sm px-4 rounded font-inter border border-[#33B1FF] text-[#33B1FF]"
          onClick={() => {
            const encodedType = encodeType(type);
            router.push(`/product?id=${id}&type=${encodedType}`);
          }}
        >
          Details
        </button>

        {type.toLowerCase() !== "pharmacy" && (
          <button
            className="w-full h-10 text-sm px-4 rounded font-inter bg-[#33B1FF] text-white"
            onClick={() => {
              const encodedType = encodeType('showroomdetail');
              router.push(`/productdetails?type=${encodedType}`);
            }}
          >
            View all Deals
          </button>
        )}
      </div>
    </div>
  );
}