"use client";

import { useAppTranslation } from "@/lib/useAppTranslation";

export default function CartSummary({
  cartTotal,
  platformFee,
  totalDiscount,
  couponDiscount,
  onApplyCoupon,
  couponCode,
  setCouponCode,
  payableAmount,
  onPayReserve,
  onBookPayStore,
}: {
  cartTotal: number;
  platformFee: number;
  totalDiscount: number;
  couponDiscount: number;
  onApplyCoupon: () => void;
  couponCode: string;
  setCouponCode: (code: string) => void;
  payableAmount: number;
  onPayReserve: () => void;
  onBookPayStore: () => void;
}) {
  const { t } = useAppTranslation();

  return (
    <div className="w-full max-w-sm font-inter text-sm text-[#243b5e]">

      {/* Bordered container for totals */}
      <div className="border rounded border-[#1E3862] p-4 mb-4 bg-[#EDF2FB]">
        <h2 className="font-semibold mb-2">
          {t("cartSummary.billSummary")}
        </h2>

        <div className="space-y-1">

          <div className="flex justify-between pt-2 pb-2">
            <span>{t("cartSummary.cartTotal")}</span>
            <span>€{cartTotal.toFixed(2)}</span>
          </div>

          {/* <div className="flex justify-between pt-2 pb-2">
            <span>{t("cartSummary.platformFee")}</span>
            <span>€{platformFee.toFixed(2)}</span>
          </div> */}

          <div className="flex justify-between pt-2 pb-2">
            <span>{t("cartSummary.totalDiscount")}</span>
            <span className="text-green-600">
              -€{totalDiscount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between pt-2 pb-2">
            <span>{t("cartSummary.couponDiscount")}</span>
            <span className="text-green-600">
              -€{couponDiscount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between pt-2 pb-2 font-bold">
            <span>{t("cartSummary.payableAmount")}</span>
            <span>€{payableAmount.toFixed(2)}</span>
          </div>

        </div>
      </div>

      {/* Save box */}
      <div className="border-2 border-dashed border-green-300 rounded p-4 mb-4 text-[#008B38] font-semibold flex justify-between items-center bg-[#F1FFEE]">
        <span>{t("cartSummary.youSave")}</span>
        <span>€{(totalDiscount + couponDiscount).toFixed(2)}</span>
      </div>

      {/* Coupon */}
      <div className="mb-4">
        <label
          className="block mb-1 text-[#1E3862] font-semibold"
          htmlFor="coupon"
        >
          {t("cartSummary.haveCoupon")}
        </label>

        <div className="relative">
          <input
            id="coupon"
            type="text"
            className="w-full border border-[#1E3862] rounded p-3 pr-16 text-sm"
            placeholder={t("cartSummary.enterCoupon")}
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />

          <span
            onClick={onApplyCoupon}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            {t("cartSummary.apply")}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={onPayReserve}
        className="w-full bg-[#14253D] text-white py-3 rounded mb-2 font-semibold hover:bg-[#0f1d30]"
      >
        {t("cartSummary.payReserve")}
      </button>

      <button
        onClick={onBookPayStore}
        className="w-full border border-[#0f1d30] py-3 rounded font-semibold hover:bg-gray-100"
      >
        {t("cartSummary.bookPayStore")}
      </button>

    </div>
  );
}