import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
	return (
		<section className="py-8 px-4 md:px-8">
			<div className=" grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-4">
				{/* PlayStation 5 */}
				<div className="bg-white flex flex-col md:flex-row items-center p-6  border rounded-lg md:col-span-2">
					<div className="md:w-1/2 mb-4 md:mb-0">
						<Image
							src="/images/FeaturedProducts/playstation.png"
							alt="PlayStation 5"
							width={513}
							height={343}
							className="object-contain h-[150px] md:h-[200px] w-auto"
						/>
					</div>
					<div className="md:w-1/2 text-center md:text-left">
						<h2 className="text-2xl font-bold mb-2">Playstation 5</h2>
						<p className="text-sm text-gray-600 mb-4">
							Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine what a PlayStation console can do.
						</p>
					</div>
				</div>

				{/* Airpodsmax */}
				<div className="bg-white flex flex-col md:flex-row items-center p-6 border rounded-lg md:row-start-2">
					<div className="mb-4">
						<Image
							src="/images/FeaturedProducts/airpodsmax.png"
							alt="Apple AirPods Max"
							width={513}
							height={343}
							className="object-contain h-[120px] w-auto mx-auto"
						/>
					</div>
					<div className="text-center md:text-left">
						<h2 className="text-xl font-bold mb-1">Apple</h2>
						<h3 className="text-lg font-medium mb-2">AirPods Max</h3>
						<p className="text-xs text-gray-600 mb-2">Computational audio. Listen, it&#39;s powerful.</p>
					</div>
				</div>

				{/* Macbookair */}
				<div className="bg-gray-100 flex items-center p-6 border rounded-lg md:col-span-2 md:row-span-2 md:py-12 md:col-start-3">
					<div className="md:w-1/2 text-center md:text-left">
						<h2 className="text-2xl font-bold mb-2">
							Macbook <span className="font-normal">Air</span>
						</h2>
						<p className="text-sm text-gray-600 mb-4">The new MacBook Air is Apple{"'"}s thinnest, lightest laptop.</p>
						<Link
							href="/shop/macbook-air"
							className="inline-block bg-black text-white px-6 py-2 rounded-md font-medium text-sm"
						>
							Shop Now
						</Link>
					</div>
					<div className="md:w-1/2 mb-4 md:mb-0">
						<Image
							src="/images/FeaturedProducts/macbookair.png"
							alt="Macbook Air"
							width={513}
							height={343}
							className="object-contain h-[150px] md:h-[200px] w-auto"
						/>
					</div>
				</div>

				{/* Apple Vision Pro */}
				<div className="bg-gray-900 text-white flex flex-col p-6 border rounded-lg md:row-start-2">
					<div className="mb-4">
						<Image
							src="/images/FeaturedProducts/visionpro.png"
							alt="Apple Vision Pro"
							width={513}
							height={343}
							className="object-contain h-[120px] w-auto mx-auto"
						/>
					</div>
					<div className="text-center md:text-left">
						<h2 className="text-xl font-bold mb-1">Apple</h2>
						<h3 className="text-lg font-medium mb-2">Vision Pro</h3>
						<p className="text-xs text-gray-400 mb-2">An immersive way to experience entertainment.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
