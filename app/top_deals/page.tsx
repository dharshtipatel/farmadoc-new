"use client";

import { useState, useMemo, useRef, Suspense, useEffect } from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Breadcrumb from "../../components/Breadcrumb";
import DealsHeader from "../../components/DealsHeader";
import ProductCard from "@/components/ProductCard";
import FAQAccordion from "../../components/FAQAccordion";
import Footer from "../../components/Footer";
import { useSearchParams } from "next/navigation";
import PharmacyCard from "../../components/PharmacyCard";
import { useAppTranslation } from "@/lib/useAppTranslation";

interface Product {
  id: number;
  name: string;
  pharmacy: string;
  price: string;
  oldPrice: string;
  discount: string;
  distance: string;
  expiry: string;
  image: string;
  type: string;
  dealsCount: number;
}

function TopDealsContent() {
  const { t } = useAppTranslation();
  const searchParams = useSearchParams();
  let pageTitle = searchParams.get("title") || t("topDealsPage.defaultTitle");
  let pageSubtitle = searchParams.get("subtitle") || t("topDealsPage.defaultSubtitle");

  const [visibleCount, setVisibleCount] = useState(9);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const isPharmacyView =
    pageTitle.toLowerCase().includes("pharm") || pageTitle.toLowerCase().includes("farmac");

  if (isPharmacyView) {
    pageTitle = t("topDealsPage.pharmacyTitle");
    pageSubtitle = t("topDealsPage.pharmacySubtitle");
  }

  const allProducts = useMemo<Product[]>(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: `${t("common.product")} ${i + 1}`,
        pharmacy: `${t("common.pharmacy")} ${i + 1}`,
        price: (5 + (i % 10) * 1.7).toFixed(2),
        oldPrice: (10 + (i % 10) * 2.3).toFixed(2),
        discount: `${10 + (i % 5) * 5}% OFF`,
        distance: `${(0.5 + (i % 8) * 0.4).toFixed(1)} km`,
        expiry: `2026-12-${(i % 28) + 1}`,
        image: "/images/1.png",
        type: i % 2 === 0 ? "pharmacy" : "showroom",
        dealsCount: (i % 10) + 1,
      })),
    [t]
  );

  const visibleProducts = allProducts.slice(0, visibleCount);

  useEffect(() => {
    if (!allProducts.length) return;
    const node = loaderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const next = Math.min(prev + 6, allProducts.length);
            if (next >= allProducts.length) {
              observerInstance.unobserve(entries[0].target);
            }
            return next;
          });
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [allProducts.length]);

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="sm:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="bg-[#33B1FF] text-white px-4 py-2 rounded"
        >
          {t("topDealsPage.filtersButton")}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="hidden sm:block w-[280px]">
          <Filters filter_title={pageTitle} />
        </div>

        <div className="flex-1">
          <DealsHeader title={pageTitle} count={allProducts.length} subtitle={pageSubtitle} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {visibleProducts.map((product) =>
              isPharmacyView ? (
                <PharmacyCard
                  key={product.id}
                  image={product.image}
                  name={product.pharmacy}
                  address={`${t("topDealsPage.addressFor")} ${product.pharmacy}`}
                  type={product.type}
                  deals={product.dealsCount}
                  distance={parseFloat(product.distance)}
                  starBadge="/images/star_badge.png"
                />
              ) : (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  pharmacy={product.pharmacy}
                  price={Number(product.price)}
                  oldPrice={Number(product.oldPrice)}
                  discount={product.discount}
                  distance={product.distance}
                  expiry={product.expiry}
                  image={product.image}
                  type={product.type}
                />
              )
            )}
          </div>

          {visibleProducts.length < allProducts.length && (
            <div ref={loaderRef} className="h-10 mt-4 flex justify-center items-center">
              <span className="text-gray-500">{t("topDealsPage.loadingMore")}</span>
            </div>
          )}
        </div>
      </div>

      {showMobileFilters && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowMobileFilters(false);
            }
          }}
        >
          <div className="bg-white w-full h-full shadow-lg overflow-y-auto relative py-6 px-4">
            <button
              onClick={() => setShowMobileFilters(false)}
              className="absolute top-4 right-4 text-gray-600 text-lg font-bold"
            >
              x
            </button>
            <Filters filter_title={pageTitle} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function TopDealsPage() {
  const { t } = useAppTranslation();

  return (
    <div>
      <Header />
      <div className="pt-[80px] sm:pt-[135px] px-4">
        <Breadcrumb currentPage={t("topDealsPage.breadcrumb")} />

        <Suspense fallback={<div className="flex justify-center p-20">{t("topDealsPage.loadingDeals")}</div>}>
          <TopDealsContent />
        </Suspense>

        <FAQAccordion />
      </div>
      <Footer />
    </div>
  );
}
