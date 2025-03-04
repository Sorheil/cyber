import { MapPin, Truck, CreditCard } from "lucide-react";

interface StepIndicatorProps {
	currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
	return (
		<div className="mb-8 mt-4">
			<div className="flex items-center justify-center ">
				<div className="flex items-center">
					<div
						className={`flex items-center justify-center w-8 h-8 rounded-full ${
							currentStep === 1 ? "bg-black text-white" : currentStep > 1 ? "bg-gray-200 text-gray-500" : "bg-gray-200 text-gray-500"
						}`}
					>
						<MapPin className="w-4 h-4" />
					</div>
					<div className="ml-2">
						<p className={`text-sm font-medium ${currentStep === 1 ? "text-black" : "text-gray-500"}`}>Step 1</p>
						<p className={`text-base font-medium ${currentStep === 1 ? "text-black" : "text-gray-500"}`}>Address</p>
					</div>
				</div>

				<div className="w-16 md:w-32 mx-2 border-t border-dashed border-gray-300"></div>

				<div className="flex items-center">
					<div
						className={`flex items-center justify-center w-8 h-8 rounded-full ${
							currentStep === 2 ? "bg-black text-white" : currentStep > 2 ? "bg-gray-200 text-gray-500" : "bg-gray-200 text-gray-500"
						}`}
					>
						<Truck className="w-4 h-4" />
					</div>
					<div className="ml-2">
						<p className={`text-sm font-medium ${currentStep === 2 ? "text-black" : "text-gray-500"}`}>Step 2</p>
						<p className={`text-base font-medium ${currentStep === 2 ? "text-black" : "text-gray-500"}`}>Shipping</p>
					</div>
				</div>

				<div className="w-16 md:w-32 mx-2 border-t border-dashed border-gray-300"></div>

				<div className="flex items-center">
					<div
						className={`flex items-center justify-center w-8 h-8 rounded-full ${
							currentStep === 3 ? "bg-black text-white" : "bg-gray-200 text-gray-500"
						}`}
					>
						<CreditCard className="w-4 h-4" />
					</div>
					<div className="ml-2">
						<p className={`text-sm font-medium ${currentStep === 3 ? "text-black" : "text-gray-500"}`}>Step 3</p>
						<p className={`text-base font-medium ${currentStep === 3 ? "text-black" : "text-gray-500"}`}>Payment</p>
					</div>
				</div>
			</div>
		</div>
	);
}
