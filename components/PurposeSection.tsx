import Image from "next/image";
export default function PurposeSection() {
  return (
    <section className="w-full px-20 py-20 bg-white">
      
      {/* Header */}
      <div className="max-w-[956px] mb-12">
        <h1 className="text-[32px] font-helvetica md:text-4xl font-medium text-[#1E3862]">
          The foundation of our purpose
        </h1>

        <p className="mt-4 text-[#6B6F72] text-[16px] md:text-base leading-relaxed font-medium font-inter">
          Every purchase on FarmaDoc does more than save money; it actively reduces pharmaceutical waste.
          We're committed to commerce with a conscience, ensuring health and environmental responsibility go hand in hand.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Sustainability */}
        <div className="bg-[#F4FFE9] rounded-xl p-6">
          <div className="text-green-600 text-2xl mb-3">
            <Image
                src="/images/sustainability.svg"
                alt="search"
                width={60}
                height={60}
                priority
                className="rounded-lg"
            />
          </div>

          <h3 className="text-[24px] font-inter font-semibold mb-1">Sustainability</h3>
          <p className="text-green-600 text-[14px] font-inter font-medium mb-3">Zero Pharma Waste</p>

          <p className="text-[#6B6F72] text-[16px] font-inter leading-relaxed">
            Italy discards an estimated €500 million worth of pharmaceutical products annually due to surplus stock and near-expiry dates.
            FarmaDoc intercepts this waste by creating a market for it. Every product sold on our platform is a product that doesn't end up in a landfill.
          </p>
        </div>

        {/* Accessibility */}
        <div className="bg-[#F2FAFF] rounded-xl p-6">
          <div className="text-blue-500 text-2xl mb-3">
            <Image
                src="/images/Accessibility.svg"
                alt="search"
                width={60}
                height={60}
                priority
                className="rounded-lg"
            />
          </div>

          <h3 className="text-[24px] font-inter font-semibold mb-1">Accessibility</h3>
          <p className="text-blue-500 text-[14px] font-medium font-inter mb-3">Healthcare for Everyone</p>

          <p className="text-[#6B6F72] text-[16px] font-inter leading-relaxed">
            Medication affordability is a real barrier for millions of Italian families. FarmaDoc brings discounts of up to 70% on authentic pharmaceutical products,
            making essential health products accessible to those who need them most, regardless of income.
          </p>
        </div>

        {/* Efficiency (full width) */}
        <div className="bg-[#F8F3FF] rounded-xl p-6 md:col-span-2">
          <div className="text-purple-600 text-2xl mb-3">
            <Image
                src="/images/Efficiency.svg"
                alt="search"
                width={60}
                height={60}
                priority
                className="rounded-lg"
            />
          </div>

          <h3 className="text-[24px] font-inter font-semibold mb-1">Efficiency</h3>
          <p className="text-purple-600 text-[14px] font-inter font-medium mb-3">Streamlined Commerce</p>

          <p className="text-[#6B6F72] text-[16px] font-inter leading-relaxed">
            Traditional pharmaceutical retail is fragmented, slow, and opaque. FarmaDoc centralizes geo-based discovery, booking, and in-store pickup —
            creating a friction-free loop between inventory and patient. Our platform manages everything so pharmacies can focus on care.
          </p>
        </div>

      </div>
    </section>
  );
}