"use client";

import { useState } from "react";
import { ChevronLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MobileFiltersProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function MobileFilters({ open, setOpen }: MobileFiltersProps) {
	const [priceRange, setPriceRange] = useState([0, 1299]);

	const brands = [
		{ name: "Apple", count: 110, checked: true },
		{ name: "Samsung", count: 125, checked: false },
		{ name: "Xiaomi", count: 68, checked: false },
		{ name: "Poco", count: 34, checked: false },
		{ name: "OPPO", count: 36, checked: false },
		{ name: "Honor", count: 10, checked: false },
		{ name: "Motorola", count: 24, checked: false },
		{ name: "Nokia", count: 22, checked: false },
		{ name: "Realme", count: 35, checked: false },
	];

	const memory = [
		{ size: "16GB", count: 55, checked: true },
		{ size: "32GB", count: 123, checked: false },
		{ size: "64GB", count: 48, checked: false },
		{ size: "128GB", count: 50, checked: false },
		{ size: "256GB", count: 24, checked: false },
		{ size: "512GB", count: 8, checked: false },
	];

	return (
		<div
			className={`fixed inset-0  w-full h-screen flex flex-col bg-white z-50 transition-transform
    ${open ? "translate-x-0" : "-translate-x-full"}`}
		>
			<div className="container mx-auto px-4 py-4 flex-1">
				{/* title */}
				<div className="flex items-center gap-2 mb-6">
					<Button
						variant="ghost"
						onClick={() => setOpen(false)}
						className="p-0 h-auto"
					>
						<ChevronLeft className="h-5 w-5" />
					</Button>
					<h1 className="text-lg font-medium">Filters</h1>
				</div>
				{/* content */}
				<div className="space-y-6">
					<Accordion
						type="single"
						collapsible
						defaultValue="price"
						className="border-none"
					>
						<AccordionItem
							value="price"
							className="border-b"
						>
							<AccordionTrigger className="py-3 text-base font-medium">Price</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-4">
									<div className="flex gap-4">
										<div className="w-1/2">
											<label className="text-xs text-gray-500">From</label>
											<Input
												type="number"
												value={priceRange[0]}
												onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
												className="mt-1"
											/>
										</div>
										<div className="w-1/2">
											<label className="text-xs text-gray-500">To</label>
											<Input
												type="number"
												value={priceRange[1]}
												onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
												className="mt-1"
											/>
										</div>
									</div>
									<div className="px-1 pt-6">
										<Slider
											defaultValue={[0, 1299]}
											max={1299}
											step={1}
											value={priceRange}
											onValueChange={setPriceRange}
											className=" bg-black"
										/>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="brand"
							className="border-b"
						>
							<AccordionTrigger className="py-3 text-base font-medium">Brand</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-4">
									<div className="relative">
										<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
										<Input
											placeholder="Search"
											className="pl-10"
										/>
									</div>
									<div className="space-y-3 max-h-60 overflow-y-auto pr-2">
										{brands.map((brand) => (
											<div
												key={brand.name}
												className="flex items-center gap-2"
											>
												<Checkbox
													id={`mobile-brand-${brand.name}`}
													checked={brand.checked}
												/>
												<label
													htmlFor={`mobile-brand-${brand.name}`}
													className="flex-1 text-sm cursor-pointer"
												>
													{brand.name}
												</label>
												<span className="text-xs text-gray-500">{brand.count}</span>
											</div>
										))}
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="memory"
							className="border-b"
						>
							<AccordionTrigger className="py-3 text-base font-medium">Built-in memory</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-4">
									<div className="relative">
										<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
										<Input
											placeholder="Search"
											className="pl-10"
										/>
									</div>
									<div className="space-y-3 max-h-60 overflow-y-auto pr-2">
										{memory.map((item) => (
											<div
												key={item.size}
												className="flex items-center gap-2"
											>
												<Checkbox
													id={`mobile-memory-${item.size}`}
													checked={!item.checked}
												/>
												<label
													htmlFor={`mobile-memory-${item.size}`}
													className="flex-1 text-sm cursor-pointer"
												>
													{item.size}
												</label>
												<span className="text-xs text-gray-500">{item.count}</span>
											</div>
										))}
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="protection"
							className="border-b"
						>
							<AccordionTrigger className="py-3 text-base font-medium">Protection class</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-3">
									{/* Protection class options would go here */}
									<div className="text-sm text-gray-500">No options available</div>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="diagonal"
							className="border-b"
						>
							<AccordionTrigger className="py-3 text-base font-medium">Screen diagonal</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-3">
									{/* Screen diagonal options would go here */}
									<div className="text-sm text-gray-500">No options available</div>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="screentype"
							className="border-b"
						>
							<AccordionTrigger className="py-3 text-base font-medium">Screen type</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-3">
									{/* Screen type options would go here */}
									<div className="text-sm text-gray-500">No options available</div>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="battery"
							className="border-b"
						>
							<AccordionTrigger className="py-3 text-base font-medium">Battery capacity</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-3">
									{/* Battery capacity options would go here */}
									<div className="text-sm text-gray-500">No options available</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>

			<div className="sticky bottom-0 p-4 bg-white border-t">
				<Button className="w-full bg-black hover:bg-gray-800 text-white">Apply</Button>
			</div>
		</div>
	);
}
