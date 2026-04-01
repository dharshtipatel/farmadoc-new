"use client";

import Header from "../components/Header";
import Banner from "../components/Banner";
import PharmacyBanner from "../components/PharmacyBanner";
import CarouselSection from "../components/CarouselSection";
import PharmaBenefits from "../components/PharmaBenefits";
import FAQAccordion from "../components/FAQAccordion";
import Footer from "../components/Footer";
import ArticleCard from "@/components/ArticleCard";
import PharmacyCard from "@/components/PharmacyCard";
import ProductCard from "@/components/ProductCard";
import BrandCard from "@/components/BrandCard";
import PharmaMovement from "@/components/PharmaMovement";
import WhyChooseFarmaDoc from "@/components/WhyChooseFarmaDoc";
import TestimonialCard from "@/components/TestimonialCard";

const topDeals = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }
];

const favourites = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }
];

const expiringSoonDeals = [
 { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }, { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/medicine.png", type: "Pharmacy" }
];

const pharmacies = [
  {
    image: "/images/1.png",
    name: "Farmacia Centrale – Milano",
    address: "Herba Salus Parapharmacy, Via Gram...",
    deals: 5,
    distance: 1.5,
    starBadge: "/images/star_badge.png",
  },
  {
    image: "/images/2.png",
    name: "Farmacia Roma – Rome",
    address: "Via Nazionale 123, Roma",
    deals: 3,
    distance: 2.2,
    starBadge: "/images/star_badge.png",
  },
  {
    image: "/images/2.png",
    name: "Farmacia Torino – Turin",
    address: "Piazza Castello 5, Torino",
    deals: 8,
    distance: 0.9,
    starBadge: "/images/star_badge.png",
  },
  {
    image: "/images/3.png",
    name: "Farmacia Torino – Turin",
    address: "Piazza Castello 5, Torino",
    deals: 8,
    distance: 0.9,
    starBadge: "/images/star_badge.png",
  },
  {
    image: "/images/3.png",
    name: "Farmacia Torino – Turin",
    address: "Piazza Castello 5, Torino",
    deals: 8,
    distance: 0.9,
    starBadge: "/images/star_badge.png",
  },
];

const brands = [
  { id: 1, image: "/images/BrandCard.png", alt: "Cipla", showBadge: true },
  { id: 2, image: "/images/BrandCard.png", alt: "Pfizer", showBadge: false },
  { id: 3, image: "/images/BrandCard.png", alt: "Lupin", showBadge: false },
  { id: 4, image: "/images/BrandCard.png", alt: "Sun Pharma", showBadge: false },
  { id: 5, image: "/images/BrandCard.png", alt: "Dr Reddy", showBadge: false },
  { id: 6, image: "/images/BrandCard.png", alt: "GSK", showBadge: false },
  { id: 7, image: "/images/BrandCard.png", alt: "GSK", showBadge: true },
];
const article = [
  {
    id: 1,
    imageSrc: "/images/1.png",
    category: "Sustainability",
    title: "Why Buying Near-Expiry Medicines Is Safe & Smart",
    author: "Dr. Elisa Romano",
    date: "16 Dec, 2025",
  },
  {
    id: 2,
    imageSrc: "/images/pharmacy_trends.jpg",
    category: "Pharmacy Trends",
    title: "Top Pharmacy Innovations to Watch in 2026",
    author: "Dr. John Smith",
    date: "05 Jan, 2026",
  },
  {
    id: 3,
    imageSrc: "/images/health_tips.jpg",
    category: "Health Tips",
    title: "5 Simple Ways to Boost Your Immune System",
    author: "Dr. Alice Lee",
    date: "22 Nov, 2025",
  },
  {
    id: 4,
    imageSrc: "/images/sustainability.jpg",
    category: "Sustainability",
    title: "Eco-Friendly Packaging in Pharmacies",
    author: "Dr. Mark Davis",
    date: "30 Oct, 2025",
  }
];

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

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#E5F6FF] to-white">
      <Header showSearch={false} />
      <div className="pt-[135px]">
        <Banner />
      </div>

      <CarouselSection
        title="Top Deals"
        subtitle="Discover unbeatable deals on top-rated products."
        deals={topDeals}
        CardComponent={ProductCard}
        cardsPerPage={4}
        viewAllLink="/top_deals"
      />

      <CarouselSection
        title="Save Before Waste, Expiring Soon"
        subtitle="Don't miss out on these soon-to-expire medicines."
        deals={expiringSoonDeals}
        CardComponent={ProductCard}
        cardsPerPage={4}
      />

      <PharmaBenefits />
      <CarouselSection
        title="Popular Pharmacies Near You"
        subtitle="Discover trusted pharmacies nearby offering exclusive health and wellness deals."
        deals={pharmacies}
        CardComponent={PharmacyCard}
        cardsPerPage={4}
        viewAllLink="/top_deals"
      />
      <PharmacyBanner
        image="/images/Banner.png"
        badge="Exclusive Health Deals"
        title={
          <>
            Up to 50% Off on <br /> Essential Medicines Near You!
          </>
        }
        description="Save more on verified pharmacy stock, reserve online and pick up in-store today."
        buttonText="Find Pharmacy Near You"
        note="*Pay at pickup"
      />

      <CarouselSection
        title="Brands in your area"
        subtitle="Explore Premium Brands in your nearby stores"
        deals={brands}
        CardComponent={BrandCard}
        cardsPerPage={6}
      />

      <CarouselSection
        title="Favourites For You"
        subtitle="Explore a curated selection of medications tailored to your health needs."
        deals={favourites}
        CardComponent={ProductCard}
        cardsPerPage={4}
      />

      <CarouselSection
        title="Health Insights & Pharmacy News"
        subtitle="Stay updated with expert tips, healthcare trends, and sustainable pharmacy stories."
        deals={article}
        CardComponent={ArticleCard}
        cardsPerPage={4}
      />

      <PharmaMovement />

      <WhyChooseFarmaDoc />
        
      <CarouselSection
        title="What Our Customers Say"
        subtitle="Real stories from people who saved money, reduced waste, and discovered trusted pharmacies through FarmaDoc."
        deals={comments}
        CardComponent={TestimonialCard}
        cardsPerPage={4}
      />

      <FAQAccordion />

      <Footer />
    </div>
  );
}