import Image from "next/image";

type BrandCardProps = {
  image: string;
  alt?: string;
  showBadge?: boolean;
};

export default function BrandCard({ image, alt = "logo", showBadge = true }: BrandCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 w-full max-w-[197px] h-[140px] relative border border-gray-200">
      {showBadge && (
        <Image
          src="/images/star_badge.png"
          alt="badge"
          width={28}
          height={28}
          className="absolute top-2 left-2"
        />
      )}

      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
  );
}