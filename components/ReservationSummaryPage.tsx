"use client";

import React, { useState } from "react";
import PaymentModal from "./PaymentModel";

interface ReservationSummaryPageProps {
  items?: any[];
  onBack?: () => void;
}

const ReservationSummaryPage: React.FC<ReservationSummaryPageProps> = ({
  items = [],
  onBack,
}) => {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"success" | "failure">(
    "success" // You can toggle this to simulate success or failure
  );

  const parsedItems = items;

  // Group items by pharmacy name
  const groupedItems = parsedItems.reduce((acc: any, item: any) => {
    const pharmacy = item.pharmacyName || "Unknown Pharmacy"; // Default to "Unknown Pharmacy" if not provided

    if (!acc[pharmacy]) {
      acc[pharmacy] = [];
    }

    acc[pharmacy].push(item);
    return acc;
  }, {});

  const handleContinueToPayment = () => {
    // Simulate successful or failed payment based on your logic
    // In real scenario, you would handle payment logic here
    if (paymentStatus === "success") {
      setSuccessModalOpen(true);
    } else {
      setSuccessModalOpen(true); // Also open the modal on failure
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Confirm Your Pickup Locations</h1>
      <p className="text-sm text-gray-500 mb-4">
        Review where your items are reserved before proceeding.
      </p>

      {/* Render the list of reserved items grouped by pharmacy */}
      {Object.keys(groupedItems).length > 0 ? (
        Object.keys(groupedItems).map((pharmacyName, index) => (
          <div key={index} className="border rounded-lg border-gray-300 mb-4">
            <div className="bg-[#F6F9FF] p-4 flex items-center">
              {/* Render image next to pharmacy name */}
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
                {/* Pharmacy address placed below the pharmacy name */}
                <p className="text-[#6B6F72] text-sm">
                  {groupedItems[pharmacyName][0].address ||
                    "Maple Avenue 12, Florence, ME 20123, Italy"}
                </p>
              </div>
            </div>

            {/* Render products for this pharmacy */}
            <div className="p-2">
              {groupedItems[pharmacyName].map((item: any, itemIndex: number) => (
                <div key={itemIndex} className="flex justify-between p-2 text-[#1E3862]">
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
        <p>No items found in the reservation.</p>
      )}

      <div className="bg-[#F6F9FF] p-2 rounded-lg">
        <p className="text-sm text-gray-500 mb-1">
          *You will need to collect items from all selected pharmacies
        </p>
        <p className="text-sm text-gray-500 mb-4">
          *Payment confirms your reservation. Items will be held for pickup at the Showroom.
        </p>
      </div>

      <div className="flex justify-end mt-4 gap-2 font-inter">
        <button
          onClick={onBack}
          className="text-[#1E3862] py-2 px-4 rounded-lg border border-[#1E3862] hover:bg-[#1E3862] hover:text-white transition"
        >
          Back to Cart
        </button>
        <button
          onClick={handleContinueToPayment} // Show the success or failure modal
          className="bg-[#1E3862] text-white py-2 px-4 rounded-lg border border-[#1E3862] hover:bg-white hover:text-[#1E3862] transition"
        >
          Continue to Payment
        </button>
      </div>

      {/* Payment Success Modal */}
      <PaymentModal
        isOpen={isSuccessModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        orderId="#12345678"
        paidAmount={100}
        pharmaciesCount={4}
        status={paymentStatus} // Pass success or failure status
      />
    </div>
  );
};

export default ReservationSummaryPage;