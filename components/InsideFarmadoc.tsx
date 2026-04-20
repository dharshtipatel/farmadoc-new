import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    iconSrc: "/images/whoweare.png",
    alt: "Who we are",
    label: "Who we are",
    href: "/who-we-are",
  },
  {
    iconSrc: "/images/mission.png",
    alt: "Our Mission",
    label: "Our Mission",
    href: "/mission",
  },
  {
    iconSrc: "/images/howitworks.png",
    alt: "How it Works",
    label: "How it Works",
    href: "/how-it-works",
  },
  {
    iconSrc: "/images/faqs.png",
    alt: "FAQ’s",
    label: "FAQ’s",
    href: "/faqs",
  },
  {
    iconSrc: "/images/contactus.png",
    alt: "Contact Us",
    label: "Contact Us",
    href: "/contact",
  },
];

export default function InsideFarmaDoc() {
  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
      <ul className="flex flex-col gap-3 font-inter">
        {menuItems.map(({ iconSrc, alt, label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-md p-2"
            >
              <div className="w-6 h-6 relative flex-shrink-0">
                <Image
                  src={iconSrc}
                  alt={alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="font-semibold text-black">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}