import Link from "next/link";
import Image from "next/image";

export default function SummerSale() {
	return (
		<section className=" py-12 px-4 md:px-8 md:py-40 bg-[#2E2E2E] text-white relative overflow-hidden ">
			<div className=" mx-auto relative z-10">
				<div className=" text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Big Summer <span className="font-normal">Sale</span>
					</h2>
					<Link
						href="/sale"
						className="  text-white px-8 py-3 rounded-md font-medium text-sm border border-white md:mt-2"
					>
						Shop Now
					</Link>
				</div>
			</div>
			{/* Background images would be positioned here in a real implementation */}
			<Image
				src="/images/summersale/1.png"
				alt="product"
				width={400}
				height={200}
				className="object-contain absolute -top-1/4 left-0"
				priority
			/>
			<Image
				src="/images/summersale/2.png"
				alt="product"
				width={400}
				height={200}
				className="object-contain absolute  top-1/4 -left-20"
				priority
			/>
			<Image
				src="/images/summersale/3.png"
				alt="product"
				width={400}
				height={200}
				className="object-contain absolute "
				priority
			/>
			<Image
				src="/images/summersale/4.png"
				alt="product"
				width={400}
				height={200}
				className="object-contain absolute -right-1/12 top-0 "
				priority
			/>
			<Image
				src="/images/summersale/5.png"
				alt="product"
				width={400}
				height={200}
				className="object-contain absolute right-0 -bottom-1/2"
				priority
			/>
		</section>
	);
}
