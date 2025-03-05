"use client";

import { useState, useEffect } from "react";
import ProductGrid from "@/app/products/product-grid";
import FiltersSidebar from "@/app/products/filters-sidebar";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MobileFilters from "./mobile-filters";

const products = [
	{ id: 1, name: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: 1437, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 2, name: "Apple iPhone 11 128GB White (MQ233)", price: 510, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 3, name: "Apple iPhone 11 128GB White (MQ233)", price: 550, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 4, name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: 1499, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 5, name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: 1399, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 6, name: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)", price: 1600, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 7, name: "Apple iPhone 13 mini 128GB Pink (MLK23)", price: 850, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 8, name: "Apple iPhone 14 Pro 256GB Space Black (MQ0T3)", price: 1399, image: "/images/new-arrival/Iphone14pro.png" },
	{ id: 9, name: "Apple iPhone 14 Pro 256GB Silver (MQ103)", price: 1399, image: "/images/new-arrival/Iphone14pro.png" },
];

function MobileView() {
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);
	return (
		<div className="relative">
			<MobileFilters
				open={isFiltersOpen}
				setOpen={setIsFiltersOpen}
			/>
			<div className="mb-4">
				<div className="flex justify-between items-center mb-4">
					<Button
						variant="ghost"
						className="p-0 h-auto"
						onClick={() => setIsFiltersOpen(true)}
					>
						<div className="flex items-center gap-2">
							<SlidersHorizontal className="h-5 w-5" />
							<span>Filters</span>
						</div>
					</Button>

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
					Selected Products: <span className="font-semibold">85</span>
				</div>
				<ProductGrid
					products={products}
					isMobile={true}
				/>
			</div>
		</div>
	);
}

function DesktopView() {
	return (
		<div className="flex gap-8">
			<FiltersSidebar />
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
	);
}

export default function ProductsPage() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	return (
		<main className="flex flex-col min-h-screen">
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
				{isMobile ? <MobileView /> : <DesktopView />}
			</div>
		</main>
	);
}
