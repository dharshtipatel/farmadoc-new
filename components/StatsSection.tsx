import Image from "next/image";

const stats = [
  {
    icon: "/images/wallet.svg",
    value: "€2.4M+",
    label: "Saved by customers",
  },
  {
    icon: "/images/water.svg",
    value: "18T",
    label: "Of waste prevented (kg)",
  },
  {
    icon: "/images/family.svg",
    value: "120K+",
    label: "Families served",
  },
  {
    icon: "/images/pharmacy.svg",
    value: "850+",
    label: "Pharmacy partners",
  },
];

export default function StatsSection() {
  return (
    <section className="mb-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

        {stats.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 bg-white"
          >
            {/* Icon + value */}
            <div className="flex items-center gap-3">
              <Image
                src={item.icon}
                alt={item.label}
                width={48}
                height={48}
              />
              <span className="text-[36px] font-medium text-[#1E3862] font-helvetica">
                {item.value}
              </span>
            </div>

            {/* Label */}
            <p className="text-[16px] font-inter text-[#6B6F72]">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}