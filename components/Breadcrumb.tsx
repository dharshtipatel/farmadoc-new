import Link from "next/link";

interface BreadcrumbProps {
  currentPage: string;
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <div className="w-[1280px] h-[24px] mx-auto flex items-center text-[12px] text-[#6B6F72] pt-[20px] pb-[20px] px-6 py-4 font-inter">
      
      {/* Home */}
      <Link href="/" className="hover:underline">
        Home
      </Link>

      {/* Separator */}
      <span className="mx-2 text-gray-400">{">"}</span>

      {/* Current Page */}
      <span className="text-[#1E3862] font-medium">
        {currentPage}
      </span>

    </div>
  );
}