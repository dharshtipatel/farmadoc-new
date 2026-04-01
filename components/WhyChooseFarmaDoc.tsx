import Image from "next/image";

const features = [
  {
    icon: "/images/verify1.svg",
    title: (
      <>
        Reduce pharmaceutical <br /> waste
      </>
    ),
  },
  {
    icon: "/images/verify1_1.svg",
    title: (
      <>
        Save on Trusted <br /> pharmacy products
      </>
    ),
  },
  {
    icon: "/images/verify3.svg",
    title: (
      <>
        Pick-up locally & find <br /> Trusted
      </>
    ),
  },
  {
    icon: "/images/verify1_2.svg",
    title: (
      <>
        Pharmacist for <br /> personalized advice
      </>
    ),
  },
  {
    icon: "/images/verify1_3.svg",
    title: (
      <>
        Transparent offers, <br /> Real availability
      </>
    ),
  },
];

export default function WhyChooseFarmaDoc() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-5 relative">
        <div className="border border-gray-200 rounded-md overflow-hidden pl-10 pt-10 pr-10 pb-10">
      
      <h2 className="text-[24px] font-bold text-[#1E3862]">
        Why Choose FarmaDoc?
      </h2>

      <p className="text-[#6B6F72] max-w-[1027px] text-[14px] mt-4">
        All products on FarmaDoc come directly from licensed pharmacies and remain fully safe,
        effective, and compliant until their expiry date. Each item is carefully stored and
        handled under strict pharmacy standards.
      </p>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {features.map((item, index) => (
          <FeatureCard key={index} icon={item.icon} title={item.title} />
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
  title: React.ReactNode;
}) {
  return (
    <div className="bg-[#EDF2FB] rounded-lg p-2 flex flex-col gap-2 h-[116px]">
      <Image src={icon} alt="icon" width={40} height={40} />
      <p className="font-semibold text-[#1E3862] text-[16px] font-inter">{title}</p>
    </div>
  );
}