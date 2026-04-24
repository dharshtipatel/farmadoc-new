"use client";

import PromisesSection from "@/components/PromisesSection";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PurposeSection from "../../components/PurposeSection";
import StatsSection from "../../components/StatsSection";
import Image from "next/image";
import Footer from "@/components/Footer";
import FarmaDocCTA from "@/components/FarmaDocCTA";

export default function Mission() {
  return (
    <div>
      <Header showSearch={false} />
      <div className="pt-[80px]" />
      <Hero />

      <div className="mb-4 px-20">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          
          {/* Background Image */}
          <Image
            src="/images/mission-banner.jpg"
            alt="Banner"
            width={1280}
            height={540}
            priority
            className=""
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-white text-[40px] italic max-w-[680px] w-full leading-[1.1] break-words [font-family:var(--font-times)]">
            "Every package promoted is one less in the trash and one more in the hands of those who need it."
            </p>

            <div className="mt-6 text-white">
              <p className="font-inter text-[20px] font-medium">Marco Fiorani</p>
              <p className="text-[14px] font-inter">Founder & CEO</p>
            </div>
          </div>

        </div>
      </div>

      <PurposeSection />
    <div className="px-20">
      <StatsSection />
      </div>

      <PromisesSection
        imageSrc="/images/promises.jpg"
        title="Promises we keep"
        description="Our mission isn’t just words..."
        buttonText="Upgrade to Premium →"
        onButtonClick={() => alert("Clicked")}
        items={[
          {
            icon: "/images/featured-placement.svg",
            title: "Constant Waste Reduction",
            description: "Our goal is to progressively reduce pharmaceutical waste within our network, increasing the number of products saved each year.",
          },
          {
            icon: "/images/priority-map-visibility.svg",
            title: "Expansion of the Sustainable Network",
            description: "We are working to involve more and more businesses in the recovery cycle, extending the positive impact throughout the country.",
          },
          {
            icon: "/images/verified-badge.svg",
            title: "Education on Zero Waste",
            description: "We raise awareness among businesses and consumers about the importance of reducing pharmaceutical waste, creating a culture of sustainability.",
          },
        ]}
      />

      <FarmaDocCTA
        title="Together, we can end pharmaceutical waste"
        description="Every purchase you make on FarmaDoc is a vote for a more sustainable, equitable healthcare system."
      /> 
      
      <Footer />
    </div>
  );
}