import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#211c24] text-white lg:px-48">
      <div className="container mx-auto flex flex-col items-center px-4 pt-12 md:flex-row md:justify-between md:px-8 md:pt-16">
        {/* Content */}
        <div className="z-10 mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <p className="mb-2 text-sm md:text-base">Pro Beyond.</p>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            <span>iPhone 14 </span>
            <span className="font-extrabold">Pro</span>
          </h1>
          <p className="mb-6 max-w-md text-sm md:text-base">
            Created to change everything for the better. For everyone.
          </p>
          <Link
            href="/shop/iphone-14-pro"
            className="inline-block rounded-md border border-white px-8 py-3 text-sm font-medium text-white"
          >
            Shop Now
          </Link>
        </div>
        {/* Image */}
        <div>
          <Image
            src="/images/Banner.png"
            alt="iPhone 14 Pro"
            width={4006}
            height={998}
            className="h-[300px] w-auto object-contain md:h-[500px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
