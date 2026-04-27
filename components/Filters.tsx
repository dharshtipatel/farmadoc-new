"use client";

import { useCallback, useMemo, useState } from "react";
import PriceRange from "./PriceRange";
import CheckboxFilter from "./CheckboxFilter";
import RangeFilter from "./RangeFilter";
import { useAppTranslation } from "@/lib/useAppTranslation";

type FilterConfig = {
  title: string;
  type: "checkbox" | "range" | "price";
  options?: { label: string; value: string }[];
};

type FiltersProps = {
  filter_title?: string;
};

type FilterItem = {
  type: string;
  label: string;
};

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-gray-800"
      >
        <h6 className="font-bold">{title}</h6>
        <span className="text-xl w-6 h-6 flex items-center justify-center border border-gray-400 rounded">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      {isOpen && <div className="mt-2 text-gray-600 text-sm">{children}</div>}
    </div>
  );
}

export default function Filters({ filter_title }: FiltersProps) {
  const { get, t } = useAppTranslation();

  const [selectedFilters, setSelectedFilters] = useState<FilterItem[]>([]);

  // ✅ NEW: controlled price state
  const [priceRange, setPriceRange] = useState({ min: 100, max: 400 });

  const distance = 2;

  const isPharmacyView =
    filter_title?.toLowerCase().includes("pharm") ||
    filter_title?.toLowerCase().includes("farmac");

  const productFilters = get<FilterConfig[]>("filters.productFilters", []);
  const pharmacyFilters = get<FilterConfig[]>("filters.pharmacyFilters", []);
  const filterConfig = isPharmacyView ? pharmacyFilters : productFilters;

  const handleCheckboxChange = useCallback(
    (label: string, checked: boolean) => {
      setSelectedFilters((prev) =>
        checked
          ? [...prev.filter((item) => item.label !== label), { type: label, label }]
          : prev.filter((item) => item.label !== label)
      );
    },
    []
  );

  const handleSingleReplace = useCallback((type: string, label: string) => {
    setSelectedFilters((prev) => {
      const existing = prev.find((item) => item.type === type);
      if (existing?.label === label) return prev;

      const filtered = prev.filter((item) => item.type !== type);
      return [...filtered, { type, label }];
    });
  }, []);

  const removeFilter = useCallback((type: string) => {
    setSelectedFilters((prev) => prev.filter((item) => item.type !== type));
  }, []);

  // ✅ UPDATED clearAll
  const clearAll = useCallback(() => {
    setSelectedFilters([]);
    setPriceRange({ min: 100, max: 400 });
  }, []);

  const distanceLabel = t("filters.distance");
  const priceLabel = t("filters.price");
  const kmLabel = t("rangeFilter.km");

  const selectedCheckboxLabels = useMemo(
    () =>
      selectedFilters
        .filter((item) => item.type === item.label)
        .map((item) => item.label),
    [selectedFilters]
  );

  const handleDistanceChange = useCallback(
    (value: number) => {
      handleSingleReplace("distance", `${distanceLabel}: ${value} ${kmLabel}`);
    },
    [distanceLabel, handleSingleReplace, kmLabel]
  );

  // ✅ UPDATED price handler
  const handlePriceChange = useCallback(
    (min: number, max: number) => {
      setPriceRange({ min, max });
      handleSingleReplace(
        priceLabel,
        `${priceLabel} : EUR${min} - EUR${max}`
      );
    },
    [handleSingleReplace, priceLabel]
  );

  return (
    <aside className="px-6 flex flex-col">
      <div className="w-full max-w-[273px] font-medium text-black">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg">{t("filters.title")}</h3>
          {selectedFilters.length > 0 && (
            <button onClick={clearAll} className="text-red-500 text-sm">
              {t("filters.clearAll")}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {selectedFilters.map((filter) => (
            <div
              key={filter.type}
              className="flex items-center gap-2 bg-[#DCE8F2] text-[#1E3862] px-3 py-2 rounded-md text-sm"
            >
              {filter.label}
              <button onClick={() => removeFilter(filter.type)}>x</button>
            </div>
          ))}
        </div>

        {filterConfig.map((section) => (
          <FilterSection key={section.title} title={section.title}>
            {section.type === "checkbox" && section.options && (
              <CheckboxFilter
                options={section.options}
                selected={selectedCheckboxLabels}
                onChange={handleCheckboxChange}
              />
            )}

            {section.type === "range" && (
              <RangeFilter
                title={distanceLabel}
                min={1}
                max={10}
                value={distance}
                onChange={handleDistanceChange}
              />
            )}

            {/* ✅ FIXED PRICE RANGE */}
            {section.type === "price" && (
              <PriceRange
                minPrice={priceRange.min}
                maxPrice={priceRange.max}
                onChange={handlePriceChange}
              />
            )}
          </FilterSection>
        ))}
      </div>
    </aside>
  );
}