"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState, useCallback } from "react";

export default function SavedItemsPage() {
  const [activeTab, setActiveTab] = useState("products");
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const productsPerPage = 9;

  useEffect(() => {
    // Generate mock products data
    const products = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      pharmacy: `Pharmacy ${i + 1}`,
      price: Number((Math.random() * 20 + 5).toFixed(2)),
      oldPrice: Number((Math.random() * 30 + 10).toFixed(2)),
      discount: `${Math.floor(Math.random() * 50) + 10}% OFF`,
      distance: `${(Math.random() * 5).toFixed(1)} km`,
      expiry: `2026-12-${(i % 28) + 1}`,
      image: "/images/1.png",
      type: Math.random() > 0.5 ? "pharmacy" : "showroom",
    }));
    setAllProducts(products);
    setVisibleProducts(products.slice(0, productsPerPage));
  }, []);

  const loadMoreProducts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const currentLength = visibleProducts.length;
      const nextProducts = allProducts.slice(currentLength, currentLength + productsPerPage);

      if (nextProducts.length === 0) {
        setHasMore(false);
      } else {
        setVisibleProducts(prev => [...prev, ...nextProducts]);
      }

      setLoading(false);
    }, 500);
  }, [loading, hasMore, visibleProducts, allProducts]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    const sentinel = document.getElementById('load-more-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [loadMoreProducts, hasMore, loading]);

  return (
    <div>
        {/* Fixed Header */}
        <Header />
        <div className="pt-[80px] sm:pt-[135px]"></div>
        <div className="p-6 max-w-[1280px] mx-auto">
        {/* Heading */}
        <h1 className="text-xl font-semibold mb-4">Saved Items</h1>

        {/* Tabs */}
        <div className="flex gap-6 mb-6">
            <button
            onClick={() => setActiveTab("products")}
            className={`pb-2 ${
                activeTab === "products"
                ? "border-b-2 border-[#1E3862] text-[#1E3862] font-inter text-[14px] text-medium"
                : "text-gray-500 font-inter text-[14px] text-medium"
            }`}
            >
            Products
            </button>

            <button
            onClick={() => setActiveTab("services")}
            className={`pb-2 ${
                activeTab === "services"
                ? "border-b-2 border-[#1E3862] text-[#1E3862] font-inter text-[14px] text-medium"
                : "text-gray-500 font-inter text-[14px] text-medium"
            }`}
            >
            Services
            </button>
        </div>

        {/* Grid */}
        {activeTab === "products" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        pharmacy={product.pharmacy}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        discount={product.discount}
                        distance={product.distance}
                        expiry={product.expiry}
                        image={product.image}
                        type={product.type}
                        isLiked={true}
                    />
                ))}
            </div>
        )}

        {/* Load More Sentinel */}
        {activeTab === "products" && hasMore && (
            <div id="load-more-sentinel" className="flex justify-center py-8">
                {loading ? (
                    <div className="text-gray-500">Loading more products...</div>
                ) : (
                    <div className="h-4"></div>
                )}
            </div>
        )}

        {/* Services Placeholder */}
        {activeTab === "services" && (
            <div className="text-gray-500 text-center mt-10">
            No saved services yet.
            </div>
        )}
        </div>
    </div>
  );
}