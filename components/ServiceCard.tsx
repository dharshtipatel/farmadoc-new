import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  onBook?: () => void;
};

export default function ServiceCard({
  title,
  description,
  price,
  originalPrice,
  discount,
  image,
  onBook,
}: ServiceCardProps) {
  return (
    <div className="w-full max-w-[305px] h-auto rounded-2xl border border-[#D6DADD] p-4 bg-white flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center mb-2">
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="font-semibold text-gray-900 text-sm sm:text-[14px]">
          {title}
        </h3>

        <p className="text-xs sm:text-[12px] text-gray-500 mt-1">
          {description}
        </p>

        {/* Price Row */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="font-semibold text-[#1E3862] text-sm">
            €{price.toFixed(2)}
          </span>

          {originalPrice && (
            <span className="text-xs text-[#6B6F72]">
              €{originalPrice.toFixed(2)}
            </span>
          )}

          {discount && (
            <span className="text-[10px] text-[#D62828] bg-[#FBE7E7] px-2 py-0.5 rounded font-bold">
              {discount}% Off
            </span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="gap-2 mt-2">

        <button
          onClick={onBook}
          className="min-w-[135px] h-[35px] flex-1 bg-white text-[#33B1FF] text-xs sm:text-sm rounded border border-[#33B1FF] hover:bg-blue-50 transition"
        >
          Book Online
        </button>
      </div>
    </div>
  );
}