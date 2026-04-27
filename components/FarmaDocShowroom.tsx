"use client";

import Image from "next/image";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { useRouter } from "next/navigation";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function FarmaDocShowroom() {
  const [openLogin, setOpenLogin] = useState(false);
  const router = useRouter();
  const { t } = useAppTranslation();

  return (
    <div className="flex flex-col sm:flex-row max-w-3xl mx-auto my-8 p-6 rounded-lg bg-white gap-6 items-start font-sans text-gray-700 font-inter">
      
      {/* Text Section */}
      <div className="flex-1 w-full sm:max-w-[calc(100%-350px)]">
        
        <h3 className="text-2xl font-bold text-[#1E3862] mb-2">
          {t("showroom.title")}
        </h3>

        <p className="mb-4 text-sm sm:text-base break-words text-[#6B6F72]">
          {t("showroom.subtitle")}
        </p>

        <h4 className="text-lg font-semibold text-black mb-2">
          {t("showroom.benefitsTitle")}
        </h4>

        <ul className="list-disc list-inside mb-4 text-[#6B6F72] space-y-1 marker:text-yellow-400">
          <li>{t("showroom.benefit1")}</li>
          <li>{t("showroom.benefit2")}</li>
          <li>{t("showroom.benefit3")}</li>
          <li>{t("showroom.benefit4")}</li>
        </ul>

        <h4 className="text-lg font-semibold text-black mb-2">
          {t("showroom.notOnTitle")}
        </h4>

        <p className="mb-4 text-sm sm:text-base break-words text-[#6B6F72]">
          {t("showroom.notOnDesc")}
        </p>

        <button
          onClick={() => router.push("/promote-on-farmadoc")}
          className="bg-[#33B1FF] hover:bg-blue-700 text-white font-semibold px-28 py-3 rounded transition-colors duration-300"
        >
          {t("showroom.joinBtn")}
        </button>
      </div>

      {/* Image Section (UNCHANGED) */}
      <div className="w-full sm:w-[350px] h-[350px] rounded-md overflow-hidden relative flex-shrink-0">
        <Image
          src="/images/farmashowroom.png"
          alt="FarmaDoc Showroom"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {openLogin && (
        <LoginModal
          onClose={() => setOpenLogin(false)}
          initialStep="pharmacySignup"
        />
      )}
    </div>
  );
}