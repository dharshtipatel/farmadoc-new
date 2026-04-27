"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAppTranslation } from "@/lib/useAppTranslation";

type Variant = {
  id: string;
  count: string;
  pack: string;
  price: number;
  oldPrice: number;
};

const variants: Variant[] = [
  { id: "v1", count: "30 Counts", pack: "Pack of 1", price: 37.0, oldPrice: 87.0 },
  { id: "v2", count: "60 Counts", pack: "Pack of 2", price: 65.0, oldPrice: 120.0 },
  { id: "v3", count: "90 Counts", pack: "Pack of 3", price: 90.0, oldPrice: 150.0 },
  { id: "v4", count: "120 Counts", pack: "Pack of 4", price: 110.0, oldPrice: 180.0 },
];

export default function Productinfo({ type }: { type: string }) {
  const { t } = useAppTranslation();

  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0));

  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div className="max-w-[630px] w-full p-4 sm:p-6">

      {/* Title */}
      <h1 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#1E3862]">
        Flu-Ex Com Foundation Spf15 33
      </h1>

      {/* Store */}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-[#1E3862]">
        <Image src="/images/location.svg" alt="location" width={18} height={18} />

        <p className="text-sm break-words">
          Herba Salus Parapharmacy, Via Gramsci, 211/b..
        </p>

        <div className="ml-auto flex items-center gap-2">
          <div className="border rounded-md p-1">
            <Heart size={16} />
          </div>
          <div className="border rounded-md p-1">
            <Image src="/images/Share.svg" alt="share" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 bg-[#F8F8F8] border border-[#EDF2FB] rounded-md p-4 space-y-2">

        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <span className="text-xl sm:text-2xl font-bold text-[#1E3862]">
            €{variants[selected].price}
          </span>

          <span className="text-gray-400 line-through text-sm sm:text-base">
            €{variants[selected].oldPrice}
          </span>

          <span className="bg-[#FBE7E7] px-2 py-1 text-xs font-semibold text-[#D62828] rounded">
            {t("productinfo.off")}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="text-[#1E3862]">
            {t("productinfo.boughtRecently")}
          </span>

          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

          <span className="text-[#D62828]">
            {t("productinfo.expiresOn")} 26 Dec, 2026
          </span>
        </div>

      </div>

      {/* Variants */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {variants.map((variant, index) => {
          const isSelected = selected === index;

          return (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`flex flex-col rounded-lg border w-full transition
                ${isSelected ? "border-blue-500" : "border-gray-200"}
              `}
            >
              <div
                className={`py-2 text-center rounded-t-lg text-xs sm:text-sm
                  ${isSelected ? "bg-[#33B1FF] text-white" : "bg-[#E5F6FF]"}
                `}
              >
                <p className="font-semibold">{variant.count}</p>
                <p className="text-xs">({variant.pack})</p>
              </div>

              <div className="px-2 py-2 text-left">
                <p className={`text-sm font-semibold ${isSelected ? "text-[#33B1FF]" : ""}`}>
                  €{variant.price}
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <p className="text-xs line-through text-gray-400">
                    €{variant.oldPrice}
                  </p>
                  <p className="text-xs font-semibold">
                    {t("productinfo.off")}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Actions */}
      {type?.toLowerCase() === "showroom" && (
        <div className="mt-8 flex flex-col sm:flex-row gap-3">

          {/* Add to cart */}
          <div className="w-full sm:flex-1">
            {quantity === 0 ? (
              <button
                className="w-full h-[52px] flex items-center justify-center gap-2 border border-blue-500 rounded-lg text-blue-600"
                onClick={() => setQuantity(1)}
              >
                <Image src="/images/cart.svg" alt="cart" width={20} height={20} />
                {t("productinfo.addToCart")}
              </button>
            ) : (
              <div className="w-full h-[52px] flex items-center border border-blue-500 rounded-lg">
                <button className="px-4" onClick={decrement}>-</button>
                <span className="flex-1 text-center">{quantity}</span>
                <button className="px-4" onClick={increment}>+</button>
              </div>
            )}
          </div>

          {/* Book Now */}
          <button
            className="w-full sm:flex-1 h-[52px] flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg"
            onClick={() => {
              if (quantity <= 0) {
                alert(t("productinfo.selectQuantity"));
                return;
              }

              const selectedVariant = variants[selected];

              addToCart({
                id: selectedVariant.id,
                name: "Flu-Ex Com Foundation Spf15 33",
                price: selectedVariant.price,
                quantity,
                variant: {
                  count: selectedVariant.count,
                  pack: selectedVariant.pack,
                  oldPrice: selectedVariant.oldPrice,
                },
              });

              setQuantity(0);
              router.push("/cart");
            }}
          >
            <Image src="/images/cart.svg" alt="cart" width={20} height={20} />
            {t("productinfo.bookNow")}
          </button>

        </div>
      )}

      {/* Footer icons */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-xs text-gray-500 text-center">
        {[
          { icon: "/images/return.svg", label: t("productinfo.noReturns") },
          { icon: "/images/authentic_productinfo.svg", label: t("productinfo.authentic") },
          { icon: "/images/return.svg", label: t("productinfo.noReturns") },
          { icon: "/images/secure_payment.svg", label: t("productinfo.securePayment") },
          { icon: "/images/secure_payment.svg", label: t("productinfo.securePayment") },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#EDF2FB] rounded-full flex items-center justify-center mb-2">
              <img src={item.icon} className="w-5 h-5" />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}