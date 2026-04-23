
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PolicyComponent from "@/components/policycomponent";

export default function PrivacyPolicy() {

  return (
    <div>
      <Header showSearch={false} />
      <div className="lg:pt-[80px]" />

      <PolicyComponent
        title="Privacy Policy"
        date="March 13, 2025"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        content="Your full policy content here..."
      />
    <Footer />
      
    </div>
  );
}
