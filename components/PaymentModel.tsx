"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  paidAmount: number;
  pharmaciesCount: number;
  status: "success" | "failure"; // status prop to handle success or failure state
  imageUrl?: string; // Optional image URL for the success/failure icon
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  orderId,
  paidAmount,
  pharmaciesCount,
  status,
  imageUrl = "/images/payment_success.svg", // Default success image
}) => {
  const router = useRouter();
  
  if (!isOpen) return null;

  // Conditionally set image and text based on payment status
  const icon = status === "success" ? "/images/payment_success.svg" : "/images/payment_close.svg";
  const title = status === "success" ? "Payment Successful!" : "Payment Failed";
  const message = status === "success" 
    ? "Your reservation is confirmed"
    : "We were unable to process your payment at this time. Please try again or use a different payment method.";

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-14 rounded-lg max-w-lg w-full">
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src={icon}  // Set icon based on status
            alt={status}
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        {/* Modal Title */}
        <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-sm text-[#6B6F72] mb-4 text-center">{message}</p>
         {status === "success" && (
        <div className="mb-4">
          {/* Order ID and Paid Amount */}
          <div className="flex justify-between mb-2">
            {/* Order ID on the left */}
            <div>
              <span className="text-sm text-[#6B6F72]">Order ID</span>
              <div className="font-semibold text-blue-600">{orderId}</div>
            </div>

            {/* Paid Amount on the right */}
            <div>
              <span className="text-sm text-[#6B6F72]">Paid Amount</span>
              <div className="font-semibold text-blue-600">€{paidAmount.toFixed(2)}</div>
            </div>
          </div>

          {/* Pickup Required from Pharmacies */}
          <div className="flex gap-1">
            <span className="text-sm text-[#6B6F72]">*Pickup Required from</span>
            <span className="text-sm text-[#6B6F72]">{pharmaciesCount} Pharmacies</span>
          </div>
         
        </div>
         )}


        {/* Action Buttons */}
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => router.push("/")}
            className="bg-[#1E3862] text-white py-2 px-4 rounded-lg border border-[#1E3862] hover:bg-white hover:text-[#1E3862] transition"
          >
            Back to Home
          </button>
            <button className="bg-[#1E3862] text-white py-2 px-4 rounded-lg border border-[#1E3862] hover:bg-white hover:text-[#1E3862] transition">
              {status === "success" ? "View Order Details" : "Retry Payment"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;