"use client";
import { useState } from "react";
import PriceRange from "./PriceRange";
import CheckboxFilter from "./CheckboxFilter";
import RangeFilter from "./RangeFilter";

type FilterConfig = {
  title: string;
  type: "checkbox" | "range" | "price";
  options?: { label: string; value: string }[];
};

type FiltersProps = {
  filter_title?: string;
};

function FilterSection({ title, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-gray-800"
      >
        <h6 className="font-bold">{title}</h6>
        <span className="text-xl w-6 h-6 flex items-center justify-center border border-gray-400 rounded">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="mt-2 text-gray-600 text-sm">{children}</div>
      )}
    </div>
  );
}

export default function Filters({ filter_title }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [distance, setDistance] = useState(2);

  const isPharmacyView = filter_title
    ?.toLowerCase()
    .includes("pharmacies near you");

  const productFilters: FilterConfig[] = [
    {
      title: "Product Availability",
      type: "checkbox",
      options: [
        { label: "Book now & collect", value: "book_collect" },
        { label: "Pay & Collect in store", value: "pay_collect" },
      ],
    },
    { title: "Distance Range", type: "range" },
    { title: "Price Range", type: "price" },
    {
      title: "Category & Type",
      type: "checkbox",
      options: [
        { label: "Vitamins", value: "vitamins" },
        { label: "Pain Relief", value: "pain_relief" },
        { label: "Cold & Flu", value: "cold_flu" },
      ],
    },
    {
      title: "Discounts & Promotions",
      type: "checkbox",
      options: [
        { label: "15% Discounted", value: "15dis" },
        { label: "20% Discounted", value: "20dis" },
      ],
    },
    {
      title: "Brand",
      type: "checkbox",
      options: [
        { label: "Brand A", value: "brand_a" },
        { label: "Brand B", value: "brand_b" },
      ],
    },
  ];

  const pharmacyFilters: FilterConfig[] = [
    {
      title: "Pharmacy Type",
      type: "checkbox",
      options: [
        { label: "Showroom+ (Premium)", value: "showroom" },
        { label: "Parapharmacy", value: "para" },
        { label: "Pharmacy", value: "pharmacy" },
      ],
    },
    { title: "Distance Range", type: "range" },
    {
      title: "Discounts & Promotions",
      type: "checkbox",
      options: [
        { label: "15% Discounted", value: "15dis" },
        { label: "20% Discounted", value: "20dis" },
      ],
    },
    {
      title: "Services",
      type: "checkbox",
      options: [
        { label: "ECG", value: "vitamins" },
        { label: "Blood Pressure Check", value: "pain_relief" },
        { label: "Vaccinations", value: "cold_flu" },
      ],
    },
    {
      title: "Pharmacies",
      type: "checkbox",
      options: [
        { label: "Farmacia Centrale (Roma)", value: "vitamins" },
        { label: "Farmacia del Cambio (Firenze)", value: "pain_relief" },
        { label: "Farmacia Internazionale (Milano)", value: "cold_flu" },
      ],
    },
  ];

  const filterConfig = isPharmacyView
    ? pharmacyFilters
    : productFilters;

  const handleCheckboxChange = (label: string, checked: boolean) => {
    setSelectedFilters((prev) =>
      checked ? [...prev, label] : prev.filter((f) => f !== label)
    );
  };

  const handleSingleReplace = (prefix: string, label: string) => {
    setSelectedFilters((prev) => {
      const filtered = prev.filter((f) => !f.startsWith(prefix));
      return [...filtered, label];
    });
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter));
  };

  const clearAll = () => setSelectedFilters([]);

  return (
    <aside className="px-6 flex flex-col">
      <div className="w-[273px] font-medium text-black">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg">Filters</h3>
          {selectedFilters.length > 0 && (
            <button onClick={clearAll} className="text-red-500 text-sm">
              Clear all
            </button>
          )}
        </div>

        {/* Selected Filters */}
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedFilters.map((filter) => (
            <div
              key={filter}
              className="flex items-center gap-2 bg-[#DCE8F2] text-[#1E3862] px-3 py-2 rounded-md text-sm"
            >
              {filter}
              <button onClick={() => removeFilter(filter)}>✕</button>
            </div>
          ))}
        </div>

        {filterConfig.map((section) => (
          <FilterSection key={section.title} title={section.title}>
            
            {section.type === "checkbox" && section.options && (
              <CheckboxFilter
                options={section.options}
                selected={selectedFilters}
                onChange={handleCheckboxChange}
              />
            )}

            {section.type === "range" && (
              <RangeFilter
                title="Distance"
                min={1}
                max={10}
                value={distance}
                onChange={(label) =>
                  handleSingleReplace("Distance", label)
                }
              />
            )}

            {section.type === "price" && (
              <PriceRange
                onPriceChange={(label) =>
                  handleSingleReplace("Price", label)
                }
              />
            )}
          </FilterSection>
        ))}
      </div>
    </aside>
  );
}