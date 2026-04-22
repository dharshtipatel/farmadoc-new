"use client";
import Header from "../../components/Header";
import StatsSection from "../../components/StatsSection";
import Timeline from "../../components/Timeline";
import CarouselSection from "@/components/CarouselSection";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import FarmaDocCTA from "@/components/FarmaDocCTA";
import Image from "next/image";
export default function WhoWeAre() {
    const comments = [
    {
        id: 1,
        title: "Huge Savings Without Compromise",
        quote: "I saved almost €40 on supplements that were still months away from expiry. Pickup was smooth and the pharmacy staff were very friendly.",
        author: "Laura M., Milano",
        rating: 5,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 2,
        title: "Quick & Convenient",
        quote: "The online reservation and pickup system is so easy! I got my medicines without waiting in long queues.",
        author: "Marco T., Rome",
        rating: 4,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 3,
        title: "Trusted & Safe",
        quote: "I was initially skeptical about near-expiry medicines, but FarmaDoc ensures everything is safe and verified by licensed pharmacies.",
        author: "Elena R., Turin",
        rating: 5,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 4,
        title: "Fantastic Customer Support",
        quote: "Their customer service answered all my questions promptly. I feel confident ordering from FarmaDoc again.",
        author: "Giovanni L., Florence",
        rating: 5,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    {
        id: 5,
        title: "Saves Time and Money",
        quote: "I discovered great deals on supplements and medications near me. It really helps reduce waste and saves me money.",
        author: "Sara P., Naples",
        rating: 4,
        quotationIconSrc: "/images/quotation-mark.svg",
    },
    ];
  return (
    <div>
        <Header showSearch={false}/>
        <div className="pt-[80px] "></div>

        <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
            
            {/* Top grid */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
                <h1 className="text-[60px] font-medium text-[#1E3862] font-helvetica">
                Healthcare <br />
                made human again
                </h1>
            </div>

            <div className="text-[#6B6F72] text-[16px] font-medium font-inter leading-relaxed space-y-4">
                <p>
                    FarmaDoc was built on a simple belief: pharmaceutical access shouldn’t
                    be a privilege. Since 2014, we’ve been bridging the gap between
                    pharmacies with surplus stock and patients who need affordable
                    medication.
                </p>
                <p>
                    What started as a small experiment in Milan has grown into Italy’s
                    largest pharmaceutical marketplace — connecting 850+ pharmacies with
                    120,000+ customers who save every single day.
                </p>
            </div>
            </div>

            {/* Full width image */}
            <div className="mt-10">
            <Image
                src="/images/who-we-are-banner.jpg"
                alt="Banner"
                width={1280}
                height={500}
                priority
                className="w-full h-auto rounded-lg"
            />
            </div>

            <div className="flex justify-end gap-3 pt-2">
                <span className="flex items-center gap-2 bg-[#FFF8E9] text-[14px] font-semibold font-inter px-4 py-2 rounded-full">
                <Image
                    src="/images/yellow-search.svg"
                    alt="search"
                    width={22}
                    height={22}
                    priority
                    className="rounded-lg"
                />
                Founded in 2024
                </span>

                <span className="flex items-center gap-2 bg-[#F0F9FF] text-[14px] font-semibold font-inter px-4 py-2 rounded-full">
                <Image
                    src="/images/blue-search.svg"
                    alt="search"
                    width={22}
                    height={22}
                    priority
                    className="rounded-lg"
                />
                Milano, Italia
                </span>
            </div>

        </div>
        </section>

    <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">

            {/* Title */}
            <h1 className="text-[32px] font-medium text-[#1E3862] mb-8">
            What drives us every day
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-[#D6DADD]">

            {/* Card 1 */}
            <div className="p-6 border-r border-[#D6DADD]">
                <div className="w-8 h-8 mb-4 text-[#1E3862]">
                    <Image
                        src="/images/patient-first.svg"
                        alt="Patient First"
                        width={48}
                        height={48}
                        priority
                        className=""
                    />
                </div>
                <h3 className="font-semibold mb-2 text-[20px] font-inter">Patient First</h3>
                <p className="text-[16px] font-inter text-[#6B6F72]">
                Every decision is made with the patient’s affordability and health access in mind.
                </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border-r border-[#D6DADD]">
                <div className="w-8 h-8 mb-4 text-green-600">
                    <Image
                        src="/images/sustainability.svg"
                        alt="Sustainability"
                        width={48}
                        height={48}
                        priority
                        className=""
                    />
                </div>
                <h3 className="font-semibold mb-2 text-[20px] font-inter">Sustainability</h3>
                <p className="text-[16px] font-inter text-[#6B6F72]">
                Reducing pharmaceutical waste is at the core of everything we build.
                </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border-r border-[#D6DADD]">
                <div className="w-8 h-8 mb-4 text-[#1E3862]">
                    <Image
                        src="/images/truth-safety.svg"
                        alt="Patient First"
                        width={48}
                        height={48}
                        priority
                        className=""
                    />
                </div>
                <h3 className="font-semibold mb-2 text-[20px] font-inter">Trust & Safety</h3>
                <p className="text-[16px] font-inter text-[#6B6F72]">
                We guarantee 100% authentic, pharmacy-certified products on our platform.
                </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 border-r border-[#D6DADD]">
                <div className="w-8 h-8 mb-4 text-[#1E3862]">
                    <Image
                        src="/images/community-impact.svg"
                        alt="Patient First"
                        width={48}
                        height={48}
                        priority
                        className=""
                    />
                </div>
                <h3 className="font-semibold mb-2 text-[20px] font-inter">Community Impact</h3>
                <p className="text-[16px] font-inter text-[#6B6F72]">
                Local pharmacies, local economies, we believe in strengthening communities.
                </p>
            </div>

            </div>
        </div>
    </section>

    <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-[#1E3862] mb-3 sm:mb-4 font-helvetica leading-snug">
        Building a healthier, more sustainable Italy
        </h1>

        <p className="text-sm sm:text-base text-[#6B6F72] font-medium font-inter max-w-full md:max-w-[738px] leading-relaxed">
        Every transaction on FarmaDoc has a double impact: it saves customers money and prevents pharmaceutical waste from entering landfill. This is commerce with conscience.
        </p>

        <div className="mt-10 mb-8">
            <Image
                src="/images/who-we-are-banner1.jpg"
                alt="Banner"
                width={1280}
                height={500}
                priority
                className="w-full h-auto rounded-lg"
            />
        </div>

        <StatsSection />
    </div>
    <Timeline /> 

    <CarouselSection
        title="What Our Customers Say"
        subtitle="Real stories from people who saved money, reduced waste, and discovered trusted pharmacies through FarmaDoc."
        deals={comments}
        CardComponent={TestimonialCard}
        cardsPerPage={4}
    />

    <FarmaDocCTA
    title="Join the FarmaDoc movement"
    description="Every transaction on FarmaDoc has a double impact: it saves customers money and prevents pharmaceutical waste from entering landfill. This is commerce with conscience."
    /> 

    <Footer />
    </div>
  );
}