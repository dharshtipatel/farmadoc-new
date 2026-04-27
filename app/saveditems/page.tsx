"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useMemo, useState, useCallback, useEffect } from "react";
import { useAppTranslation } from "@/lib/useAppTranslation";

type SavedProduct = {
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
};

export default function SavedItemsPage() {
  const { t } = useAppTranslation();
  const [activeTab, setActiveTab] = useState("products");
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);

  const productsPerPage = 9;

  const allProducts = useMemo<SavedProduct[]>(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: `${t("common.product")} ${i + 1}`,
        pharmacy: `${t("common.pharmacy")} ${i + 1}`,
        price: Number((5 + (i % 10) * 1.7).toFixed(2)),
        oldPrice: Number((10 + (i % 10) * 2.3).toFixed(2)),
        discount: `${10 + (i % 5) * 5}% OFF`,
        distance: `${(0.5 + (i % 8) * 0.4).toFixed(1)} km`,
        expiry: `2026-12-${(i % 28) + 1}`,
        image: "/images/1.png",
        type: i % 2 === 0 ? "pharmacy" : "showroom",
      })),
    [t]
  );

  const visibleProducts = allProducts.slice(0, visibleCount);
  const hasMore = visibleCount < allProducts.length;

  const loadMoreProducts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + productsPerPage, allProducts.length));
      setLoading(false);
    }, 500);
  }, [allProducts.length, hasMore, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    const sentinel = document.getElementById("load-more-sentinel");
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [hasMore, loadMoreProducts, loading]);

  return (
    <div>
      <Header />
      <div className="pt-[80px] sm:pt-[135px]"></div>
      <div className="p-6 max-w-[1280px] mx-auto">
        <h1 className="text-xl font-semibold mb-4">{t("savedItemsPage.title")}</h1>

        <div className="flex gap-6 mb-6">
          <button
            onClick={() => setActiveTab("products")}
            className={`pb-2 ${
              activeTab === "products"
                ? "border-b-2 border-[#1E3862] text-[#1E3862] font-inter text-[14px] text-medium"
                : "text-gray-500 font-inter text-[14px] text-medium"
            }`}
          >
            {t("savedItemsPage.products")}
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`pb-2 ${
              activeTab === "services"
                ? "border-b-2 border-[#1E3862] text-[#1E3862] font-inter text-[14px] text-medium"
                : "text-gray-500 font-inter text-[14px] text-medium"
            }`}
          >
            {t("savedItemsPage.services")}
          </button>
        </div>

        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} isLiked={true} />
            ))}
          </div>
        )}

        {activeTab === "products" && hasMore && (
          <div id="load-more-sentinel" className="flex justify-center py-8">
            {loading ? <div className="text-gray-500">{t("savedItemsPage.loadingMoreProducts")}</div> : <div className="h-4"></div>}
          </div>
        )}

        {activeTab === "services" && (
          <div className="text-gray-500 text-center mt-10">
            {t("savedItemsPage.noSavedServices")}
          </div>
        )}
      </div>
    </div>
  );
}
