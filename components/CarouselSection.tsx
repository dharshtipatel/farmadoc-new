"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type CarouselSectionProps<T> = {
  title: string;
  subtitle?: string;
  deals: T[];
  CardComponent: React.ComponentType<T>;
  cardsPerPage?: number;
  viewAllLink?: string; 
  className?: string;
};

export default function CarouselSection<T>({
  title,
  subtitle,
  deals,
  CardComponent,
  cardsPerPage = 4,
  viewAllLink = "/products",
  className = "",
}: CarouselSectionProps<T>) {
  const [page, setPage] = useState(0);

  const maxPage = Math.ceil(deals.length / cardsPerPage) - 1;

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(maxPage, p + 1));

  const visibleDeals = deals.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  // Responsive grid classes
  const gridColsClasses = cardsPerPage === 6
    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";

  return (
    <section className={
    className
      ? `max-w-7xl relative ${className}`
      : "max-w-7xl mx-auto px-4 sm:px-6 py-5 relative"
  }>
      {/* Title + subtitle */}
      <div className="h-[67px] flex items-center justify-between">
        <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-500 mt-1">{subtitle}</span>
        </div>
        <Link
          href={{
            pathname: viewAllLink,
            query: { title: title, subtitle: subtitle },
          }}
          className="flex items-center gap-1 text-sm text-[#1192E8] font-medium hover:underline"
        >
          View All
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      {/* Carousel grid */}
      <div className="relative mt-6">
        <div className={`grid gap-6 ${gridColsClasses}`}>
          {visibleDeals.map((deal, index) => (
            <CardComponent key={index} {...deal} />
          ))}
        </div>

        {/* Navigation buttons */}
        {deals.length > cardsPerPage && (
          <>
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={page === maxPage}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}