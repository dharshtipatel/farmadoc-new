"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Breadcrumb from "../../components/Breadcrumb";
import DealsHeader from "../../components/DealsHeader";
import ProductCard from "@/components/ProductCard";
import FAQAccordion from "../../components/FAQAccordion";
import Footer from "../../components/Footer";
import { useSearchParams } from "next/navigation";
import PharmacyCard from "../../components/PharmacyCard";

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
}

function TopDealsContent() {
  const searchParams = useSearchParams();
  let pageTitle = searchParams.get("title") || "Top Deals";
  let pageSubtitle = searchParams.get("subtitle") || "Top Deals";

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const isPharmacyView = pageTitle.toLowerCase() === "popular pharmacies near you";
  if (isPharmacyView) {
    pageTitle = "Pharmacies Near you";
    pageSubtitle = "Find exclusive deals on medications and health essentials.";
  }

  // Generate random products
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
    <div className="max-w-7xl mx-auto mt-6">
      {/* Mobile Filter Button */}
      <div className="sm:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="bg-[#33B1FF] text-white px-4 py-2 rounded"
        >
          Filters
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Desktop Filters */}
        <div className="hidden sm:block w-[280px]">
          <Filters filter_title={pageTitle} />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <DealsHeader title={pageTitle} count={allProducts.length} subtitle={pageSubtitle} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {visibleProducts.map((product) =>
              isPharmacyView ? (
                <PharmacyCard
                  key={product.id}
                  image={product.image}
                  name={product.pharmacy}
                  address={`Address for ${product.pharmacy}`}
                  type={product.type}
                  deals={Math.floor(Math.random() * 10) + 1}
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

          {/* Loader */}
          {visibleProducts.length < allProducts.length && (
            <div ref={loaderRef} className="h-10 mt-4 flex justify-center items-center">
              <span className="text-gray-500">Loading more...</span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
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
              ✕
            </button>
            <Filters filter_title={pageTitle} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function TopDealsPage() {
  return (
    <div>
      <Header />
      
      {/* Container that pushes all content below the fixed header */}
      <div className="pt-[80px] sm:pt-[135px] px-4">
        <Breadcrumb currentPage="Top Deals" />

        <Suspense fallback={<div className="flex justify-center p-20">Loading deals...</div>}>
          <TopDealsContent />
        </Suspense>

        <FAQAccordion />
      </div>
      <Footer />
    </div>
  );
}