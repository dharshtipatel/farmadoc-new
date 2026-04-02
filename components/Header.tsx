"use client";
import Image from "next/image";
import { MapPin, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  subItems?: string[];
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
    { label: "Self-Medication", subItems: ["Option 1", "Option 2"] },
    { label: "Supplements", subItems: ["Option 1", "Option 2"] },
    { label: "Personal Care", subItems: ["Option 1", "Option 2"] },
    { label: "Sell on FarmaDoc" },
    { label: "Inside Farma Doc", subItems: ["About Us", "Blog"] },
  ],
  cartCount = 0,
  showSearch = true,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full bg-white border-b border-[#E6EDF2] fixed top-0 left-0 z-50">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 gap-4">
        
        {/* LEFT SECTION: Logo + Location */}
        <div className="flex items-center gap-4 flex-wrap flex-1 min-w-0 order-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={228}
              height={30}
              priority
              className="object-contain"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

          {/* Location */}
          <div className="flex flex-col min-w-[140px] sm:min-w-[198px] font-inter">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={16} />
              Your Location
            </div>
            <div className="flex items-center gap-1 text-[#1E3862] font-semibold cursor-pointer">
              {location.city} {location.code}
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* SEARCH BOX */}
        {showSearch && (
          <form className="left-1/2 transform -translate-x-1/2 order-3 sm:order-2 flex-1 min-w-[150px] w-full sm:max-w-[400px] py-2">
            <div className="flex items-center bg-white border border-[#243b5e] rounded-xl px-3 py-2 w-full">
              <Search className="text-[#243b5e] mr-2" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="What are you looking for ?"
                className="w-full outline-none text-gray-600 text-sm sm:text-base"
              />
            </div>
          </form>
        )}

        {/* RIGHT SECTION: Language, User, Cart */}
        <div className="flex items-center gap-4 flex-shrink-0 order-2 sm:order-3">
          {/* Language */}
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <Image
              src="/images/lang.svg"
              alt="Lang"
              width={36}
              height={24}
              priority
              className="object-contain"
            />
            <span className="text-xs font-inter">{languages[0]}</span>
          </div>

          {/* User */}
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <Image
              src="/images/login_icon.svg"
              alt="User"
              width={36}
              height={24}
              priority
              className="object-contain"
            />
            <span className="text-xs font-inter">Log in</span>
          </div>

          {/* Cart */}
          <div className="flex flex-col items-center gap-1 cursor-pointer relative">
            <Image
              src="/images/cart.svg"
              alt="Cart"
              width={36}
              height={24}
              priority
              className="object-contain"
            />
            <span className="text-xs font-inter">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="border-t border-[#E6EDF2] bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap gap-2 sm:gap-[60px] text-[14px] font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer whitespace-nowrap"
            >
              <div className="flex items-center gap-1">
                {item.label}
                {item.subItems && <ChevronDown size={14} />}
              </div>

              {/* Dropdown Menu */}
              {item.subItems && (
                <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white rounded-md py-2 z-10 min-w-[140px]">
                  {item.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}