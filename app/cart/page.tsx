"use client";

import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Cart from "../../components/Cart";
import CartSummary from "../../components/CartSummary";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CarouselSection from "../../components/CarouselSection";
import ProductCard from "../../components/ProductCard";
import Footer from "@/components/Footer";
import ReservationSummaryPage from "../../components/ReservationSummaryPage";
import LoginModal from "../../components/LoginModal";

const topDeals = [
  { id: 1, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" }, { id: 2, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi2.png", type: "Pharmacy" }, { id: 3, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi4.png", type: "Pharmacy" }, { id: 4, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi3.png", type: "Pharmacy" }, { id: 5, name: "Paracet 500", pharmacy: "Herba Salus Parapharmacy", price: 213.2, oldPrice: 220, discount: "25% Off", distance: "1.5Km", expiry: "20 Feb, 2026", image: "/images/medi1.png", type: "Pharmacy" }
];

export default function CartPage() {
  const { items } = useCart(); // get current cart items from context

  const [couponCode, setCouponCode] = useState("");
  const [showReservationPopup, setShowReservationPopup] = useState(false);
  const [reservationItems, setReservationItems] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  // Calculate totals dynamically from cart items
  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalOldPrice = items.reduce(
    (sum, item) => sum + (item.variant.oldPrice ?? item.price) * item.quantity,
    0
  );
  const totalDiscount = totalOldPrice - cartTotal;

  const platformFee = 15; // keep as fixed or calculate if needed

  const couponDiscount = 0; // for example, calculate from coupon if applied
  const payableAmount = cartTotal + platformFee - couponDiscount;

  // Coupon and payment handlers
  const handleApplyCoupon = () => {
    alert(`Apply coupon: ${couponCode}`);
    // TODO: validate coupon, calculate couponDiscount dynamically
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setOpenLogin(false);
  };

  const handlePayReserve = () => {
    if (!isLoggedIn) {
      setOpenLogin(true);
      return;
    }

    const itemsToReserve = items.map((item) => ({
      id: item.id,
      productName: item.name,
      price: item.price,
      quantity: item.quantity,
      pharmacyName: item.pharmacy || "Herba Salus Parapharmacy",
      image: item.image || "/images/2.png",
    }));
    
    setReservationItems(itemsToReserve);
    setShowReservationPopup(true);
  };

  const handleBookPayStore = () => {
    alert("Book & Pay in Store clicked");
  };

  return (
    <div>
      <Header />
      <div className="pt-[80px] sm:pt-[135px]">
        <Breadcrumb currentPage={"My Cart"} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 lg:mb-6">My Cart</h3>
            <Cart />
          </div>

          <div className="w-full lg:w-1/3 mb-8">
            <div className="w-full max-w-sm font-inter text-sm text-[#243b5e]">
              {/* Cart Total Row */}
              <div className="flex justify-between items-center mb-6 font-helvetica">
                <h3 className="text-[22px] text-black font-bold">Cart Total</h3>
                <span className="text-[#1E3862] text-[22px] font-bold">€{payableAmount.toFixed(2)}</span>
              </div>

              {/* Cart summary details */}
              <CartSummary
                cartTotal={cartTotal}
                platformFee={platformFee}
                totalDiscount={totalDiscount}
                couponDiscount={couponDiscount}
                couponCode={couponCode}
                setCouponCode={setCouponCode}
                payableAmount={payableAmount}
                onApplyCoupon={handleApplyCoupon}
                onPayReserve={handlePayReserve}
                onBookPayStore={handleBookPayStore}
              />
            </div>
          </div>
        </div>
        <CarouselSection
          title="You Might be interested in"
          subtitle="Discover items related to your search and similar products."
          deals={topDeals}
          CardComponent={ProductCard}
          cardsPerPage={4}
          viewAllLink="/top_deals"
          className="mx-0"
        />
      </div>
      {showReservationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            <ReservationSummaryPage
              items={reservationItems}
              onBack={() => setShowReservationPopup(false)}
            />
          </div>
        </div>
      )}
      {openLogin && (
        <LoginModal onClose={() => setOpenLogin(false)} onLoginSuccess={handleLoginSuccess} />
      )}
      </div>
      <Footer />
    </div>
  );
}