"use client";
import Image from "next/image";
import { MapPin, ChevronDown, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import SubMenu from "./SubMenu";
import FarmaDocShowroom from "./FarmaDocShowroom";
import InsideFarmaDoc from "./InsideFarmadoc";
import LoginModal from "./LoginModal";
import ProfileDrawer from "./ProfileDrawer";
import MapCard from "./MapCard";

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

export default function Header({
  location = { city: "Herba Salus", code: "390003" },
  languages = ["EN", "FR", "ES"],
  navItems = [
    {
      label: "Self-Medication",
      categoriesData: [
        {
          name: "Homeopathy",
          content: "Homeopathy related medicines",
          deals: [
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
        },
        {
          name: "Stomach & Intestine",
          content: "Digestive medicines",
          deals: [
            {
              id: 2,
              imageSrc: "/images/medi2.png",
              title: "Medicine 2",
              price: 99.0,
              oldPrice: 130.0,
              discountPercent: 25,
              offerEndsIn: "3H",
            },
            {
              id: 3,
              imageSrc: "/images/medi2.png",
              title: "Medicine 2",
              price: 99.0,
              oldPrice: 130.0,
              discountPercent: 25,
              offerEndsIn: "3H",
            },
          ],
        },
      ],
    },
    { label: "Supplements" },
    { label: "Personal Care" },
    { label: "Sell on FarmaDoc" },
    { label: "Inside Farma Doc" },
  ],
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

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (openMapPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openMapPopup]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setOpenLogin(false);
  };

  return (
    <header className="w-full bg-white border-b border-[#E6EDF2] fixed top-0 left-0 z-50">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 gap-2 sm:gap-4">
        {/* LEFT SECTION: Logo + Divider + Location */}
        <div className="flex items-center gap-2 flex-shrink-0 order-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Hamburger (mobile only) */}
            <div
              className="sm:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={228}
                height={30}
                priority
                className="object-contain w-[110px] sm:w-[228px]"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

          {/* Location */}
          <div 
            className="hidden sm:flex flex-col min-w-[140px] sm:min-w-[198px] font-inter cursor-pointer"
            onClick={() => setOpenMapPopup(true)}
          >
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={16} />
              Your Location
            </div>
            <div className="flex items-center gap-1 text-[#1E3862] font-semibold">
              {location.city} {location.code}
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
              </div>

        {/* SEARCH BOX */}
        {showSearch && (
          <form className="order-2 flex-1 mx-2 sm:mx-0 max-w-full sm:max-w-[400px] py-2">
            <div className="flex items-center bg-white border border-[#243b5e] rounded-xl px-3 py-2 w-full min-w-0">
              <Search className="text-[#243b5e] mr-2" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for ?"
                className="w-full min-w-0 outline-none text-gray-600 text-sm sm:text-base"
              />
            </div>
          </form>
        )}

        {/* RIGHT SECTION: Language + User + Cart */}
        <div className="flex items-center gap-3 flex-shrink-0 order-3">
  
          {/* Language + User (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language */}
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <Image src="/images/lang.svg" alt="Lang" width={36} height={24} />
              <span className="text-xs font-inter">{languages[0]}</span>
            </div>

            </div>

            {/* User */}
            <div
              className="flex flex-col items-center gap-1 cursor-pointer"
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
              <span className=" hidden sm:flex text-xs font-inter">{isLoggedIn ? "Profile" : "Log in"}</span>
            </div>

            {/* Modal */}
            {openLogin && <LoginModal onClose={() => setOpenLogin(false)} onLoginSuccess={handleLoginSuccess} />}

            {openProfileDrawer && (
              <ProfileDrawer onClose={() => setOpenProfileDrawer(false)} />
            )}
          

          {/* Cart (always visible) */}
          <div className="flex flex-col items-center gap-1 cursor-pointer relative flex-shrink-0">
            <Image src="/images/cart.svg" alt="Cart" width={36} height={24} />
            <span className="hidden sm:flex text-xs font-inter">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 z-50 bg-white flex flex-col"
        >
          {/* Top Row */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            {/* Left: Location */}
            <div className="flex items-center gap-1 font-inter text-sm font-semibold text-[#1E3862]">
              <MapPin size={16} />
              {location.city} {location.code}
            </div>

            {/* Right: Language + Close */}
            <div className="flex items-center gap-4">
              {/* Language */}
              <div className="flex items-center gap-1 cursor-pointer">
                <Image src="/images/lang.svg" alt="Lang" width={24} height={16} />
                <span className="text-xs">{languages[0]}</span>
              </div>

              {/* Close Button */}
              <div
                className="cursor-pointer text-gray-600 text-xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </div>
            </div>
          </div>

          {/* Scrollable Menu Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-3">
                {/* Parent Item */}
                <div
                  className="flex items-center justify-between font-medium cursor-pointer"
                  onClick={() =>
                    setHoveredIndex(hoveredIndex === index ? null : index)
                  }
                >
                  {item.label}
                  {item.categoriesData && <ChevronDown size={16} />}
                </div>

                {/* Dropdown */}
                {hoveredIndex === index && item.categoriesData && (
                  <div className="mt-2 ml-2">
                    {item.categoriesData.map((cat, i) => (
                      <div key={i} className="mb-2">
                        <div className="font-semibold text-sm">{cat.name}</div>
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
      {/* NAVIGATION */}
      <nav className="hidden sm:block border-t border-[#E6EDF2] bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap gap-2 sm:gap-[60px] text-[14px] font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative whitespace-nowrap flex-shrink-0"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                {item.label}
                {item.categoriesData && <ChevronDown size={14} />}
              </div>

              {hoveredIndex === index && (
                <div
                  className="absolute left-0 top-full z-50"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.label === "Sell on FarmaDoc" ? (
                    <FarmaDocShowroom />
                  ) : item.label === "Inside Farma Doc" ? (
                    <InsideFarmaDoc />
                  ) : (
                    item.categoriesData && <SubMenu categoriesData={item.categoriesData} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Map Popup Modal */}
      {openMapPopup && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[50]" onClick={() => setOpenMapPopup(false)}>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <MapCard onClose={() => setOpenMapPopup(false)} showButtonOnMap={true} />
            </div>
        </div>
      )}
    </header>
  );
}