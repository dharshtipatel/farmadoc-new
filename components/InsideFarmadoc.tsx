"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function InsideFarmaDoc() {
  const { t } = useAppTranslation();

  const menuItems = [
    {
      iconSrc: "/images/whoweare.png",
      label: t("inside.whoWeAre"),
      alt: t("inside.whoWeAre"),
      href: "/who-we-are",
    },
    {
      iconSrc: "/images/mission.png",
      label: t("inside.mission"),
      alt: t("inside.mission"),
      href: "/mission",
    },
    {
      iconSrc: "/images/howitworks.png",
      label: t("inside.howItWorks"),
      alt: t("inside.howItWorks"),
      href: "/how-it-works",
    },
    {
      iconSrc: "/images/faqs.png",
      label: t("inside.faqs"),
      alt: t("inside.faqs"),
      href: "/faqs",
    },
    {
      iconSrc: "/images/contactus.png",
      label: t("inside.contact"),
      alt: t("inside.contact"),
      href: "/contact",
    },
  ];

  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
      <ul className="flex flex-col gap-3 font-inter">
        {menuItems.map(({ iconSrc, alt, label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2"
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