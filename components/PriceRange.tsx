"use client";
import { useState, useEffect } from "react";

type PriceRangeProps = {
  onPriceChange?: (label: string) => void;
};

export default function PriceRange({ onPriceChange }: PriceRangeProps) {
  const minLimit = 100;
  const maxLimit = 400;

  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(400);

  const minPercent = ((minPrice - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxPrice - minLimit) / (maxLimit - minLimit)) * 100;

  // notify parent when price changes
  useEffect(() => {
  onPriceChange?.(`Price : €${minPrice} - €${maxPrice}`);
}, [minPrice, maxPrice]);

  return (
    <div className="flex flex-col gap-3 mt-4">

      <div className="relative h-[6px] bg-gray-200 rounded-md">

        <div
          className="absolute h-[6px] bg-[#1E3862] rounded-md"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minPrice}
          onChange={(e) =>
            setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))
          }
          className="price-slider absolute w-full top-[-5px] appearance-none bg-transparent pointer-events-none"
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))
          }
          className="price-slider absolute w-full top-[-5px] appearance-none bg-transparent pointer-events-none"
        />
      </div>

      <div className="flex justify-between text-sm text-black">
        <span>€ {minPrice}</span>
        <span>€ {maxPrice}</span>
      </div>
    </div>
  );
}