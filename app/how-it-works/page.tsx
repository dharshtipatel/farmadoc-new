"use client"
import Image from "next/image";
import Header from "../../components/Header";
import HowItWorksSection from "../../components/how-it-works";
import Footer from "@/components/Footer";
import BookableShowroom from "@/components/BookableShowroom";
import PromisesSection from "@/components/PromisesSection";

export default function HowItWorks() {
  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px] mb-6" />

      <HowItWorksSection />

      {/* Image Section */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/htw-map-banner.svg"
          alt="map banner"
          fill
          className=""
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="absolute inset-0 flex">
          
          <div className="max-w-7xl mx-auto px-6 w-full flex">
            
            <div className="w-full lg:w-[630px] text-white mt-20">
              
              {/* Label with line */}
              <div className="flex items-center gap-3 mb-3">
                <p className="text-[14px] font-inter font-medium tracking-widest uppercase opacity-80">
                  Our Journey
                </p>

                {/* small horizontal line */}
                <span className="w-10 h-[2px] bg-white/60"></span>
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-medium font-helvetica mb-3">
                A decade of healthcare innovation
              </h1>

              {/* Description */}
              <p className="text-[16px] font-inter font-medium opacity-90">
                FarmaDoc's geo-discovery engine surfaces the closest pharmacies with the best deals in real time. We show you what's available within 0.5km, 1km, and 5km of your location.
              </p>

            </div>

          </div>

        </div>
      </div>

      <BookableShowroom />

      <PromisesSection
        imageSrc="/images/promises-htw.jpg"
        title="No app required. Works on any device."
        description="FarmaDoc works fully from your browser on desktop or mobile. No downloads, no accounts required to browse — just find deals and save."
        buttonText="Find a Deal near You"
        onButtonClick={() => alert("Clicked")}
        items={[
          {
            icon: "/images/htw-i-1.svg",
            title: "No account needed to browse",
            description: "Explore deals anonymously. Only sign up when you want to book.",
          },
          {
            icon: "/images/htw-i-2.svg",
            title: "Instant confirmation",
            description: "Book a deal and receive your pickup confirmation in under 30 seconds.",
          },
          {
            icon: "/images/htw-i-3.svg",
            title: "Real-time inventory updates",
            description: "Stock levels update live so you're never disappointed at pickup.",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
