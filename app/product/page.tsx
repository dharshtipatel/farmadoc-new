"use client";

import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import ImageBox from "../../components/ImageBox";
import Productinfo from "../../components/Productinfo";
import ProductTabs from "../../components/ProductTabs";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const typeParam = searchParams.get("type");
  const decodedType = typeParam ? atob(typeParam) : '';

  return (
    <div>
      <Header />
      <div className="pt-[135px]">
        <Breadcrumb currentPage={"test"} />
      </div>

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
          <Productinfo type={decodedType} />
        </div>

      </div>

      <ProductTabs type={decodedType} />
      <Footer />
    </div>
  );
}