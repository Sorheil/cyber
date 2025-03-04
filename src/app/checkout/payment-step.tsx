"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
/**TODO:
 * 1-AJOUTER UNE POPUP POUR SAISIR ENREGISTRER UNE NOUVEL ADRESSE 
 * 2-UNE POPUP POUR POUVOIR MODIFIER UNE ADRESSE
 * 3-UNE POPUP POUR DEMANDER SI IL EST CERTAIN DE VOULOIR SUPPRIMER UNE ADRESSE 
 */

interface PaymentStepProps {
	paymentMethod: string;
	setPaymentMethod: (method: string) => void;
	sameAsBilling: boolean;
	setSameAsBilling: (value: boolean) => void;
	onBack: () => void;
}

export function PaymentStep({ paymentMethod, setPaymentMethod, sameAsBilling, setSameAsBilling, onBack }: PaymentStepProps) {
	const handleTabChange = (value: string) => {
		setPaymentMethod(value);
	};

	// For desktop view, we'll show the order summary
	const [isDesktop, setIsDesktop] = useState(false);

	// Check if we're on desktop on component mount
	useState(() => {
		setIsDesktop(window.innerWidth >= 768);
		const handleResize = () => setIsDesktop(window.innerWidth >= 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<div className="py-4">
			<div className="md:grid md:grid-cols-2 md:gap-8">
				{isDesktop && (
					<div>
						<h2 className="text-2xl font-bold mb-6">Summary</h2>
						<div className="space-y-4">
							<div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
								<div className="flex items-center">
									<div className="w-12 h-12 bg-gray-200 rounded-md mr-3"></div>
									<span>Apple iPhone 14 Pro Max 128Gb</span>
								</div>
								<span className="font-bold">$1399</span>
							</div>

							<div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
								<div className="flex items-center">
									<div className="w-12 h-12 bg-gray-200 rounded-md mr-3"></div>
									<span>AirPods Max Silver</span>
								</div>
								<span className="font-bold">$549</span>
							</div>

							<div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
								<div className="flex items-center">
									<div className="w-12 h-12 bg-gray-200 rounded-md mr-3"></div>
									<span>Apple Watch Series 9 GPS 41mm</span>
								</div>
								<span className="font-bold">$399</span>
							</div>
						</div>

						<div className="mt-6 space-y-2">
							<div className="text-sm">
								<p className="font-medium">Address</p>
								<p className="text-gray-600">1131 Dusty Townline, Jacksonville, TX 40322</p>
							</div>

							<div className="text-sm">
								<p className="font-medium">Shipment method</p>
								<p className="text-gray-600">Free</p>
							</div>

							<div className="mt-4 pt-4 border-t">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span className="font-bold">$2347</span>
								</div>
								<div className="flex justify-between mt-2">
									<span>Estimated Tax</span>
									<span>$50</span>
								</div>
								<div className="flex justify-between mt-2">
									<span>Estimated shipping & Handling</span>
									<span>$29</span>
								</div>
								<div className="flex justify-between mt-4 pt-4 border-t">
									<span className="font-bold">Total</span>
									<span className="font-bold">$2426</span>
								</div>
							</div>
						</div>
					</div>
				)}

				<div>
					<h2 className="text-2xl font-bold mb-6">Payment</h2>

					<Tabs
						defaultValue="credit-card"
						value={paymentMethod}
						onValueChange={handleTabChange}
						className="w-full"
					>
						<TabsList className="grid w-full grid-cols-3 mb-6">
							<TabsTrigger value="credit-card">Credit Card</TabsTrigger>
							<TabsTrigger value="paypal">PayPal</TabsTrigger>
							<TabsTrigger value="paypal-credit">PayPal Credit</TabsTrigger>
						</TabsList>

						<TabsContent value="credit-card">
							<div className="space-y-6">
								<div className="bg-black text-white rounded-lg p-6 relative overflow-hidden">
									<div className="absolute top-0 left-0 w-full h-full">
										<div className="absolute transform rotate-45 bg-gray-800 w-96 h-32 -top-10 -right-10"></div>
										<div className="absolute transform rotate-45 bg-gray-800 w-96 h-32 -bottom-10 -left-10"></div>
									</div>

									<div className="relative z-10">
										<div className="flex items-center mb-6">
											<div className="w-10 h-6 bg-yellow-500 rounded mr-2"></div>
											<div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
												<span className="text-xs">{">"}</span>
											</div>
										</div>

										<div className="text-xl tracking-widest mb-6 font-mono">4085 9536 8475 9530</div>

										<div className="text-sm">Cardholder</div>
									</div>

									<div className="absolute bottom-4 right-4 flex">
										<div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
										<div className="w-8 h-8 bg-yellow-500 rounded-full -ml-4 opacity-80"></div>
									</div>
								</div>

								<div className="space-y-4">
									<div>
										<Label htmlFor="cardholderName">Cardholder Name</Label>
										<Input
											id="cardholderName"
											placeholder="Cardholder Name"
										/>
									</div>

									<div>
										<Label htmlFor="cardNumber">Card Number</Label>
										<Input
											id="cardNumber"
											placeholder="Card Number"
										/>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<div>
											<Label htmlFor="expDate">Exp.Date</Label>
											<Input
												id="expDate"
												placeholder="Exp.Date"
											/>
										</div>
										<div>
											<Label htmlFor="cvv">CVV</Label>
											<Input
												id="cvv"
												placeholder="CVV"
											/>
										</div>
									</div>

									<div className="flex items-center space-x-2">
										<Checkbox
											id="sameAsBilling"
											checked={sameAsBilling}
											onCheckedChange={(checked) => setSameAsBilling(checked as boolean)}
										/>
										<label
											htmlFor="sameAsBilling"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Same as billing address
										</label>
									</div>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="paypal">
							<div className="flex items-center justify-center h-64 border rounded-lg">
								<p className="text-gray-500">PayPal payment option will be available soon</p>
							</div>
						</TabsContent>

						<TabsContent value="paypal-credit">
							<div className="flex items-center justify-center h-64 border rounded-lg">
								<p className="text-gray-500">PayPal Credit payment option will be available soon</p>
							</div>
						</TabsContent>
					</Tabs>

					<div className="mt-8 flex justify-end space-x-4">
						<Button
							variant="outline"
							onClick={onBack}
							className="w-32"
						>
							Back
						</Button>
						<Button className="w-32 bg-black text-white hover:bg-gray-800">Pay</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
