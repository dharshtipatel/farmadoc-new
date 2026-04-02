import Image from "next/image";

export default function PharmaMovement() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-5">
      <div className="flex w-[1240px] h-[380px] gap-[20px] border border-gray-200 rounded-md overflow-hidden pt-10 pr-10 bg-[#EDF2FB]">

        {/* Left side */}
        <div className="relative w-[612px] h-full">
          <Image
            src="/images/PharmaMovement.png"
            alt="Pharmacy Illustration"
            width={612}
            height={320}
            className="absolute bottom-0 left-0 h-[330px] w-auto object-contain"
            priority
          />
        </div>

        {/* Right side */}
        <div className="w-[590px]">
          <p className="text-sm text-[#1192E8]">Sell on FarmaDoc</p>

          <h2 className="text-[24px] font-bold text-[#1E3862] pt-2">
            Join the Movement Against Pharmaceutical Waste
          </h2>

          <p className="text-[14px] text-[#6B6F72] pt-2">
            Join Italy&apos;s leading marketplace for surplus and near-expiry pharmacy products.<br />
            Reduce waste, increase revenue, and reach new customers in your area.
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">
            <BenefitItem
              icon="/images/drug.svg"
              title="List your surplus stock easily"
            />

            <BenefitItem
              icon="/images/drug_1.svg"
              title="Reduce losses from unsold inventory"
            />

            <BenefitItem
              icon="/images/drug_2.svg"
              title="Attract new local customers"
            />
          </div>

          <button className="mt-4 bg-[#1E3862] text-white px-6 py-3 rounded-md font-inter">
            Register Your Store
          </button>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col w-[186px] h-[106px]">
      <Image src={icon} alt={title} width={40} height={40} />
      <p className="text-sm font-semibold text-[#1E3862] mt-4">{title}</p>
    </div>
  );
}