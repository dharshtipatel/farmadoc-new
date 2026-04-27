"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { useAppTranslation } from "@/lib/useAppTranslation";

type Deal = {
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

type TopDealsProps = {
  deals?: Deal[];
};

export default function TopDeals({ deals }: TopDealsProps) {
  const { t } = useAppTranslation();
  const searchParams = useSearchParams();
  let pageTitle = searchParams.get("title") || t("topDealsPage.defaultTitle");

  const [visibleCount, setVisibleCount] = useState(9);
  const loaderRef = useRef<HTMLDivElement>(null);
  const isPharmacyView =
    pageTitle.toLowerCase().includes("pharm") || pageTitle.toLowerCase().includes("farmac");

  if (isPharmacyView) {
    pageTitle = t("topDealsPage.pharmacyTitle");
  }

  const allProducts = useMemo<Deal[]>(
    () =>
      deals && deals.length > 0
        ? deals
        : Array.from({ length: 30 }, (_, i) => ({
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
    [deals, t]
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
    <div>
      <div className="max-w-7xl mx-auto mt-6 flex gap-15">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            {isPharmacyView ? pageTitle : t("topDealsComponent.title")}{" "}
            <span className="text-gray-500 text-sm">({allProducts.length})</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {visibleProducts.map((product) => (
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
            ))}
          </div>

          {visibleProducts.length < allProducts.length && (
            <div ref={loaderRef} className="h-10 mt-4 flex justify-center items-center">
              <span className="text-gray-500">{t("topDealsComponent.loadingMore")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
