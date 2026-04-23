import Image from "next/image";
import Link from "next/link";

type FactoryCardProps = {
  title: string;
  date: string;
  category: string;
  image: string;
  href?: string;
};

export default function FactoryCard({
  title,
  date,
  category,
  image,
  href,
}: FactoryCardProps) {
  const cardContent = (
    <div className="max-w-[305px] overflow-hidden rounded-2xl border border-[#D6DADD] bg-white transition hover:shadow-md">
      <div className="relative w-full h-[168px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="text-[12px] font-medium text-[#6B6F72] font-helvetica flex gap-2">
          <span>{date}</span>
          <span>|</span>
          <span>{category}</span>
        </div>

        <h2 className="text-[18px] font-semibold font-inter text-[#1E3862] leading-snug">
          {title}
        </h2>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block max-w-[305px] cursor-pointer">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
