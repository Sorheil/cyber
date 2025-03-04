"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock data for cart items
const initialCartItems = [
	{
		id: 1,
		name: "Apple iPhone 14 Pro Max",
		variant: "128Gb Deep Purple",
		sku: "#25139526913984",
		price: 1399,
		quantity: 1,
		image: "/images/new-arrival/Iphone14pro.png",
	},
	{
		id: 2,
		name: "AirPods Max",
		variant: "Silver",
		sku: "#53459358345",
		price: 549,
		quantity: 1,
		image: "/images/new-arrival/Iphone14pro.png",
	},
	{
		id: 3,
		name: "Apple Watch Series 9 GPS",
		variant: "41mm Starlight Aluminium",
		sku: "#63632324",
		price: 399,
		quantity: 1,
		image: "/images/new-arrival/Iphone14pro.png",
	},
];

export default function ShoppingCart() {
	const [cartItems, setCartItems] = useState(initialCartItems);
	const [promoCode, setPromoCode] = useState("");
	const [bonusCard, setBonusCard] = useState("");

	// Calculate totals
	const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
	const tax = 50;
	const shipping = 29;
	const total = subtotal + tax + shipping;

	// Handle quantity changes
	const updateQuantity = (id: number, newQuantity: number) => {
		if (newQuantity < 1) return;

		setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
	};

	// Handle item removal
	const removeItem = (id: number) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	return (
		<main className="flex-1 py-8 lg:px-48">
			{/* Main Content */}
			<div className="container mx-auto px-4">
				<h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="md:col-span-2">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="mb-6"
							>
								<div className="flex items-center gap-4">
									<div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
										<Image
											src={item.image || "/placeholder.svg"}
											alt={item.name}
											width={80}
											height={80}
											className="w-full h-full object-contain"
										/>
									</div>

									<div className="flex-1">
										<h3 className="font-medium">{item.name}</h3>
										<p className="text-sm text-gray-600">{item.variant}</p>
										<p className="text-xs text-gray-500">{item.sku}</p>
									</div>

									<div className="flex items-center gap-3">
										<button
											onClick={() => updateQuantity(item.id, item.quantity - 1)}
											className="p-1 rounded-md border"
										>
											<Minus className="h-4 w-4" />
										</button>

										<span className="w-8 text-center">{item.quantity}</span>

										<button
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
											className="p-1 rounded-md border"
										>
											<Plus className="h-4 w-4" />
										</button>
									</div>

									<div className="text-right min-w-[80px]">
										<p className="font-medium">${item.price}</p>
									</div>

									<button
										onClick={() => removeItem(item.id)}
										className="p-1"
									>
										<X className="h-5 w-5" />
									</button>
								</div>

								{item.id !== cartItems.length && <Separator className="my-6" />}
							</div>
						))}
					</div>

					{/* Order Summary */}
					<div className="md:col-span-1">
						<div className="border rounded-lg p-6">
							<h2 className="text-xl font-bold mb-4">Order Summary</h2>

							<div className="space-y-4 mb-6">
								<div>
									<p className="text-sm mb-2">Discount code / Promo code</p>
									<Input
										placeholder="Code"
										value={promoCode}
										onChange={(e) => setPromoCode(e.target.value)}
										className="h-10"
									/>
								</div>

								<div>
									<p className="text-sm mb-2">Your bonus card number</p>
									<div className="relative">
										<Input
											placeholder="Enter Card Number"
											value={bonusCard}
											onChange={(e) => setBonusCard(e.target.value)}
											className="pr-16 h-10"
										/>
										<Button
											variant="outline"
											size="sm"
											className="absolute right-0 top-1/2 -translate-y-1/2"
										>
											Apply
										</Button>
									</div>
								</div>
							</div>

							<div className="space-y-3 mb-6">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span className="font-medium">${subtotal}</span>
								</div>

								<div className="flex justify-between">
									<span>Estimated Tax</span>
									<span>${tax}</span>
								</div>

								<div className="flex justify-between">
									<span>Estimated shipping & Handling</span>
									<span>${shipping}</span>
								</div>

								<Separator />

								<div className="flex justify-between font-medium">
									<span>Total</span>
									<span>${total}</span>
								</div>
							</div>

							<Link href={"/checkout"}>
								<Button
									className="w-full py-6 bg-black text-white border-xl hover:opacity-80"
									size="lg"
								>
									Checkout
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
