"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function ProfileDrawer({ onClose }: { onClose: () => void }) {
  const { t } = useAppTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/85"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-[314px] h-full bg-white shadow-lg p-8 flex flex-col">
        
        {/* Header */}
        <div className="flex items-start gap-3 mb-6">
          
          <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">
            MS
          </div>

          <div className="flex flex-col flex-1">
            
            <div className="flex items-center justify-between">
              <div className="font-semibold font-inter">
                Mahavir Singh
              </div>

              <button
                className="text-gray-500 hover:text-gray-700 text-xs w-[16px] h-[16px] flex items-center justify-center"
                onClick={onClose}
              >
                ✕
              </button>
            </div>

            <div className="text-sm text-[#1192E8] font-inter">
              mahavir@exampleemail.com
            </div>

          </div>
        </div>

        {/* Menu Label */}
        <label className="text-[12px] font-medium mb-6 text-[#6B6F72] font-inter">
          {t("profiledrawer.menu")}
        </label>

        {/* Menu */}
        <div className="flex flex-col gap-5 text-[#1E3862] text-[14px]">

          <Link
            href="/myorders"
            className="flex items-center gap-2 hover:text-blue-600"
            onClick={onClose}
          >
            <Image src="/images/ordericon.svg" alt="orders" width={22} height={22} />
            <span>{t("profiledrawer.myOrders")}</span>
          </Link>

          <Link
            href="/saveditems"
            className="flex items-center gap-2 hover:text-blue-600"
            onClick={onClose}
          >
            <Heart size={22} />
            <span>{t("profiledrawer.savedItems")}</span>
          </Link>

          <Link
            href="/notifications"
            className="flex items-center gap-2 hover:text-blue-600"
            onClick={onClose}
          >
            <Image src="/images/notificationicon.svg" alt="notifications" width={22} height={22} />
            <span>{t("profiledrawer.notifications")}</span>
          </Link>

          <Link
            href="/profilesettings"
            className="flex items-center gap-2 hover:text-blue-600"
            onClick={onClose}
          >
            <Image src="/images/profilesetting.svg" alt="settings" width={22} height={22} />
            <span>{t("profiledrawer.profileSettings")}</span>
          </Link>

        </div>

        {/* Logout */}
        <div className="mt-auto pt-6">
          <button className="flex items-center gap-2 text-[#1E3862] text-[14px] font-medium font-inter">
            <Image src="/images/logout.svg" alt="logout" width={22} height={22} />
            <span>{t("profiledrawer.logout")}</span>
          </button>
        </div>

      </div>
    </div>
  );
}