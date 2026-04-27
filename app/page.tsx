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
import ChatBot from "@/components/ChatBot";
import { useAppTranslation } from "@/lib/useAppTranslation";

const defaultTopDeals = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" },
  { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi2.png", type: "Pharmacy" },
  { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi3.png", type: "Pharmacy" },
  { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi4.png", type: "Pharmacy" },
  { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" },
];

const defaultFavourites = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" },
  { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi2.png", type: "Pharmacy" },
  { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi3.png", type: "Pharmacy" },
  { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi4.png", type: "Pharmacy" },
  { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" },
];

const defaultExpiringSoonDeals = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" },
  { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi2.png", type: "Pharmacy" },
  { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi3.png", type: "Pharmacy" },
  { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi4.png", type: "Pharmacy" },
  { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" },
];

const defaultPharmacies = [
  {
    image: "/images/1.png",
    name: "Farmacia Centrale - Milano",
    address: "Herba Salus Parapharmacy, Via Gram...",
    deals: 5,
    distance: 1.5,
    starBadge: "/images/star_badge.png",
    type: "Pharmacy",
  },
  {
    image: "/images/2.png",
    name: "Farmacia Roma - Rome",
    address: "Via Nazionale 123, Roma",
    deals: 3,
    distance: 2.2,
    starBadge: "/images/star_badge.png",
    type: "Pharmacy",
  },
  {
    image: "/images/2.png",
    name: "Farmacia Torino - Turin",
    address: "Piazza Castello 5, Torino",
    deals: 8,
    distance: 0.9,
    starBadge: "/images/star_badge.png",
    type: "Pharmacy",
  },
  {
    image: "/images/3.png",
    name: "Farmacia Torino - Turin",
    address: "Piazza Castello 5, Torino",
    deals: 8,
    distance: 0.9,
    starBadge: "/images/star_badge.png",
    type: "Pharmacy",
  },
  {
    image: "/images/3.png",
    name: "Farmacia Torino - Turin",
    address: "Piazza Castello 5, Torino",
    deals: 8,
    distance: 0.9,
    starBadge: "/images/star_badge.png",
    type: "Pharmacy",
  },
];

const brands = [
  { id: 1, image: "/images/brand1.png", alt: "Cipla", showBadge: true },
  { id: 2, image: "/images/brand2.png", alt: "Pfizer", showBadge: true },
  { id: 3, image: "/images/BrandCard.png", alt: "Lupin", showBadge: true },
  { id: 4, image: "/images/brand1.png", alt: "Sun Pharma", showBadge: true },
  { id: 5, image: "/images/brand2.png", alt: "Dr Reddy", showBadge: false },
  { id: 6, image: "/images/brand1.png", alt: "GSK", showBadge: false },
  { id: 7, image: "/images/brand2.png", alt: "GSK", showBadge: true },
];

const defaultArticles = [
  {
    id: 1,
    imageSrc: "/images/h1.jpg",
    category: "Sustainability",
    title: "Why Buying Near-Expiry Medicines Is Safe & Smart",
    author: "Dr. Elisa Romano",
    date: "16 Dec, 2025",
  },
  {
    id: 2,
    imageSrc: "/images/h2.jpg",
    category: "Pharmacy Trends",
    title: "Top Pharmacy Innovations to Watch in 2026",
    author: "Dr. John Smith",
    date: "05 Jan, 2026",
  },
  {
    id: 3,
    imageSrc: "/images/h3.jpg",
    category: "Health Tips",
    title: "5 Simple Ways to Boost Your Immune System",
    author: "Dr. Alice Lee",
    date: "22 Nov, 2025",
  },
  {
    id: 4,
    imageSrc: "/images/h4.jpg",
    category: "Sustainability",
    title: "Eco-Friendly Packaging in Pharmacies",
    author: "Dr. Mark Davis",
    date: "30 Oct, 2025",
  },
];

const defaultComments = [
  {
    id: 1,
    title: "Huge Savings Without Compromise",
    quote: "I saved almost EUR40 on supplements that were still months away from expiry. Pickup was smooth and the pharmacy staff were very friendly.",
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
  const { get } = useAppTranslation();
  const topDeals = get("home.topDeals", defaultTopDeals);
  const favourites = get("home.favourites", defaultFavourites);
  const expiringSoonDeals = get("home.expiringSoonDeals", defaultExpiringSoonDeals);
  const pharmacies = get("home.pharmacies", defaultPharmacies);
  const articles = get("home.articles", defaultArticles);
  const comments = get("home.testimonials", defaultComments);

  return (
    <div className="bg-gradient-to-b from-[#E5F6FF] to-white">
      <Header showSearch={false} />

      <div className="pt-[80px] sm:pt-[135px] p-2"></div>

      <div className="max-w-7xl mx-auto">
        <Banner />
      </div>

      <CarouselSection
        title="carousel.bestDeals.title"
        subtitle="carousel.bestDeals.subtitle"
        deals={topDeals}
        CardComponent={ProductCard}
        cardsPerPage={4}
        viewAllLink="/top_deals"
      />

      <CarouselSection
        title="carousel.expiring.title"
        subtitle="carousel.expiring.subtitle"
        deals={expiringSoonDeals}
        CardComponent={ProductCard}
        cardsPerPage={4}
        viewAllLink="/top_deals"
      />

      <PharmaBenefits />

      <CarouselSection
        title="carousel.pharmacies.title"
        subtitle="carousel.pharmacies.subtitle"
        deals={pharmacies}
        CardComponent={PharmacyCard}
        cardsPerPage={4}
        viewAllLink="/top_deals"
      />

      <PharmacyBanner
        image="/images/Banner.png"
        badgeKey="pharmacyBanner.badge"
        titleLine1Key="pharmacyBanner.title.line1"
        titleLine2Key="pharmacyBanner.title.line2"
        descriptionKey="pharmacyBanner.description"
        buttonTextKey="pharmacyBanner.button"
        noteKey="pharmacyBanner.note"
      />

      <CarouselSection
        title="carousel.brands.title"
        subtitle="carousel.brands.subtitle"
        deals={brands}
        CardComponent={BrandCard}
        cardsPerPage={6}
      />

      <CarouselSection
        title="carousel.favourites.title"
        subtitle="carousel.favourites.subtitle"
        deals={favourites}
        CardComponent={ProductCard}
        cardsPerPage={4}
        viewAllLink="/top_deals"
      />

      <CarouselSection
        title="carousel.articles.title"
        subtitle="carousel.articles.subtitle"
        deals={articles}
        CardComponent={ArticleCard}
        cardsPerPage={4}
      />

      <PharmaMovement />

      <WhyChooseFarmaDoc />

      <CarouselSection
        title="carousel.testimonials.title"
        subtitle="carousel.testimonials.subtitle"
        deals={comments}
        CardComponent={TestimonialCard}
        cardsPerPage={4}
      />

      <FAQAccordion />

      <Footer />
      <ChatBot />
    </div>
  );
}
