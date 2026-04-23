import Image from "next/image";

type PromiseItem = {
  icon: string;
  title: string;
  description: string;
};

type PromisesSectionProps = {
  imageSrc: string;
  title: string;
  description: string;
  items: PromiseItem[];
  buttonText: string;
  onButtonClick?: () => void;
};

export default function PromisesSection({
  imageSrc,
  title,
  description,
  items,
  buttonText,
  onButtonClick,
}: PromisesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

      {/* Left Image */}
      <div className="relative w-full h-[620px] overflow-hidden">
        <Image
          src={imageSrc}
          alt="section image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[630px]">

        <h2 className="text-[32px] font-helvetica font-medium text-[#1E3862] mb-4">
          {title}
        </h2>

        <p className="text-[#6B6F72] font-medium text-[16px] font-inter mb-6">
          {description}
        </p>

        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 py-4 ${
                index !== items.length - 1
                  ? "border-b border-[#EEF2F5]"
                  : ""
              }`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="rounded-lg"
              />

              <div>
                <h4 className="font-semibold text-[20px] font-inter">
                  {item.title}
                </h4>
                <p className="text-[16px] font-inter text-[#6B6F72]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onButtonClick}
          className="mt-6 px-5 py-3 bg-[#1E3862] text-white rounded-md hover:bg-blue-700 transition font-medium font-inter text-[16px]"
        >
          {buttonText}
        </button>

      </div>
    </section>
  );
}