"use client";

import React, { useState } from "react";
import PaymentModal from "./PaymentModel";
import { useAppTranslation } from "@/lib/useAppTranslation";

interface ReservationSummaryPageProps {
  items?: any[];
  onBack?: () => void;
}

const ReservationSummaryPage: React.FC<ReservationSummaryPageProps> = ({
  items = [],
  onBack,
}) => {
  const { t } = useAppTranslation();

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"success" | "failure">("success");

  const parsedItems = items;

  const groupedItems = parsedItems.reduce((acc: any, item: any) => {
    const pharmacy = item.pharmacyName || t("reservation.unknownPharmacy");

    if (!acc[pharmacy]) {
      acc[pharmacy] = [];
    }

    acc[pharmacy].push(item);
    return acc;
  }, {});

  const handleContinueToPayment = () => {
    setSuccessModalOpen(true);
  };

  return (
    <div className="p-4">
      
      {/* Title */}
      <h1 className="text-xl font-bold mb-2">
        {t("reservation.title")}
      </h1>

      <p className="text-sm text-gray-500 mb-4">
        {t("reservation.subtitle")}
      </p>

      {/* Items */}
      {Object.keys(groupedItems).length > 0 ? (
        Object.keys(groupedItems).map((pharmacyName, index) => (
          <div key={index} className="border rounded-lg border-gray-300 mb-4">
            
            <div className="bg-[#F6F9FF] p-4 flex items-center">
              <img
                src={groupedItems[pharmacyName][0].image}
                alt={pharmacyName}
                width={42}
                height={42}
                className="rounded-lg mr-4"
                style={{ width: "42px", height: "42px" }}
              />

              <div>
                <h3 className="font-semibold">{pharmacyName}</h3>

                <p className="text-[#6B6F72] text-sm">
                  {groupedItems[pharmacyName][0].address ||
                    t("reservation.defaultAddress")}
                </p>
              </div>
            </div>

            <div className="p-2">
              {groupedItems[pharmacyName].map((item: any, itemIndex: number) => (
                <div
                  key={itemIndex}
                  className="flex justify-between p-2 text-[#1E3862]"
                >
                  <p>
                    {item.productName} x {item.quantity}
                  </p>
                  <p>€{item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>

          </div>
        ))
      ) : (
        <p>{t("reservation.noItems")}</p>
      )}

      {/* Info */}
      <div className="bg-[#F6F9FF] p-2 rounded-lg">
        <p className="text-sm text-gray-500 mb-1">
          {t("reservation.pickupNote")}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {t("reservation.paymentNote")}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end mt-4 gap-2 font-inter">
        <button
          onClick={onBack}
          className="text-[#1E3862] py-2 px-4 rounded-lg border border-[#1E3862] hover:bg-[#1E3862] hover:text-white transition"
        >
          {t("reservation.backToCart")}
        </button>

        <button
          onClick={handleContinueToPayment}
          className="bg-[#1E3862] text-white py-2 px-4 rounded-lg border border-[#1E3862] hover:bg-white hover:text-[#1E3862] transition"
        >
          {t("reservation.continuePayment")}
        </button>
      </div>

      {/* Modal */}
      <PaymentModal
        isOpen={isSuccessModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        orderId="#12345678"
        paidAmount={100}
        pharmaciesCount={4}
        status={paymentStatus}
      />
    </div>
  );
};

export default ReservationSummaryPage;