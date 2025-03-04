"use client";

import { useState } from "react";
import { AddressStep } from "@/app/checkout/address-step";
import { ShippingStep } from "@/app/checkout/shipping-step";
import { PaymentStep } from "@/app/checkout/payment-step";
import { StepIndicator } from "@/app/checkout/step-indicator";

export default function CheckoutPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [selectedAddress, setSelectedAddress] = useState("home");
	const [shippingMethod, setShippingMethod] = useState("free");
	const [paymentMethod, setPaymentMethod] = useState("credit-card");
	const [sameAsBilling, setSameAsBilling] = useState(true);

	const handleNext = () => {
		if (currentStep < 3) {
			setCurrentStep(currentStep + 1);
			window.scrollTo(0, 0);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
			window.scrollTo(0, 0);
		}
	};

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 container mx-auto px-4 py-6 max-w-6xl">
				<StepIndicator currentStep={currentStep} />

				{currentStep === 1 && (
					<AddressStep
						selectedAddress={selectedAddress}
						setSelectedAddress={setSelectedAddress}
						onNext={handleNext}
					/>
				)}

				{currentStep === 2 && (
					<ShippingStep
						shippingMethod={shippingMethod}
						setShippingMethod={setShippingMethod}
						onBack={handleBack}
						onNext={handleNext}
					/>
				)}

				{currentStep === 3 && (
					<PaymentStep
						paymentMethod={paymentMethod}
						setPaymentMethod={setPaymentMethod}
						sameAsBilling={sameAsBilling}
						setSameAsBilling={setSameAsBilling}
						onBack={handleBack}
					/>
				)}
			</main>
		</div>
	);
}
