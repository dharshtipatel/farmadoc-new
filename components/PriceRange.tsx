"use client";

type PriceRangeProps = {
  minPrice: number;
  maxPrice: number;
  onChange: (min: number, max: number) => void;
};

export default function PriceRange({
  minPrice,
  maxPrice,
  onChange,
}: PriceRangeProps) {
  const minLimit = 100;
  const maxLimit = 400;

  const minPercent = ((minPrice - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxPrice - minLimit) / (maxLimit - minLimit)) * 100;

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
            onChange(Math.min(Number(e.target.value), maxPrice - 1), maxPrice)
          }
          className="price-slider absolute w-full top-[-5px] appearance-none bg-transparent pointer-events-none"
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxPrice}
          onChange={(e) =>
            onChange(minPrice, Math.max(Number(e.target.value), minPrice + 1))
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