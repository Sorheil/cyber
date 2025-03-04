import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="relative bg-[#211c24] text-white overflow-hidden lg:px-48">
			<div className="container mx-auto px-4 md:px-8 pt-12 md:pt-16 flex flex-col md:flex-row md:justify-between items-center">
				{/* Content */}
				<div className="md:w-1/2 z-10 mb-8 md:mb-0 text-center md:text-left">
					<p className="text-sm md:text-base mb-2">Pro Beyond.</p>
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						<span>iPhone 14 </span>
						<span className="font-extrabold">Pro</span>
					</h1>
					<p className="text-sm md:text-base mb-6 max-w-md">Created to change everything for the better. For everyone.</p>
					<Link
						href="/shop/iphone-14-pro"
						className="inline-block text-white px-8 py-3 rounded-md font-medium text-sm border border-white "
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
						className="object-contain h-[300px] md:h-[500px] w-auto"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
