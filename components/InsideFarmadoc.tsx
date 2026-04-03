import Image from "next/image";

const menuItems = [
  {
    iconSrc: "/images/whoweare.png",
    alt: "Who we are",
    label: "Who we are",
  },
  {
    iconSrc: "/images/mission.png",
    alt: "Our Mission",
    label: "Our Mission",
  },
  {
    iconSrc: "/images/howitworks.png",
    alt: "How it Works",
    label: "How it Works",
  },
  {
    iconSrc: "/images/faqs.png",
    alt: "FAQ’s",
    label: "FAQ’s",
  },
  {
    iconSrc: "/images/contactus.png",
    alt: "Contact Us",
    label: "Contact Us",
  },
];

export default function InsideFarmaDoc() {
  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
      <ul className="flex flex-col gap-3 font-inter">
        {menuItems.map(({ iconSrc, alt, label }) => (
          <li key={label} className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-md p-2">
            <div className="w-6 h-6 relative flex-shrink-0">
              <Image src={iconSrc} alt={alt} fill style={{ objectFit: "contain" }} />
            </div>
            <span className="font-semibold text-black">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}