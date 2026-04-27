"use client";

import Image from "next/image";
import { MapPin, ChevronDown, Search, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SubMenu from "./SubMenu";
import FarmaDocShowroom from "./FarmaDocShowroom";
import InsideFarmaDoc from "./InsideFarmadoc";
import LoginModal from "./LoginModal";
import ProfileDrawer from "./ProfileDrawer";
import MapCard from "./MapCard";
import { useLanguage } from "@/context/LanguageContext";
import { useAppTranslation } from "@/lib/useAppTranslation";

interface Deal {
  id: number;
  imageSrc: string;
  title: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
  offerEndsIn: string;
}

interface CategoryData {
  name: string;
  content: string;
  deals: Deal[];
}

interface NavItem {
  label: string;
  categoriesData?: CategoryData[];
}

interface HeaderProps {
  location?: { city: string; code: string };
  languages?: string[];
  navItems?: NavItem[];
  cartCount?: number;
  showSearch?: boolean;
}

const defaultDeals: Deal[][] = [
  [
    {
      id: 1,
      imageSrc: "/images/medi1.png",
      title: "Medicine 1",
      price: 120,
      oldPrice: 150,
      discountPercent: 20,
      offerEndsIn: "2H",
    },
  ],
  [
    {
      id: 2,
      imageSrc: "/images/medi2.png",
      title: "Medicine 2",
      price: 99,
      oldPrice: 130,
      discountPercent: 25,
      offerEndsIn: "3H",
    },
    {
      id: 3,
      imageSrc: "/images/medi2.png",
      title: "Medicine 2",
      price: 99,
      oldPrice: 130,
      discountPercent: 25,
      offerEndsIn: "3H",
    },
  ],
];

export default function Header({
  location = { city: "Herba Salus", code: "390003" },
  languages = ["IT", "EN"],
  navItems,
  cartCount = 0,
  showSearch = true,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openProfileDrawer, setOpenProfileDrawer] = useState(false);
  const [openMapPopup, setOpenMapPopup] = useState(false);

  const router = useRouter();
  const { setLang } = useLanguage();
  const { lang, t, get } = useAppTranslation();

  const translatedNavItems = get(
    "header.navItems",
    [] as { label: string; categoriesData?: { name: string; content: string }[] }[]
  );

  const defaultNavItems: NavItem[] = translatedNavItems.map((item) => ({
    label: item.label,
    categoriesData: item.categoriesData?.map((category, index) => ({
      ...category,
      deals: defaultDeals[index] ?? [],
    })),
  }));

  const resolvedNavItems = navItems ?? defaultNavItems;

  const handleLanguageChange = (newLang: "en" | "it") => {
    setLang(newLang);
  };

  useEffect(() => {
    document.body.style.overflow = openMapPopup ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMapPopup]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setOpenLogin(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#E6EDF2] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6">
        <div className="order-1 flex flex-shrink-0 items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </div>

            <div className="flex-shrink-0">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={228}
                height={30}
                priority
                className="w-[110px] object-contain sm:w-[228px]"
              />
            </div>
          </div>

          <div className="hidden h-10 w-px bg-gray-300 sm:block" />

          <div
            className="hidden min-w-[140px] cursor-pointer flex-col font-inter sm:flex sm:min-w-[198px]"
            onClick={() => setOpenMapPopup(true)}
          >
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={16} />
              {t("header.yourLocation")}
            </div>

            <div className="flex items-center gap-1 font-semibold text-[#1E3862]">
              {location.city} {location.code}
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {showSearch && (
          <form className="order-2 mx-2 flex-1 py-2 sm:mx-0 sm:max-w-[400px]">
            <div className="flex w-full min-w-0 items-center rounded-xl border border-[#243b5e] bg-white px-3 py-2">
              <Search className="mr-2 text-[#243b5e]" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("search")}
                className="w-full min-w-0 text-sm text-gray-600 outline-none sm:text-base"
              />
            </div>
          </form>
        )}

        <div className="order-3 flex flex-shrink-0 items-center gap-3">
          <div className="hidden items-center gap-4 sm:flex">
            <div className="flex cursor-pointer flex-col items-center">
              <Image src="/images/lang.svg" alt="Lang" width={36} height={24} />

              <div className="mt-1 flex items-center text-xs font-medium">
                {languages.map((language, index) => {
                  const value = language.toLowerCase() as "en" | "it";
                  return (
                    <div key={language} className="flex items-center">
                      {index > 0 && <span className="text-gray-400">|</span>}
                      <span
                        onClick={() => handleLanguageChange(value)}
                        className={`px-1 ${
                          lang === value
                            ? "font-semibold text-[#1E3862]"
                            : "text-gray-400"
                        }`}
                      >
                        {language}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="flex cursor-pointer flex-col items-center gap-1"
            onClick={() => {
              if (isLoggedIn) {
                setOpenProfileDrawer(true);
              } else {
                setOpenLogin(true);
              }
            }}
          >
            <Image
              src="/images/login_icon.svg"
              alt="User"
              width={36}
              height={24}
            />
            <span className="hidden text-xs font-inter sm:flex">
              {isLoggedIn ? t("profile") : t("login")}
            </span>
          </div>

          {openLogin && (
            <LoginModal
              onClose={() => setOpenLogin(false)}
              onLoginSuccess={handleLoginSuccess}
            />
          )}

          {openProfileDrawer && (
            <ProfileDrawer onClose={() => setOpenProfileDrawer(false)} />
          )}

          <div
            className="relative flex flex-shrink-0 cursor-pointer flex-col items-center gap-1"
            onClick={() => router.push("/cart")}
          >
            <Image src="/images/cart.svg" alt="Cart" width={36} height={24} />
            <span className="hidden text-xs font-inter sm:flex">{t("cart")}</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white sm:hidden">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <div className="flex items-center gap-1 text-sm font-semibold text-[#1E3862]">
              <MapPin size={16} />
              {location.city} {location.code}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image src="/images/lang.svg" alt="Lang" width={24} height={16} />

                <div className="flex items-center text-xs font-medium">
                  {languages.map((language, index) => {
                    const value = language.toLowerCase() as "en" | "it";
                    return (
                      <div key={language} className="flex items-center">
                        {index > 0 && <span className="text-gray-400">|</span>}
                        <span
                          onClick={() => handleLanguageChange(value)}
                          className={`cursor-pointer px-1 ${
                            lang === value
                              ? "font-semibold text-[#1E3862]"
                              : "text-gray-400"
                          }`}
                        >
                          {language}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className="cursor-pointer text-xl font-bold text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                x
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {resolvedNavItems.map((item, index) => (
              <div key={index} className="mb-3">
                <div
                  className="flex cursor-pointer items-center justify-between font-medium"
                  onClick={() =>
                    setHoveredIndex(hoveredIndex === index ? null : index)
                  }
                >
                  {item.label}
                  {item.categoriesData && <ChevronDown size={16} />}
                </div>

                {hoveredIndex === index && item.categoriesData && (
                  <div className="mt-2 ml-2">
                    {item.categoriesData.map((cat, categoryIndex) => (
                      <div key={categoryIndex} className="mb-2">
                        <div className="text-sm font-semibold">{cat.name}</div>
                        <div className="text-xs text-gray-500">{cat.content}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <nav className="hidden border-t border-[#E6EDF2] bg-gray-100 sm:block">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-2 text-[14px] font-medium sm:gap-[60px] sm:px-6">
          {resolvedNavItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 whitespace-nowrap"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="flex cursor-pointer items-center gap-1">
                {item.label}
                {item.categoriesData && <ChevronDown size={14} />}
              </div>

              {hoveredIndex === index && (
                <div
                  className="absolute left-0 top-full z-50"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {index === 3 ? (
                    <FarmaDocShowroom />
                  ) : index === 4 ? (
                    <InsideFarmaDoc />
                  ) : (
                    item.categoriesData && (
                      <SubMenu categoriesData={item.categoriesData} />
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {openMapPopup && (
        <div
          className="fixed inset-0 z-[50] flex items-center justify-center bg-black/85"
          onClick={() => setOpenMapPopup(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <MapCard onClose={() => setOpenMapPopup(false)} showButtonOnMap={true} />
          </div>
        </div>
      )}
    </header>
  );
}
