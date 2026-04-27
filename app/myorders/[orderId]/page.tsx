"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useAppTranslation } from "@/lib/useAppTranslation";

interface OrderItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
}

interface PharmacyOrder {
  pharmacyName: string;
  address: string;
  status: "Complete" | "Processing" | "Cancelled";
  items: OrderItem[];
}

interface BillSummary {
  cartTotal: number;
  platformFee: number;
  totalDiscount: number;
  couponCodeDiscount: number;
  paidAmount: number;
}

interface DetailedOrder {
  id: string;
  date: string;
  status: "Completed" | "Processing" | "Cancelled";
  pharmacies: PharmacyOrder[];
  billSummary: BillSummary;
}

const mockOrder: DetailedOrder = {
  id: "FMD-24021211",
  date: "Apr 04, 2026",
  status: "Completed",
  pharmacies: [
    {
      pharmacyName: "Cedar Creek Pharmacy",
      address: "Maple Avenue 12, Florence, ME 20123",
      status: "Complete",
      items: [
        { id: "item1", title: "ColdAway Tablets 24", quantity: 3, price: 45.0, image: "/images/medi1.png" },
        { id: "item2", title: "Flu-Ex Com Foundation Spf15 33", quantity: 2, price: 74.0, image: "/images/medi2.png" },
      ],
    },
    {
      pharmacyName: "Cedar Creek Pharmacy",
      address: "Maple Avenue 12, Florence, ME 20123",
      status: "Complete",
      items: [
        { id: "item3", title: "PainRelief Gel 50g", quantity: 4, price: 32.0, image: "/images/medi3.png" },
      ],
    },
    {
      pharmacyName: "Cedar Creek Pharmacy",
      address: "Maple Avenue 12, Florence, ME 20123",
      status: "Complete",
      items: [
        { id: "item4", title: "Omega-3 Fish Oil 120", quantity: 2, price: 40.0, image: "/images/medi4.png" },
        { id: "item5", title: "Allergy Relief Syrup 200ml", quantity: 1, price: 15.0, image: "/images/medi1.png" },
      ],
    },
  ],
  billSummary: {
    cartTotal: 625,
    platformFee: 15,
    totalDiscount: -240,
    couponCodeDiscount: -40,
    paidAmount: 360,
  },
};

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params?.orderId || "";
  const [copied, setCopied] = useState(false);

  const { t } = useAppTranslation();

  const copyToClipboard = () => {
    const orderIdStr = Array.isArray(orderId) ? orderId[0] : orderId;
    navigator.clipboard.writeText(orderIdStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <Header />
      <div className="pt-[80px] sm:pt-[135px]"></div>

      <div className="min-h-screen px-4 sm:px-6 max-w-[900px] mx-auto font-inter">

        {/* Back Button */}
        <div className="mb-4">
          <Link
            href="/myorders"
            className="inline-flex items-center text-blue-600 text-sm font-medium"
          >
            &#x2B05; {t("orderDetails.back")}
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col mb-6">

          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            {t("orderDetails.title")}
          </h1>

          <div className="flex items-center justify-between">

            <div className="flex flex-col">

              <div className="flex items-center gap-2">

                <p className="text-sm text-slate-500">
                  {t("orderDetails.orderId")}:{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    {`#${orderId}`}
                  </span>
                </p>

                <button
                  onClick={copyToClipboard}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <Image src="/images/copyicon.svg" alt="copy Icon" width={14} height={14} />
                </button>

                {copied && (
                  <span className="text-blue-600 text-xs">
                    {t("orderDetails.copied")}
                  </span>
                )}
              </div>

              <div className="flex items-center text-sm text-gray-500 mt-1 gap-1">
                <Image src="/images/calendar.svg" alt="Calendar" width={22} height={22} />
                <span>{mockOrder.date}</span>
              </div>
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold whitespace-nowrap">
              {mockOrder.status}
            </span>
          </div>
        </div>

        {/* Pharmacies + Bill */}
        <div className="flex flex-col md:flex-row md:gap-8 mb-4">

          {/* Pharmacies */}
          <div className="flex-1 space-y-6">
            {mockOrder.pharmacies.map((pharmacy, i) => (
              <div key={i} className="border rounded-md border-[#CBD5E0] min-w-[555px] font-inter">

                <div className="flex p-4 items-center justify-between bg-[#F6F9FF]">

                  <div>
                    <div className="font-medium text-[#1E3862] text-[14px]">
                      {pharmacy.pharmacyName}, {pharmacy.address}
                    </div>

                    <Link
                      href="#"
                      className="text-[#1192E8] text-xs hover:underline inline-flex items-center mt-1 gap-1"
                    >
                      <Image src="/images/directionicon.svg" alt="direction" width={18} height={18} />
                      {t("orderDetails.direction")}
                    </Link>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-[#008B38] bg-white text-xs border border-[#008B38]">
                    {pharmacy.status}
                  </span>

                </div>

                <div className="mt-1">
                  {pharmacy.items.map((item) => (
                    <div key={item.id} className="flex items-center p-4 gap-4 py-2">

                      <img
                        src={item.image}
                        alt={item.title}
                        width={52}
                        height={52}
                        className="border rounded-md border-[#CBD5E0]"
                      />

                      <div className="flex-1">
                        <div className="font-medium text-sm mb-1 text-[#1E3862]">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          x {item.quantity}
                        </div>
                      </div>

                      <div className="font-medium text-sm text-[#1E3862]">
                        €{item.price.toFixed(2)}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Bill Summary */}
          <div className="mt-8 md:mt-0 md:w-[325px] p-6 border border-[#1E3862] rounded-lg bg-[#EDF2FB] text-sm flex flex-col self-start">

            <h2 className="text-[#1E3862] font-semibold mb-4">
              {t("orderDetails.billSummary")}
            </h2>

            <div className="flex justify-between mb-4">
              <span className="text-[#6B6F72]">{t("orderDetails.cartTotal")}</span>
              <span>€{mockOrder.billSummary.cartTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-[#6B6F72]">{t("orderDetails.platformFee")}</span>
              <span>€{mockOrder.billSummary.platformFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-green-600">
              <span className="text-[#6B6F72]">{t("orderDetails.totalDiscount")}</span>
              <span>€{mockOrder.billSummary.totalDiscount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-green-600">
              <span className="text-[#6B6F72]">{t("orderDetails.couponDiscount")}</span>
              <span>€{mockOrder.billSummary.couponCodeDiscount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-[#1E3862]">
              <span>{t("orderDetails.paidAmount")}</span>
              <span>€{mockOrder.billSummary.paidAmount.toFixed(2)}</span>
            </div>

          </div>
        </div>

        {/* Actions */}
        {mockOrder.status === "Completed" && (
          <div className="mt-auto flex gap-4 mb-4 text-[14px]">

            <button className="flex justify-center gap-2 px-4 py-2 border text-[#1192E8] rounded min-w-[216px]">
              Download Invoice
            </button>

            <button className="flex justify-center text-[#1192E8] gap-2 px-4 py-2 border rounded min-w-[216px]">
              {t("orderDetails.contactSupport")}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}