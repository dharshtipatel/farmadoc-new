import Image from "next/image";

const stats = [
  {
    value: "1,200+",
    label: "Verified Pharmacies",
    icon: "/images/verified.svg",
  },
  {
    value: "18,000+ Kg",
    label: "Fighting Pharmaceutical Waste",
    icon: "/images/delete.svg",
  },
  {
    value: "800+",
    label: "Helping Local Pharmacies Grow",
    icon: "/images/grow.svg",
  },
  {
    value: "4.8 Rating",
    label: "Trusted by Customers",
    icon: "/images/star.svg",
  },
];

const footerLinks = [
  {
    title: "Inside FarmaDoc",
    links: [
      "Who we are",
      "Our Mission",
      "Join FarmaDoc",
      "How it Works",
      "FAQ’s",
      "Register",
      "Contact us",
    ],
  },
  {
    title: "Self-Medication",
    links: [
      "Homeopathy",
      "Stomach & Intestine",
      "Eye & Sight",
      "Seasonal Remedies Winter",
      "Anti Pain",
      "Seasonal Remedies for Spring & Summer",
    ],
  },
  {
    title: "Personal Care",
    links: [
      "Hair Hygiene & Care",
      "Intimacy",
      "Body Hygiene & Care",
      "Line & Well Being",
      "Oral Hygiene",
      "Soleri",
      "Dermo cosmetics",
    ],
  },
  {
    title: "Supplements",
    links: [
      "Wellbeing & Energy",
      "Specific Supplements",
      "Pregnancy & Menopause",
    ],
  },
];

const socials = [
  { icon: "/images/linkedin_icon.svg", alt: "LinkedIn" },
  { icon: "/images/facebook_icon.svg", alt: "Facebook" },
  { icon: "/images/insta_icon.svg", alt: "Instagram" },
  { icon: "/images/twitter_icon.svg", alt: "Twitter" },
];

const payments = [
  "/images/paypal.svg",
  "/images/stripe.svg",
  "/images/mastercard.svg",
  "/images/visa.svg",
  "/images/applepay.svg",
];

export default function Footer() {
  return (
    <footer className="bg-[#EDF2FB] px-4 sm:px-6 lg:px-10 py-10 space-y-12">

      {/* Stats Section */}
      <div className="border-b border-gray-300 max-w-7xl mx-auto pb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
          What Makes FarmaDoc Different
        </h2>

        <p className="text-[#6B6F72] text-sm mb-8 text-center">
          More than discounts, FarmaDoc brings transparency, trust, and sustainability to your healthcare purchases.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-3">

              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl">
                  {item.value}
                </span>

                <span className="text-sm text-[#9A9C9E]">
                  {item.label}
                </span>
              </div>

              <Image
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
              />
              {index !== stats.length - 1 && (
                <div className="hidden lg:block w-px h-[60px] bg-gray-300"></div>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {footerLinks.map((section, index) => (
          <div key={index}>

            <h4 className="font-semibold mb-3 text-black text-lg">
              {section.title}
            </h4>

            <ul className="space-y-2 text-sm text-[#6B6F72]">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-black cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>

            {section.title === "Supplements" && (
              <>
                <h4 className="font-semibold mt-6 mb-3 text-black text-lg">
                  Follow Us
                </h4>

                <div className="flex gap-3">
                  {socials.map((social, i) => (
                    <Image
                      key={i}
                      src={social.icon}
                      alt={social.alt}
                      width={32}
                      height={32}
                    />
                  ))}
                </div>
              </>
            )}

          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-center text-xs">

        {/* Left */}
        <div className="flex flex-col">

          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={180}
            height={30}
          />

          <div className="mt-4 flex flex-wrap gap-2 text-gray-600">
            <span>© 2024 Farmadoc Srls</span>
            <span>|</span>
            <span>Via Divisione Julia 7, 24121 Bergamo</span>
            <span>|</span>
            <span>VAT number 04796980169</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <a href="#" className="underline hover:text-gray-700">
              Privacy Policy
            </a>

            <span>|</span>

            <a
              href="https://storyset.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Illustrations
            </a>

            <span>|</span>

            <span>Made with Cuborio™</span>
          </div>

        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">

          <p className="font-bold whitespace-nowrap">
            Payment Methods
          </p>

          {payments.map((payment, index) => (
            <Image
              key={index}
              src={payment}
              alt="payment"
              width={36}
              height={20}
            />
          ))}

        </div>

      </div>

    </footer>
  );
}