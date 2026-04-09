"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

interface Order {
  id: string;
  image: string;
  title: string;
  code: string;
  date: string;
  price: number;
  status: "Completed" | "Processing" | "Cancelled";
  detailsLink: string;
}

const ordersData: Order[] = [
  {
    id: "FMD-24021211",
    image: "/images/medi1.png",
    title: "Paracetamol 500mg x2, Vitamin C x1",
    code: "FMD-24021211",
    date: "Apr 04, 2026",
    price: 360.0,
    status: "Completed",
    detailsLink: `/myorders/FMD-24021211`,
  },
  {
    id: "FMD-24021212",
    image: "/images/medi2.png",
    title: "Ibuprofen 200mg x1, Calcium x2",
    code: "FMD-24021212",
    date: "Apr 10, 2026",
    price: 150.0,
    status: "Processing",
    detailsLink: `/myorders/FMD-24021212`,
  },
  {
    id: "FMD-24021213",
    image: "/images/medi3.png",
    title: "Amoxicillin 250mg x4, Zinc x1",
    code: "FMD-24021213",
    date: "Apr 15, 2026",
    price: 220.0,
    status: "Completed",
    detailsLink: `/myorders/FMD-24021213`,
  },
  {
    id: "FMD-24021214",
    image: "/images/medi4.png",
    title: "Cetirizine 10mg x3, Omega-3 x2",
    code: "FMD-24021214",
    date: "Apr 20, 2026",
    price: 90.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021214`,
  },
  {
    id: "FMD-24021215",
    image: "/images/medi1.png",
    title: "Loratadine 10mg x5, Probiotics x1",
    code: "FMD-24021215",
    date: "Apr 25, 2026",
    price: 410.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021215`,
  },
  {
    id: "FMD-24021216",
    image: "/images/medi1.png",
    title: "Loratadine 10mg x5, Probiotics x1",
    code: "FMD-24021216",
    date: "Apr 25, 2026",
    price: 410.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021216`,
  },
  {
    id: "FMD-24021217",
    image: "/images/medi1.png",
    title: "Loratadine 10mg x5, Probiotics x1",
    code: "FMD-24021217",
    date: "Apr 25, 2026",
    price: 410.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021217`,
  },
  {
    id: "FMD-24021218",
    image: "/images/medi1.png",
    title: "Loratadine 10mg x5, Probiotics x1",
    code: "FMD-24021218",
    date: "Apr 25, 2026",
    price: 410.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021218`,
  },
  {
    id: "FMD-24021219",
    image: "/images/medi1.png",
    title: "Loratadine 10mg x5, Probiotics x1",
    code: "FMD-24021219",
    date: "Apr 25, 2026",
    price: 410.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021219`,
  },
  {
    id: "FMD-24021220",
    image: "/images/medi1.png",
    title: "Loratadine 10mg x5, Probiotics x1",
    code: "FMD-24021220",
    date: "Apr 25, 2026",
    price: 410.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021220`,
  },
  {
    id: "FMD-24021221",
    image: "/images/medi1.png",
    title: "Loratadine 10mg x5, Probiotics x1",
    code: "FMD-24021221",
    date: "Apr 25, 2026",
    price: 410.0,
    status: "Cancelled",
    detailsLink: `/myorders/FMD-24021221`,
  },
];

const ORDERS_PER_PAGE = 5;

export default function MyOrdersPage() {
  const [activeTab, setActiveTab] = useState<"All Orders" | "Processing" | "Completed" | "Cancelled">("All Orders");
  const [page, setPage] = useState(1);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const filteredOrders =
    activeTab === "All Orders"
      ? ordersData
      : ordersData.filter((order) => order.status === activeTab);

  const paginatedOrders = filteredOrders.slice(0, page * ORDERS_PER_PAGE);

  const statusColors: Record<string, string> = {
    Completed: "bg-[#008B38]",
    Processing: "bg-[#FFB703]",
    Cancelled: "bg-[#D62828]",
  };

  // Reset pagination on tab change
  useEffect(() => {
    setPage(1);
  }, [activeTab]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (page * ORDERS_PER_PAGE < filteredOrders.length) {
            setPage((prev) => prev + 1);
          }
        }
      },
      { rootMargin: "100px" } // Trigger a bit before reaching bottom
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [page, filteredOrders.length]);

  return (
    <div>
      {/* Fixed Header */}
      <Header />
      <div className="pt-[80px] sm:pt-[135px]"></div>

      <div className="max-w-[900px] mx-auto p-4 font-inter text-[#1E3862]">
        <h1 className="text-xl font-semibold mb-4">My Orders</h1>

        {/* Tabs */}
        <div className="flex space-x-8 mb-6 text-sm">
          {["All Orders", "Processing", "Completed", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-3 ${
                activeTab === tab
                  ? "border-b-2 border-[#1E3862] font-semibold text-[#1E3862]"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Order List */}
        <div className="space-y-6">
          {paginatedOrders.map((order) => (
            <div
              key={order.id}
              className="flex border border-[#D6DADD] rounded-md p-4 gap-4"
            >
              {/* Image */}
              <img
                src={order.image}
                alt={order.title}
                width={90}
                height={90}
                className="border border-[#D6DADD] rounded"
              />

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Top row: Title + Status aligned horizontally */}
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-blue-900 hover:underline cursor-pointer max-w-[70%]">
                    {order.title}{" "}
                    <span className="text-gray-500 text-xs cursor-default">+ more</span>
                  </div>

                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Middle row: code, date */}
                <div className="flex items-center text-xs text-[#1192E8] mb-2 gap-2">
                  <span>#{order.code}</span>
                  <span className="text-gray-500">|</span>
                  <Image src="/images/calendar.svg" alt="Calendar" width={18} height={18} />
                  <span className="text-gray-500">{order.date}</span>
                </div>

                {/* Bottom row: Price and View Details aligned horizontally */}
                <div className="flex justify-between items-center">
                  <div className="font-semibold">€{order.price.toFixed(2)}</div>

                  <Link
                    href={order.detailsLink}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Loader / Trigger for infinite scroll */}
          {page * ORDERS_PER_PAGE < filteredOrders.length && (
            <div ref={loadMoreRef} className="text-center py-4 text-gray-400">
              Loading more orders...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}