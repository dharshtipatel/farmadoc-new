import Image from "next/image";

export default function BookableShowroom() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[32px] md:text-3xl font-medium text-[#1E3862] font-helvetica">
          Bookable vs. Showroom
        </h1>
        <p className="text-[16px] font-medium font-inter md:text-base text-[#6B6F72] mt-2 max-w-2xl">
          FarmaDoc offers two types of listings depending on how the pharmacy chooses to sell.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#F3FAFF] rounded-xl p-6 relative">

          {/* Badge */}
          <span className="absolute top-8 right-4 bg-[#FFB703] font-inter font-medium text-white text-[12px] px-4 py-2 rounded-full">
            Browse In-Person
          </span>

          {/* Icon */}
          <div className="mb-4">
            <Image
              src="/images/bookable.svg"
              alt="pharmacy"
              width={52}
              height={52}
            />
          </div>

          <h3 className="text-[24px] font-inter font-semibold text-[#1E3862] mb-2">
            Pharmacy Items
          </h3>

          <p className="text-[16px] text-[#6B6F72] font-inter mb-4">
            Discovered deals before visiting. Pharmacy items are visible on FarmaDoc but purchased directly at the pharmacy counter — no reservation needed.
          </p>

          {/* List */}
          <ul className="space-y-2 text-[16px] text-[#6B6F72] font-inter">
            <li className="flex items-center gap-2">
              <span className="text-blue-500">
                <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />
            </span> No booking required
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">
              <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />  
              </span> Pay directly at the pharmacy
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">
              <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />
              </span> First-come, first-served availability
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">
              <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />
              </span> Preview pricing before visiting
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#F3FFE9] rounded-xl p-6 relative">

          {/* Badge */}
          <span className="absolute top-8 right-4 bg-green-600 font-inter font-medium text-white text-[12px] px-4 py-2 rounded-full">
            Most Popular
          </span>

          {/* Icon */}
          <div className="mb-4">
            <Image
              src="/images/showroom.svg"
              alt="showroom"
              width={52}
              height={52}
            />
          </div>

          <h3 className="text-[24px] font-inter font-semibold text-[#1E3862] mb-2">
            Showroom Items
          </h3>

          <p className="text-[16px] text-[#6B6F72] font-inter mb-4">
            Reserve your item online and have it held exclusively for you at the pharmacy for 72 hours. A full payment deposit may apply to confirm booking.
          </p>

          {/* List */}
          <ul className="space-y-2 text-[16px] text-[#6B6F72] font-inte">
            <li className="flex items-center gap-2">
              <span className="text-green-600">
              <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />
              </span> 72-hour hold guaranteed
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">
              <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />
              </span> Online or in-store payment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">
              <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />
              </span> Free cancellation up to 2h before
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">
              <Image
                src="/images/bluecheck.svg"
                alt="showroom"
                width={24}
                height={24}
                />
              </span> Digital QR confirmation
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}