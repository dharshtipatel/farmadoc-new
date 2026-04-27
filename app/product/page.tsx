"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import ImageBox from "../../components/ImageBox";
import Productinfo from "../../components/Productinfo";
import ProductTabs from "../../components/ProductTabs";
import Footer from "@/components/Footer";
import { useAppTranslation } from "@/lib/useAppTranslation";

function ProductContent() {
  const searchParams = useSearchParams();
  const [decodedType, setDecodedType] = useState("");
  const { t } = useAppTranslation();

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setDecodedType(typeParam);
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Top Section */}
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
          <Suspense fallback={<div>{t("product.loadingInfo")}</div>}>
            <Productinfo type={decodedType} />
          </Suspense>
        </div>

      </div>

      {/* Tabs */}
      <div className="mt-8">
        <Suspense fallback={<div>{t("product.loadingTabs")}</div>}>
          <ProductTabs type={decodedType} />
        </Suspense>
      </div>

    </div>
  );
}

export default function ProductPage() {
  const { t } = useAppTranslation();

  return (
    <div className="relative">

      <Header />

      <div className="pt-[80px] sm:pt-[135px]">

        <Breadcrumb currentPage={t("product.breadcrumb")} />

        <Suspense fallback={<div className="flex justify-center p-20">
          {t("product.loading")}
        </div>}>
          <ProductContent />
        </Suspense>

      </div>

      <Footer />
    </div>
  );
}