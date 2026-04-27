"use client";

import { useState, useEffect } from "react";
import { useAppTranslation } from "@/lib/useAppTranslation";

type RangeFilterProps = {
  title: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

export default function RangeFilter({
  title,
  min,
  max,
  value,
  onChange,
}: RangeFilterProps) {
  const { t } = useAppTranslation();
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    onChange(localValue);
  }, [localValue, onChange]);

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
        {localValue} {t("rangeFilter.km")}
      </div>
    </div>
  );
}
