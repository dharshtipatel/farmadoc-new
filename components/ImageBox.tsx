"use client";
import Image from "next/image";
import { useState } from "react";

type ImageBoxProps = {
  images: string[];
  thumbSize?: number;
  visibleThumbs?: number;
};

export default function ImageBox({
  images,
  thumbSize = 88,
  visibleThumbs = 5,
}: ImageBoxProps) {
  const [showExtra, setShowExtra] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const extraCount = images.length - visibleThumbs;

  const visibleImages = images.slice(0, visibleThumbs);
  const extraImages = images.slice(visibleThumbs);

  return (
    <div className="flex gap-6 max-w-7xl mx-auto px-6 py-5">

      {/* Thumbnail column */}
      <div
        className={`flex flex-col ${
          showExtra
            ? "gap-4"
            : "justify-between h-[475px]"
        }`}
      >
        {visibleImages.map((src, idx) => {
          const isLast = idx === visibleThumbs - 1 && extraCount > 0;
          const isSelected = selectedIndex === idx;

          return (
            <div
              key={idx}
              onClick={() => {
                if (isLast && !showExtra) {
                  setShowExtra(true);
                  return;
                }
                setSelectedIndex(idx);
              }}
              className={`relative w-[88px] h-[88px] rounded-lg cursor-pointer overflow-hidden 
              ${
                isSelected
                  ? "border-2 border-[#33B1FF]"
                  : "border border-[#EEF2F5]"
              }`}
            >
              <Image
                src={src}
                alt={`thumb-${idx}`}
                width={thumbSize}
                height={thumbSize}
                className={`object-contain rounded-lg transition ${
                  isLast && !showExtra ? "blur-[3px]" : ""
                }`}
                unoptimized
              />

              {isLast && !showExtra && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-lg">
                  +{extraCount}
                </div>
              )}
            </div>
          );
        })}

        {/* Extra thumbnails */}
        {showExtra &&
          extraImages.map((src, idx) => {
            const actualIndex = idx + visibleThumbs;
            const isSelected = actualIndex === selectedIndex;

            return (
              <div
                key={actualIndex}
                onClick={() => setSelectedIndex(actualIndex)}
                className={`w-[88px] h-[88px] rounded-lg cursor-pointer overflow-hidden
                ${
                  isSelected
                    ? "border-2 border-[#33B1FF]"
                    : "border border-[#EEF2F5]"
                }`}
              >
                <Image
                  src={src}
                  alt={`thumb-${actualIndex}`}
                  width={thumbSize}
                  height={thumbSize}
                  className="object-contain rounded-lg"
                  unoptimized
                />
              </div>
            );
          })}
      </div>

      {/* Large Image */}
      <div className="relative w-[522px] h-[475px] overflow-hidden">
        <Image
          src={images[selectedIndex]}
          alt="product"
          fill
          sizes="450px"
          priority
          className="object-contain"
        />
      </div>

    </div>
  );
}