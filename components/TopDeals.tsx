"use client";

import { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

export default function TopDeals() {
  const searchParams = useSearchParams();
  var pageTitle = searchParams.get("title") || "Top Deals";
  var pageSubtitle = searchParams.get("subtitle") || "Top Deals";

  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const loaderRef = useRef<HTMLDivElement>(null);
  const isPharmacyView = pageTitle.toLowerCase() === "popular pharmacies near you";
  if (isPharmacyView) {
    pageTitle = "Pharmacies Near you";
    pageSubtitle = "Find exclusive deals on medications and health essentials.";
  }

  // Generate random products on client only
  useEffect(() => {
    const products = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      pharmacy: `Pharmacy ${i + 1}`,
      price: (Math.random() * 20 + 5).toFixed(2),
      oldPrice: (Math.random() * 30 + 10).toFixed(2),
      discount: `${Math.floor(Math.random() * 50) + 10}% OFF`,
      distance: `${(Math.random() * 5).toFixed(1)} km`,
      expiry: `2026-12-${(i % 28) + 1}`,
      image: "/images/1.png",
      type: Math.random() > 0.5 ? "pharmacy" : "showroom",
    }));
    setAllProducts(products);
    setVisibleProducts(products.slice(0, 9));
  }, []);

  // Infinite scroll
  useEffect(() => {
    if (!allProducts.length) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        if (entries[0].isIntersecting) {
          setVisibleProducts((prev) => {
            const next = allProducts.slice(0, prev.length + 6);
            if (next.length >= allProducts.length) {
              observerInstance.unobserve(entries[0].target);
            }
            return next;
          });
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [allProducts]);

  return (
    <div>

      <div className="max-w-7xl mx-auto mt-6 flex gap-15">
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Deals <span className="text-gray-500 text-sm">({allProducts.length})</span></h2>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {visibleProducts.map((product) =>
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
            )}
          </div>

          {/* Loader */}
          {visibleProducts.length < allProducts.length && (
            <div ref={loaderRef} className="h-10 mt-4 flex justify-center items-center">
              <span className="text-gray-500">Loading more...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}