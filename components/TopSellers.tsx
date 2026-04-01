"use client";

import React, { useState } from "react";
import Image from "next/image";

const TopSellers = ({ sellers }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [showAll, setShowAll] = useState(false);

  const visibleCount = 5;

  const convertDistance = (d) => {
    if (typeof d === "number") return d;
    if (d.endsWith("km")) return parseFloat(d) * 1000;
    if (d.endsWith("m")) return parseFloat(d);
    return parseFloat(d);
  };

  const sortedSellers = React.useMemo(() => {
    if (!sortConfig.key) return sellers;

    return [...sellers].sort((a, b) => {
      let aValue =
        sortConfig.key === "distance"
          ? convertDistance(a.distance)
          : a[sortConfig.key];

      let bValue =
        sortConfig.key === "distance"
          ? convertDistance(b.distance)
          : b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [sellers, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => (
    <Image src="/images/Sort Icon.svg" alt="sort" width={20} height={20} />
  );

  // visible data
  const displayedSellers = showAll
    ? sortedSellers
    : sortedSellers.slice(0, visibleCount);

  const remaining = sortedSellers.length - visibleCount;

  return (
    <div className="max-w-7xl mx-auto px-4 font-inter">
      <h2 className="text-2xl font-semibold mb-4">Top Sellers</h2>

      <div className="overflow-x-auto rounded-md">
        <table className="min-w-[700px] w-full border border-gray-200">
          <thead className="bg-[#F4FAFF] text-[#6B6F72] text-[16px]">
            <tr>
              <th className="text-left py-3 px-4 font-medium">Sellers</th>

              <th
                className="py-3 px-4 font-medium cursor-pointer"
                onClick={() => requestSort("price")}
              >
                <div className="flex justify-between">
                  <span>Price/Discount</span>
                  {getSortIndicator("price")}
                </div>
              </th>

              <th
                className="py-3 px-4 font-medium cursor-pointer"
                onClick={() => requestSort("distance")}
              >
                <div className="flex justify-between">
                  <span>Distance</span>
                  {getSortIndicator("distance")}
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {displayedSellers.map((seller, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F4FAFF]"}
              >
                {/* Seller */}
                <td className="py-3 px-4 max-w-[400px]">
                  <div className="flex items-start gap-2">
                    <Image
                      src={seller.image || "/images/default_store.png"}
                      alt={seller.name}
                      width={60}
                      height={40}
                      className="object-cover flex-shrink-0"
                    />

                    <span className="break-words">
                      {seller.name}
                    </span>
                  </div>
                </td>

                {/* Price */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="font-bold text-[#1E3862]">
                    €{seller.price.toFixed(2)}
                  </span>
                  <span className="ml-2 text-xs line-through text-gray-400">
                    €{seller.oldPrice}
                  </span>
                  <span className="ml-2 px-2 py-0.5 text-xs font-semibold rounded bg-[#FBE7E7] text-[#D62828]">
                    {seller.discountPercent}% OFF
                  </span>
                </td>

                {/* Distance */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex justify-between">
                    <span className="text-[#1E3862] font-medium">
                      {seller.distance}
                    </span>

                    <a
                      href={seller.directionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#1192E8] text-sm hover:underline"
                    >
                      <Image
                        src="/images/direction.svg"
                        alt="direction"
                        width={14}
                        height={14}
                      />
                      Direction
                    </a>
                  </div>
                </td>
              </tr>
            ))}

            {/* View More Row */}
            {!showAll && remaining > 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-4">
                  <button
                    onClick={() => setShowAll(true)}
                    className="text-[#1192E8] font-medium hover:underline"
                  >
                    +{remaining} more
                  </button>
                </td>
              </tr>
            )}

            {/* View Less */}
            {showAll && sortedSellers.length > visibleCount && (
              <tr>
                <td colSpan={3} className="px-4 py-4">
                  <button
                    onClick={() => setShowAll(false)}
                    className="text-[#1192E8] font-medium hover:underline"
                  >
                    Show Less
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellers;