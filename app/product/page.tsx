"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import ImageBox from "../../components/ImageBox";
import Productinfo from "../../components/Productinfo";
import ProductTabs from "../../components/ProductTabs";
import Footer from "@/components/Footer";

function ProductContent() {
  const searchParams = useSearchParams();
  const [decodedType, setDecodedType] = useState("");

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setDecodedType(typeParam);
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Top Section: Image + Product Info */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 w-full">
          <ImageBox
            images={[
              "/images/pill1.png",
              "/images/pill2.png",
              "/images/pill3.png",
              "/images/pill4.png",
              "/images/pill1.png",
              "/images/pill2.png",
              "/images/pill3.png",
            ]}
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <Suspense fallback={<div>Loading product info...</div>}>
            <Productinfo type={decodedType} />
          </Suspense>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-8">
        <Suspense fallback={<div>Loading product tabs...</div>}>
          <ProductTabs type={decodedType} />
        </Suspense>
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div className="relative">
      {/* Fixed header */}
      <Header />

      {/* Wrapper that pushes content below header */}
      <div className="pt-[80px] sm:pt-[135px]">
        {/* Breadcrumb sits below header */}
        <Breadcrumb currentPage="test" />

        {/* Main content */}
        <Suspense fallback={<div className="flex justify-center p-20">Loading product...</div>}>
          <ProductContent />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}