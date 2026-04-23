import Image from "next/image";
import Link from "next/link";

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
      { label: "Who we are" },
      { label: "Our Mission" },
      { label: "Join FarmaDoc" },
      { label: "How it Works", href: "/how-it-works" },
      { label: "FAQ's", href: "/faqs" },
      { label: "Blog Main", href: "/blogmain" },
      { label: "Contact us" },
    ],
  },
  {
    title: "Self-Medication",
    links: [
      { label: "Homeopathy" },
      { label: "Stomach & Intestine" },
      { label: "Eye & Sight" },
      { label: "Seasonal Remedies Winter" },
      { label: "Anti Pain" },
      { label: "Seasonal Remedies for Spring & Summer" },
    ],
  },
  {
    title: "Personal Care",
    links: [
      { label: "Hair Hygiene & Care" },
      { label: "Intimacy" },
      { label: "Body Hygiene & Care" },
      { label: "Line & Well Being" },
      { label: "Oral Hygiene" },
      { label: "Soleri" },
      { label: "Dermo cosmetics" },
    ],
  },
  {
    title: "Supplements",
    links: [
      { label: "Wellbeing & Energy" },
      { label: "Specific Supplements" },
      { label: "Pregnancy & Menopause" },
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
    <footer className="space-y-12 bg-[#EDF2FB] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl border-b border-gray-300 pb-8">
        <h2 className="mb-2 text-center text-xl font-semibold sm:text-2xl">
          What Makes FarmaDoc Different
        </h2>

        <p className="mb-8 text-center text-sm text-[#6B6F72]">
          More than discounts, FarmaDoc brings transparency, trust, and
          sustainability to your healthcare purchases.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-lg font-bold sm:text-xl">
                  {item.value}
                </span>

                <span className="text-sm text-[#9A9C9E]">{item.label}</span>
              </div>

              <Image
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
              />

              {index !== stats.length - 1 && (
                <div className="hidden h-[60px] w-px bg-gray-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="mb-3 text-lg font-semibold text-black">
              {section.title}
            </h4>

            <ul className="space-y-2 text-sm text-[#6B6F72]">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-black">
                  {link.href ? (
                    <Link href={link.href} className="cursor-pointer">
                      {link.label}
                    </Link>
                  ) : (
                    <span className="cursor-pointer">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>

            {section.title === "Supplements" && (
              <>
                <h4 className="mt-6 mb-3 text-lg font-semibold text-black">
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

      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col">
          <Image src="/images/Logo.png" alt="Logo" width={180} height={30} />

          <div className="mt-4 flex flex-wrap gap-2 text-gray-600">
            <span>© 2024 Farmadoc Srls - All rights reserved - Via Divisione Julia 7, 24121 Bergamo - VAT number 04796980169 - REA BG489983 - Share capital €1,000 fully paid-up</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <Link href="/privacy-policy" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>

            <span>|</span>

            <Link href="/terms-conditions" className="underline hover:text-gray-700">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="whitespace-nowrap font-bold">Payment Methods</p>

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
