export default function HealthcareTimeline() {
  const items = [
    {
      year: "2014",
      title: "The Idea is Born",
      desc: "Founders Marco and Giulia, both with backgrounds in healthcare logistics, notice a critical gap: Italian pharmacies discarding millions of euros in surplus stock annually.",
    },
    {
      year: "2016",
      title: "First Pilot in Milano",
      desc: "FarmDoc launches in a pilot with 12 pharmacies in Milan. The platform immediately drives meaningful surplus sales and customer savings.",
    },
    {
      year: "2018",
      title: "National Expansion",
      desc: "Growing to 150 pharmacies across Northern Italy. The team builds the geo-discovery technology that becomes the heart of the platform.",
    },
    {
      year: "2021",
      title: "Admin-Managed Model",
      desc: "A pivotal shift: FarmDoc takes over full listing management. Pharmacies see 3x faster onboarding and higher satisfaction scores.",
    },
    {
      year: "2024",
      title: "850+ Partners",
      desc: "FarmDoc becomes Italy’s leading pharmaceutical marketplace with 850+ pharmacies, 120,000+ customers, and €2.4M+ in documented customer savings.",
    },
    {
      year: "2026",
      title: "Scaling Europe",
      desc: "The platform prepares for expansion into France, Spain, and Germany.",
    },
  ];

  return (
    <section className="relative bg-[#1C355D] py-20 px-6 text-white overflow-hidden mb-4">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto">
        <p className="text-[14px] text-white font-inter font-medium tracking-widest opacity-70 mb-2">
          OUR JOURNEY
        </p>
        <h1 className="text-[32px] font-medium font-helvetica mb-12">
          A decade of healthcare innovation
        </h1>

        <div className="flex flex-col gap-8">
          {items.map((item, i) => (
            <div
            key={i}
            className="transition-all"
            style={{
                marginLeft: `${i * 120}px`,
            }}
            >
            <div className="max-w-[660px] bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 max-h-[136px]">
                
                {/* Row: year + title */}
                <div className="flex items-center gap-3 mb-2">
                <span className="inline-block text-[16px] font-inter px-3 py-1 rounded-full bg-gradient-to-b from-[#FFB703] to-[#1192E8]">
                    {item.year}
                </span>

                <h3 className="font-semibold text-[22px] font-inter">
                    {item.title}
                </h3>
                </div>

                <p className="text-[14px] font-medium font-inter opacity-80 leading-relaxed">
                {item.desc}
                </p>
            </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fix */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style] {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}