"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import ImageBox from "../../components/ImageBox";
import Productinfo from "../../components/Productinfo";
import ProductTabs from "../../components/ProductTabs";
import Footer from "@/components/Footer";

// Move search logic to a sub-component
function ProductContent() {
  const searchParams = useSearchParams();
  const [decodedType, setDecodedType] = useState('');

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      try {
        // atob is safe inside useEffect because it only runs on the client
        setDecodedType(atob(typeParam));
      } catch (e) {
        console.error("Failed to decode type parameter:", e);
      }
    }
  }, [searchParams]);

  const id = searchParams.get("id");

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
      {/* Image Section */}
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

      {/* Product Info */}
      <div className="lg:w-1/2 w-full">
        <Suspense fallback={<div>Loading product info...</div>}>
          <Productinfo type={decodedType} />
        </Suspense>
      </div>

      <div className="w-full lg:col-span-2">
        <Suspense fallback={<div>Loading product tabs...</div>}>
          <ProductTabs type={decodedType} />
        </Suspense>
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div>
      <Header />
      <div className="pt-[135px]">
        <Breadcrumb currentPage={"test"} />
      </div>

      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={<div className="flex justify-center p-20">Loading product...</div>}>
        <ProductContent />
      </Suspense>

      <Footer />
    </div>
  );
}