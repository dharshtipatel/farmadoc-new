"use client";

import Link from "next/link";
import { useAppTranslation } from "@/lib/useAppTranslation";

interface BreadcrumbProps {
  currentPage: string;
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  const { t } = useAppTranslation();

  return (
    <div className="w-full max-w-[1280px] mx-auto flex items-center text-[12px] text-[#6B6F72] pt-[20px] pb-[20px] px-4 sm:px-6 font-inter">
      
      {/* Home */}
      <Link href="/" className="hover:underline">
        {t("breadcrumb.home")}
      </Link>

      {/* Separator */}
      <span className="mx-2 text-gray-400">{">"}</span>

      {/* Current Page */}
      <span className="text-[#1E3862] font-medium truncate max-w-[calc(100%-40px)] sm:max-w-[calc(100%-80px)]">
        {currentPage}
      </span>

    </div>
  );
}
