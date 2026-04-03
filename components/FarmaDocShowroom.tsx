import Image from 'next/image'

export default function FarmaDocShowroom() {
  return (
    <div className="flex flex-col sm:flex-row max-w-3xl mx-auto my-8 p-6 rounded-lg bg-white gap-6 items-start font-sans text-gray-700 font-inter">
      
      {/* Text Section */}
      <div className="flex-1 w-full sm:max-w-[calc(100%-350px)]">
        <h3 className="text-2xl font-bold text-[#1E3862] mb-2">
          FarmaDoc Showroom
        </h3>

        <p className="mb-4 text-sm sm:text-base break-words text-[#6B6F72]">
          Turn your pharmacy into a premium digital showroom <br /> and attract more customers.
        </p>

        <h4 className="text-lg font-semibold text-black mb-2">Premium Benefits</h4>
        <ul className="list-disc list-inside mb-4 text-[#6B6F72] space-y-1 marker:text-yellow-400">
          <li>Priority placement in search and map results</li>
          <li>Featured pharmacy badge for higher trust</li>
          <li>Highlighted product listings with promo tags</li>
          <li>Increased visibility to nearby customers</li>
        </ul>

        <h4 className="text-lg font-semibold text-black mb-2">Not on Showroom ?</h4>
        <p className="mb-4 text-sm sm:text-base break-words text-[#6B6F72]">
          No worries, Still you can register as pharmacy <br /> or Para pharmacy for Free.
        </p>

        <button className="bg-[#33B1FF] hover:bg-blue-700 text-white font-semibold px-28 py-3 rounded transition-colors duration-300">
          Register or Log in
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-[350px] h-[350px] rounded-md overflow-hidden relative flex-shrink-0">
        <Image
          src="/images/farmashowroom.png"
          alt="FarmaDoc Showroom"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}