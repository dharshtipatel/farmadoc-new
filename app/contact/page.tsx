import HelpSection from "@/components/HelpSection";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
export default function Contact() {
  return (
    <div>
        <Header showSearch={false} />
        <div className="lg:pt-[80px]" />

        <HelpSection />
        <Footer />
    </div>
  );
}