"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAppTranslation } from "@/lib/useAppTranslation";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  paidAmount: number;
  pharmaciesCount: number;
  status: "success" | "failure";
  imageUrl?: string;
  isPharmacySummary?: boolean;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  orderId,
  paidAmount,
  pharmaciesCount,
  status,
  imageUrl = "/images/payment_success.svg",
  isPharmacySummary = false,
}) => {
  const router = useRouter();
  const { t } = useAppTranslation();

  if (!isOpen) return null;

  const icon =
    status === "success"
      ? "/images/payment_success.svg"
      : "/images/payment_close.svg";

  const title = isPharmacySummary
    ? t("payment.summaryTitle")
    : status === "success"
    ? t("payment.successTitle")
    : t("payment.failureTitle");

  const message = isPharmacySummary
    ? t("payment.summaryMessage")
    : status === "success"
    ? t("payment.successMessage")
    : t("payment.failureMessage");

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-14 rounded-lg max-w-lg w-full">

        {/* Image */}
        <div className="flex justify-center mb-4">
          <img src={icon} alt={status} width={120} height={120} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-2 text-center">
          {title}
        </h3>

        {/* Message */}
        <p className="text-center text-[#6B6F72] text-sm leading-relaxed mb-4">
          {message}
          <br />
          {isPharmacySummary && (
            <span className="block mt-2">
              {t("payment.summaryExtra")}
            </span>
          )}
        </p>

        {/* Success Details */}
        {status === "success" && !isPharmacySummary && (
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-sm text-[#6B6F72]">
                  {t("payment.orderId")}
                </span>
                <div className="font-semibold text-blue-600">
                  {orderId}
                </div>
              </div>

              <div>
                <span className="text-sm text-[#6B6F72]">
                  {t("payment.paidAmount")}
                </span>
                <div className="font-semibold text-blue-600">
                  €{paidAmount.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              <span className="text-sm text-[#6B6F72]">
                {t("payment.pickupFrom")}
              </span>
              <span className="text-sm text-[#6B6F72]">
                {pharmaciesCount} {t("payment.pharmacies")}
              </span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-4 flex">
          {isPharmacySummary ? (
            <button className="w-full bg-[#1E3862] text-white py-3 px-4 rounded-lg">
              {t("payment.backHome")}
            </button>
          ) : (
            <div className="flex justify-center gap-4 w-full">
              <button className="bg-[#1E3862] text-white py-2 px-4 rounded-lg">
                {t("payment.backHome")}
              </button>

              <button className="bg-[#1E3862] text-white py-2 px-4 rounded-lg">
                {status === "success"
                  ? t("payment.viewOrder")
                  : t("payment.retry")}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;