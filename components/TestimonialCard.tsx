import Image from "next/image";

interface TestimonialCardProps {
  title: string;
  quote: string;
  author: string;
  rating: number; // 0 to 5 stars
  quotationIconSrc?: string; // optional, default to your SVG path
}

export default function TestimonialCard({
  title,
  quote,
  author,
  rating,
  quotationIconSrc = "/images/quotation-mark.svg",
}: TestimonialCardProps) {
  return (
    <div className="w-full sm:max-w-[314px] h-auto p-4 sm:p-2 bg-[#EDF2FB] rounded-lg relative">
      
      {/* Title and Quotation Mark */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <h3 className="italic font-bold text-[16px] sm:text-[18px] text-[#000000] font-times">
          {title}
        </h3>
        <Image
          src={quotationIconSrc}
          alt="Quotation marks"
          width={36}
          height={36}
          className="select-none pointer-events-none sm:w-12 sm:h-12"
        />
      </div>

      {/* Quote */}
      <p className="italic text-[14px] sm:text-[16px] text-[#6B6F72] mb-2 leading-relaxed font-times">
        {quote}
      </p>

      {/* Author */}
      <p className="font-bold text-[14px] sm:text-[16px] text-[#000000] mb-1">
        {author}
      </p>

      {/* Star rating */}
      <div className="flex space-x-1 mt-1">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118l-3.39-2.463a1 1 0 00-1.175 0l-3.39 2.463c-.784.57-1.838-.196-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
    </svg>
  );
}