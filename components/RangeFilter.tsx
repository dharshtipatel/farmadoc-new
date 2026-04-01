"use client";
import { useState, useEffect } from "react";

type RangeFilterProps = {
  title: string;
  min: number;
  max: number;
  value: number;
  onChange: (label: string) => void; // pass label to parent, like PriceRange
};

export default function RangeFilter({ title, min, max, value, onChange }: RangeFilterProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    // Whenever localValue changes, call onChange with label
    onChange(`${title}: ${localValue}KM`);
  }, [localValue]);

  const percentage = ((localValue - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-3 mt-4 font-inter">
      <span className="text-gray-700 font-medium">{title}</span>

      <input
        type="range"
        min={min}
        max={max}
        value={localValue}
        onChange={(e) => setLocalValue(Number(e.target.value))}
        className="w-full h-[6px] rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #1E3862 ${percentage}%, #E5E7EB ${percentage}%)`,
        }}
      />

      <div className="text-sm text-gray-700 text-right">
        {localValue} KM
      </div>
    </div>
  );
}