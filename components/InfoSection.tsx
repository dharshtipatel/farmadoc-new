"use client";

import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

type PaymentMethod = {
  name: string;
  icon: string;
};

type InfoSectionProps = {
  type: "showroom" | "pharmacy"; // pass type explicitly
  about: string;
  loyaltyInfo?: string;
  paymentMethods?: PaymentMethod[];
  policies?: string[];
};

export default function InfoSection({
  type,
  about,
  loyaltyInfo,
  paymentMethods,
  policies,
}: InfoSectionProps) {
  const { t } = useAppTranslation();
  // Determine heading dynamically based on type
  const aboutHeading =
    type === "showroom"
      ? t("infoSection.aboutShowroom")
      : t("infoSection.aboutPharmacy");

  return (
    <div className="w-full font-inter max-w-[900px]">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">{t("infoSection.title")}</h2>

      {/* About */}
      {about && (
        <div className="mb-6">
          <h5 className="font-bold text-[18px] mb-1">{aboutHeading}</h5>
          <p className="text-sm text-[#6B6F72] leading-relaxed">{about}</p>
        </div>
      )}

      {/* Loyalty */}
      {loyaltyInfo && (
        <div className="mb-6">
          <h3 className="font-bold text-[18px] mb-1">{t("infoSection.loyaltyCardAccepted")}</h3>
          <p className="text-sm text-[#6B6F72] leading-relaxed">{loyaltyInfo}</p>
        </div>
      )}

      {/* Payment Methods */}
      {paymentMethods && paymentMethods.length > 0 && (
        <div className="mb-6">
          <h3 className="font-bold text-[18px] mb-3">{t("infoSection.paymentMethods")}</h3>
          <p className="text-sm text-gray-500 mb-4">
            {t("infoSection.paymentOptionsAvailable")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-full overflow-x-auto">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex flex-col justify-start border rounded-lg p-4 border-[#D6DADD] min-h-[120px]"
              >
                <div className="w-12 h-12 relative mb-3">
                  <Image
                    src={method.icon}
                    alt={method.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="48px"
                  />
                </div>
                <span className="text-s text-[#6B6F72]">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Policies */}
      {policies && policies.length > 0 && (
        <div>
          <h3 className="font-bold text-[18px] mb-3">{t("infoSection.reservationPickupPolicy")}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {policies.map((policy, index) => (
              <li key={index} className="text-sm text-[#6B6F72]">
                {policy}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
