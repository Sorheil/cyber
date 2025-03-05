"use client";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
/**TODO
 * 1-CHANGER LES LOGO (LIVRAISONS IN STOCK FREE DELIVERY)
 */
export default function ProductDetailCard() {
	const [selectedColor, setSelectedColor] = useState("purple");
	const [selectedStorage, setSelectedStorage] = useState("256GB");
	return (
		<div className="grid md:grid-cols-2 gap-8">
			{/* Product Images */}
			<div className="flex flex-col md:flex-row gap-4">
				<div className="order-2 md:order-1 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
					<button className="border rounded p-1 min-w-[60px] md:w-[60px] h-[60px] flex-shrink-0 bg-white">
						<Image
							src="/images/new-arrival/Iphone14pro.png"
							alt="iPhone 14 Pro Max Purple"
							width={60}
							height={60}
							className="w-full h-full object-contain"
						/>
					</button>
					<button className="border rounded p-1 min-w-[60px] md:w-[60px] h-[60px] flex-shrink-0 bg-white">
						<Image
							src="/images/new-arrival/Iphone14pro.png"
							alt="iPhone 14 Pro Max Side"
							width={60}
							height={60}
							className="w-full h-full object-contain"
						/>
					</button>
					<button className="border rounded p-1 min-w-[60px] md:w-[60px] h-[60px] flex-shrink-0 bg-white">
						<Image
							src="/images/new-arrival/Iphone14pro.png"
							alt="iPhone 14 Pro Max Back"
							width={60}
							height={60}
							className="w-full h-full object-contain"
						/>
					</button>
				</div>
				<div className="order-1 md:order-2 flex-1 border rounded-lg p-4 flex items-center justify-center bg-white">
					<Image
						src="/images/new-arrival/Iphone14pro.png"
						alt="iPhone 14 Pro Max"
						width={400}
						height={400}
						className=" w-full max-h-[400px] object-contain"
					/>
				</div>
			</div>

			{/* Product Info */}
			<div>
				<h1 className="text-2xl font-bold mb-2">Apple iPhone 14 Pro Max</h1>
				<div className="flex items-baseline gap-2 mb-4">
					<span className="text-xl font-bold">$1399</span>
					<span className="text-gray-500 line-through">$1499</span>
				</div>

				<div className="mb-6">
					<p className="text-sm text-gray-500 mb-2">Select color:</p>
					<div className="flex gap-2 mb-4 flex-wrap">
						<button
							className={`w-6 h-6 rounded-full ${selectedColor === "purple" ? "ring-2 ring-offset-2 ring-black" : ""}`}
							style={{ backgroundColor: "#7E6B8E" }}
							onClick={() => setSelectedColor("purple")}
							aria-label="Purple"
						/>
						<button
							className={`w-6 h-6 rounded-full ${selectedColor === "red" ? "ring-2 ring-offset-2 ring-black" : ""}`}
							style={{ backgroundColor: "#C1121F" }}
							onClick={() => setSelectedColor("red")}
							aria-label="Red"
						/>
						<button
							className={`w-6 h-6 rounded-full ${selectedColor === "black" ? "ring-2 ring-offset-2 ring-black" : ""}`}
							style={{ backgroundColor: "#000000" }}
							onClick={() => setSelectedColor("black")}
							aria-label="Black"
						/>
						<button
							className={`w-6 h-6 rounded-full ${selectedColor === "yellow" ? "ring-2 ring-offset-2 ring-black" : ""}`}
							style={{ backgroundColor: "#FFC107" }}
							onClick={() => setSelectedColor("yellow")}
							aria-label="Yellow"
						/>
					</div>

					<div className="grid grid-cols-4 gap-2 mb-6">
						<button
							className={`py-2 px-4 border rounded-md text-sm ${
								selectedStorage === "128GB" ? "border-black bg-gray-100" : "border-gray-300"
							}`}
							onClick={() => setSelectedStorage("128GB")}
						>
							128GB
						</button>
						<button
							className={`py-2 px-4 border rounded-md text-sm ${
								selectedStorage === "256GB" ? "border-black bg-gray-100" : "border-gray-300"
							}`}
							onClick={() => setSelectedStorage("256GB")}
						>
							256GB
						</button>
						<button
							className={`py-2 px-4 border rounded-md text-sm ${
								selectedStorage === "512GB" ? "border-black bg-gray-100" : "border-gray-300"
							}`}
							onClick={() => setSelectedStorage("512GB")}
						>
							512GB
						</button>
						<button
							className={`py-2 px-4 border rounded-md text-sm ${
								selectedStorage === "1TB" ? "border-black bg-gray-100" : "border-gray-300"
							}`}
							onClick={() => setSelectedStorage("1TB")}
						>
							1TB
						</button>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 mb-6">
					<div className="flex items-center gap-2 border rounded-md p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<rect
								width="14"
								height="20"
								x="5"
								y="2"
								rx="2"
								ry="2"
							/>
							<path d="M12 18h.01" />
						</svg>
						<div>
							<div className="text-xs text-gray-500">Screen</div>
							<div className="text-sm">6.7&quot; </div>
						</div>
					</div>
					<div className="flex items-center gap-2 border rounded-md p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
							<path d="M20 14v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" />
							<path d="M12 12h.01" />
						</svg>
						<div>
							<div className="text-xs text-gray-500">Apple A16 Bionic</div>
							<div className="text-sm">6 cores</div>
						</div>
					</div>
					<div className="flex items-center gap-2 border rounded-md p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
						</svg>
						<div>
							<div className="text-xs text-gray-500">OS</div>
							<div className="text-sm">iOS 16</div>
						</div>
					</div>
					<div className="flex items-center gap-2 border rounded-md p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<rect
								width="18"
								height="11"
								x="3"
								y="11"
								rx="2"
								ry="2"
							/>
							<path d="M7 11V7a5 5 0 0 1 10 0v4" />
						</svg>
						<div>
							<div className="text-xs text-gray-500">RAM</div>
							<div className="text-sm">6GB LPDDR5</div>
						</div>
					</div>
				</div>

				<p className="text-sm text-gray-600 mb-6">
					Enhanced durability thanks to an aerospace-quality 6.7-inch Super Retina XDR display with ProMotion technology. Powered by the A16
					Bionic chip, the most powerful chip in a smartphone. Featuring a 48MP main camera, Smart HDR 4, Night mode, and 4K Dolby Vision
					HDR recording for the most sophisticated video camera system.
				</p>

				<div className="flex gap-4 mb-6">
					{/* <Button
						variant="outline"
						className="flex-1 py-6"
					>
						<Heart className="h-5 w-5 mr-2" />
						Add to Wishlist
					</Button> */}
					<Button className="flex-1 py-6 bg-black hover:bg-gray-800 text-white">
						<ShoppingCart className="h-5 w-5 mr-2" />
						Add to Cart
					</Button>
				</div>

				<div className="flex items-center justify-between text-sm text-gray-500">
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle
								cx="12"
								cy="12"
								r="10"
							/>
							<polyline points="12 6 12 12 16 14" />
						</svg>
						<span>Free Delivery</span>
						<span className="font-medium">1-2 days</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
						</svg>
						<span>In Stock</span>
						<span className="font-medium">Today</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
							<path d="M12 12v9" />
							<path d="m8 17 4 4 4-4" />
						</svg>
						<span>Guaranteed</span>
						<span className="font-medium">1 year</span>
					</div>
				</div>
			</div>
		</div>
	);
}
