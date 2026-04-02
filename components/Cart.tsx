"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return <p className="text-gray-500 mt-4">Your cart is empty.</p>;
  }

  return (
    <div className="mt-4 space-y-4 w-full max-w-[819px] border border-[#D6DADD] rounded font-inter">
    {items.map((item) => (
      <div
        key={item.id}
        className="relative flex flex-wrap sm:flex-nowrap p-2 bg-white rounded"
      >
        {/* Remove Icon (Top Right) */}
        <button
          className="absolute top-2 right-2 z-10"
          onClick={() => removeItem(item.id)}
        >
          <Image src="/images/remove.svg" alt="Remove" width={32} height={32} />
        </button>

        {/* Product Image */}
        <div className="flex-shrink-0 w-full sm:w-[116px] mb-2 sm:mb-0">
          <Image
            src={item.image || "/images/2.png"}
            alt={item.name}
            width={116}
            height={116}
            className="rounded w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 ml-0 sm:ml-4 w-full sm:w-auto">
          <h3 className="font-semibold text-[#1E3862] text-sm sm:text-base">{item.name}</h3>

          <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm flex-wrap">
            <Image src="/images/location.svg" alt="location" width={18} height={18} />
            <p className="text-[#6B6F72] break-words">{item.store || "Herba Salus Parapharmacy, Via Gramsci, 211/b.."}</p>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            ({item.variant.pack}) {item.variant.count}
          </p>

          <p className="text-sm font-bold text-[#243b5e] flex items-center gap-2 mt-1 flex-wrap">
            €{(item.price * item.quantity).toFixed(2)}
            {item.variant.oldPrice && (
              <>
                <span className="line-through text-gray-400 text-xs">
                  €{(item.variant.oldPrice * item.quantity).toFixed(2)}
                </span>
                <span className="bg-[#FBE7E7] text-[#D62828] text-xs px-1 py-0.5 rounded">
                  {Math.round(((item.variant.oldPrice - item.price) / item.variant.oldPrice) * 100)}% OFF
                </span>
              </>
            )}
          </p>
        </div>

        {/* Quantity Controls (Bottom Right) */}
        <div className="ml-0 sm:ml-4 flex flex-col justify-end items-end gap-1 mt-2 sm:mt-0 w-full sm:w-auto">
          <div className="flex items-center gap-1 border border-[#D6DADD] rounded px-1 py-1 w-full sm:w-[109px] h-[34px]">
            <button
              className="px-2 py-1 text-sm font-semibold"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="px-2 text-[12px] text-[#1E3862] font-semibold">Qty {item.quantity}</span>
            <button
              className="px-2 py-1 text-sm font-semibold"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}