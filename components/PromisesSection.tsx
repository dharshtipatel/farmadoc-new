import Image from "next/image";

export default function PromisesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Image */}
      <div className="relative w-full h-[620px] overflow-hidden">
        <Image
          src="/images/promises.jpg"
          alt="Pharmacist"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="w-[630px]">
        <h2 className="text-[32px] font-helvetica font-medium text-[#1E3862] mb-4">
          Promises we keep
        </h2>
        <p className="text-[#6B6F72] font-medium text-[16px] font-inter mb-6">
          Our mission isn’t just words. These are the concrete commitments we hold ourselves to every day.
        </p>

        <div className="space-y-5">
          {/* Item 1 */}
          <div className="flex items-start gap-3 border-b border-[#EEF2F5] py-4">
              <Image
                src="/images/featured-placement.svg"
                alt="search"
                width={48}
                height={48}
                priority
                className="rounded-lg"
              />
            <div>
              <h4 className="font-semibold text-[20px] font-inter">
                100% Authentic Products
              </h4>
              <p className="text-[16px] font-inter text-[#6B6F72]">
                Every product on PharmaDoc is pharmacy-certified, regulated, and safe. No gray market, no compromises.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3 border-b border-[#EEF2F5] py-4">
            <Image
                src="/images/priority-map-visibility.svg"
                alt="search"
                width={48}
                height={48}
                priority
                className="rounded-lg"
              />
            <div>
              <h4 className="font-semibold text-[20px] font-inter">
                Transparent Reporting
              </h4>
              <p className="text-[16px] font-inter text-[#6B6F72]">
                We publish annual sustainability reports tracking waste reduction, savings, and community impact.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3 py-4">
            <Image
                src="/images/verified-badge.svg"
                alt="search"
                width={48}
                height={48}
                priority
                className="rounded-lg"
              />
            <div>
              <h4 className="font-semibold text-[20px] font-inter">
                2030 Zero Waste Goal
              </h4>
              <p className="text-[16px] font-inter text-[#6B6F72]">
                PharmaDoc is committed to eliminating all pharmaceutical surplus waste within our partner network by 2030.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 px-5 py-3 bg-[#1E3862] text-white rounded-md hover:bg-blue-700 transition font-medium font-inter text-[16px]">
          Upgrade to Premium →
        </button>
      </div>
    </section>
  );
}