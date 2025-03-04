import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

interface ShippingStepProps {
	shippingMethod: string;
	setShippingMethod: (method: string) => void;
	onBack: () => void;
	onNext: () => void;
}

export function ShippingStep({ shippingMethod, setShippingMethod, onBack, onNext }: ShippingStepProps) {
	return (
		<div className="py-4">
			<h2 className="text-2xl font-bold mb-6">Shipment Method</h2>

			<RadioGroup
				value={shippingMethod}
				onValueChange={setShippingMethod}
				className="space-y-4"
			>
				<div className="border rounded-lg p-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<RadioGroupItem
								value="free"
								id="free"
							/>
							<div className="ml-3">
								<Label
									htmlFor="free"
									className="font-medium"
								>
									Free
								</Label>
								<p className="text-sm text-gray-500">Regulary shipment</p>
							</div>
						</div>
						<div className="text-right">
							<p className="font-medium">17 Oct, 2023</p>
						</div>
					</div>
				</div>

				<div className="border rounded-lg p-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<RadioGroupItem
								value="express"
								id="express"
							/>
							<div className="ml-3">
								<Label
									htmlFor="express"
									className="font-medium"
								>
									$8.50
								</Label>
								<p className="text-sm text-gray-500">Get your delivery as soon as possible</p>
							</div>
						</div>
						<div className="text-right">
							<p className="font-medium">1 Oct, 2023</p>
						</div>
					</div>
				</div>

				<div className="border rounded-lg p-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<RadioGroupItem
								value="schedule"
								id="schedule"
							/>
							<div className="ml-3">
								<Label
									htmlFor="schedule"
									className="font-medium"
								>
									Schedule
								</Label>
								<p className="text-sm text-gray-500">Pick a date when you want to get your delivery</p>
							</div>
						</div>
						<div className="text-right">
							<button className="flex items-center text-sm font-medium">
								Select Date
								<ChevronDown className="ml-1 w-4 h-4" />
							</button>
						</div>
					</div>
				</div>
			</RadioGroup>

			<div className="mt-8 flex justify-end space-x-4">
				<Button
					variant="outline"
					onClick={onBack}
					className="w-32"
				>
					Back
				</Button>
				<Button
					onClick={onNext}
					className="w-32 bg-black text-white hover:bg-gray-800"
				>
					Next
				</Button>
			</div>
		</div>
	);
}
