
import { Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Product from "@/components/ui/product";
import Review from "./review";
import Breadcrumb from "@/components/ui/BreadCrumb";
import ProductDetailCard from "./product-detail-card";
import ProductDetail from "./product-detail";

/**
 * TODO
 * 1-RENDRE FONCTIONELLE LE BOUTON VIEW MORE
 * 2-
 */

const products = [
	{
		id: 1,
		name: "Apple iPhone 13 Pro (128GB Gold)",
		price: "$1437",
		image: "/images/new-arrival/Iphone14pro.png",
		alt: "iPhone 13 Pro",
	},
	{
		id: 2,
		name: "AirPods Max Silver",
		price: "$549",
		image: "/images/new-arrival/Iphone14pro.png",
		alt: "AirPods Max Silver",
	},
	{
		id: 3,
		name: "Apple Watch Series 8 GPS 41mm Silver",
		price: "$399",
		image: "/images/new-arrival/Iphone14pro.png",
		alt: "Apple Watch Series 8 GPS",
	},
	{
		id: 4,
		name: "Apple iPhone 14 Pro (128GB Gold)",
		price: "$1499",
		image: "/images/new-arrival/Iphone14pro.png",
		alt: "iPhone 14 Pro",
	},
];

const reviews = [
	{
		name: "Steve Carley",
		date: "15 January 2023",
		rating: 4,
		avatar: "/images/profil/user.png",
		comment: "I was hesitant to buy such an expensive phone from Amazon, but I couldn't be happier with my purchase!...",
	},
	{
		name: "Ronald Richards",
		date: "10 January 2023",
		rating: 4,
		avatar: "/images/profil/user.png",
		comment: "This phone has 7 message apps installed. Plus all the new iPhone features in iOS 16 work!...",
	},
	{
		name: "Darcy King",
		date: "28 December 2022",
		rating: 5,
		avatar: "/images/profil/user.png",
		comment: "I bought the 14 Pro only to see that the screen is 6.06in. Today I'm trading it in for a software update...",
		images: ["/images/new-arrival/Iphone14pro.png", "/images/new-arrival/Iphone14pro.png"],
	},
	{
		name: "John Malcolm",
		date: "15 December 2022",
		rating: 5,
		avatar: "/images/profil/user.png",
		comment: "I've been using iPhones for years, and this is by far the best one yet...",
	},
];

const itemsBreadCrumb = [
	{ href: "/", label: "Home" },
	{ href: "/catalog", label: "Catalog" },
	{ href: "/smartphones", label: "Smartphone" },
	{ href: "/apple", label: "Apple" },
	{ label: "iPhone 14 Pro Max" },
];

export default function ProductPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Breadcrumb */}
			<Breadcrumb items={itemsBreadCrumb} />

			{/* Product Section */}
			<main className="container mx-auto px-4 py-8 flex-1 lg:px-48">
				{/*Product Details*/}
				<ProductDetailCard />
				{/* Product Details */}
				<ProductDetail />
				{/* Reviews */}
				<div className="mt-12">
					<h2 className="text-xl font-bold mb-6">Reviews</h2>

					<div className="flex flex-col md:flex-row gap-8 mb-8">
						<div className="flex flex-col items-center">
							<div className="text-4xl font-bold">4.8</div>
							<div className="flex items-center mb-1">
								<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
								<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
							</div>
							<div className="text-xs text-gray-500">Based on 120 reviews</div>
						</div>

						<div className="flex-1">
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<div className="w-16 text-sm">Excellent</div>
									<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											className="bg-yellow-400 h-full"
											style={{ width: "75%" }}
										></div>
									</div>
									<div className="text-sm text-gray-500">105</div>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-16 text-sm">Good</div>
									<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											className="bg-yellow-400 h-full"
											style={{ width: "10%" }}
										></div>
									</div>
									<div className="text-sm text-gray-500">11</div>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-16 text-sm">Average</div>
									<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											className="bg-yellow-400 h-full"
											style={{ width: "3%" }}
										></div>
									</div>
									<div className="text-sm text-gray-500">3</div>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-16 text-sm">Below Average</div>
									<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											className="bg-yellow-400 h-full"
											style={{ width: "1%" }}
										></div>
									</div>
									<div className="text-sm text-gray-500">1</div>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-16 text-sm">Poor</div>
									<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
										<div
											className="bg-yellow-400 h-full"
											style={{ width: "0%" }}
										></div>
									</div>
									<div className="text-sm text-gray-500">0</div>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						{reviews.map((review, index) => (
							<Review
								review={review}
								key={index}
							/>
						))}
					</div>

					<div className="mt-8 flex justify-center">
						<Button
							variant="outline"
							className="flex items-center gap-2"
						>
							View More <ChevronDown className="h-4 w-4" />
						</Button>
					</div>
				</div>

				{/* Related Products */}
				<div className="mt-16">
					<h2 className="text-xl font-bold mb-6">Related Products</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{products.map((product) => (
							<Product
								key={product.id}
								product={product}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
