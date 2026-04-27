import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

export default function WhyChooseFarmaDoc() {
  const { t } = useAppTranslation();

  const features = [
    {
      icon: "/images/verify1.svg",
      titleKey: "whyChoose.features.waste"
    },
    {
      icon: "/images/verify1_1.svg",
      titleKey: "whyChoose.features.save"
    },
    {
      icon: "/images/verify3.svg",
      titleKey: "whyChoose.features.pickup"
    },
    {
      icon: "/images/verify1_2.svg",
      titleKey: "whyChoose.features.pharmacist"
    },
    {
      icon: "/images/verify1_3.svg",
      titleKey: "whyChoose.features.transparent"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-5 relative">
      <div className="border border-gray-200 rounded-md overflow-hidden p-6 sm:p-10">
      
        <h2 className="text-[24px] sm:text-[26px] font-bold text-[#1E3862]">
          {t("whyChoose.title")}
        </h2>

        <p className="text-[#6B6F72] max-w-full sm:max-w-[1027px] text-[14px] mt-4 leading-relaxed">
          {t("whyChoose.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={t(item.titleKey)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="bg-[#EDF2FB] rounded-lg p-4 flex flex-col gap-2 h-auto sm:h-[116px] items-start">
      <Image src={icon} alt="icon" width={40} height={40} />
      <p className="font-semibold text-[#1E3862] text-[16px] font-inter">
        {title}
      </p>
    </div>
  );
}