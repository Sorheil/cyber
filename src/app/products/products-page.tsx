"use client";

import { useState, useEffect } from "react";
import ProductGrid from "@/app/products/product-grid";
import FiltersSidebar from "@/app/products/filters-sidebar";
import MobileFilters from "@/app/products/mobile-filters";
import { Button } from "@/components/ui/button";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProductsPage() {
	const [isMobile, setIsMobile] = useState(false);
	const [showFilters, setShowFilters] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	}, []);

	const products = [
		{
			id: 1,
			name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
			price: 1437,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 2,
			name: "Apple iPhone 11 128GB White (MQ233)",
			price: 510,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 3,
			name: "Apple iPhone 11 128GB White (MQ233)",
			price: 550,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 4,
			name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
			price: 1499,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 5,
			name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
			price: 1399,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 6,
			name: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
			price: 1600,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 7,
			name: "Apple iPhone 13 mini 128GB Pink (MLK23)",
			price: 850,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 8,
			name: "Apple iPhone 14 Pro 256GB Space Black (MQ0T3)",
			price: 1399,
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 9,
			name: "Apple iPhone 14 Pro 256GB Silver (MQ103)",
			price: 1399,
			image: "/images/new-arrival/Iphone14pro.png",
		},
	];

	if (showFilters && isMobile) {
		return <MobileFilters onBack={() => setShowFilters(false)} />;
	}

	return (
		<div className="flex flex-col min-h-screen">
			{!isMobile && null}

			<div className="container mx-auto px-4 py-4">
				{!isMobile && (
					<div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
						<span>Home</span>
						<span>/</span>
						<span>Catalog</span>
						<span>/</span>
						<span className="text-black">Smartphones</span>
					</div>
				)}

				{isMobile ? (
					// filter button and rating
					<div className="mb-4">
						<div className="flex justify-between items-center mb-4">
							<div className="flex items-center gap-2">
								<Button
									variant="ghost"
									className="p-0 h-auto"
									onClick={() => setShowFilters(true)}
								>
									<div className="flex items-center gap-2">
										<SlidersHorizontal className="h-5 w-5" />
										<span>Filters</span>
									</div>
								</Button>
							</div>
							<Select defaultValue="rating">
								<SelectTrigger className="w-[130px] h-8 text-xs">
									<SelectValue placeholder="By rating" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="rating">By rating</SelectItem>
									<SelectItem value="price-asc">Price: Low to High</SelectItem>
									<SelectItem value="price-desc">Price: High to Low</SelectItem>
									<SelectItem value="newest">Newest</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="text-sm mb-4">
							Products Result - <span className="font-semibold">85</span>
						</div>
						<ProductGrid
							products={products}
							isMobile={true}
						/>
					</div>
				) : (
					<div className="flex gap-8">
						<div className="w-1/4">
							<FiltersSidebar />
						</div>
						<div className="w-3/4">
							<div className="flex justify-between items-center mb-4">
								<div className="text-sm">
									Selected Products: <span className="font-semibold">85</span>
								</div>
								<Select defaultValue="rating">
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="By rating" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="rating">By rating</SelectItem>
										<SelectItem value="price-asc">Price: Low to High</SelectItem>
										<SelectItem value="price-desc">Price: High to Low</SelectItem>
										<SelectItem value="newest">Newest</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<ProductGrid
								products={products}
								isMobile={false}
							/>
						</div>
					</div>
				)}

				<div className="flex justify-center items-center gap-2 my-8 ">
					<Button
						variant="outline"
						size="icon"
						className="w-8 h-8 "
						
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="default"
						size="icon"
						className="w-8 h-8 bg-black text-white hover:bg-gray-800"
					>
						1
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="w-8 h-8"
					>
						2
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="w-8 h-8"
					>
						3
					</Button>
					<span className="mx-1">...</span>
					<Button
						variant="outline"
						size="icon"
						className="w-8 h-8"
					>
						12
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="w-8 h-8 rotate-180"
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
