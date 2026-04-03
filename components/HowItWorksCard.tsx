// components/HowItWorksCard.tsx
import { ChevronRight } from "lucide-react";

interface HowItWorksCardProps {
  imageSrc: string;
  altText: string;
  title: string;
}

export function HowItWorksCard({ imageSrc, altText, title }: HowItWorksCardProps) {
  return (
  <div className="flex items-center justify-between w-full min-h-[84px] bg-white rounded-[8px] border border-[#D6DADD] pt-[8px] pr-[16px] pb-[8px] pl-[8px]">
  
  <div className="flex items-center gap-[12px]">
    <img src={imageSrc} alt={altText} className="w-[84px] h-[68px]" />
    <span className="font-semibold text-[16px]">{title}</span>
  </div>

  <div className="bg-gray-100 p-2 rounded-full">
    <ChevronRight size={20} />
  </div>

</div>
  );
}