import { Pencil, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface AddressStepProps {
	selectedAddress: string;
	setSelectedAddress: (address: string) => void;
	onNext: () => void;
}

export function AddressStep({ selectedAddress, setSelectedAddress, onNext }: AddressStepProps) {
	return (
		<div className="py-4">
			<h2 className="text-2xl font-bold mb-6">Select Address</h2>

			<RadioGroup
				value={selectedAddress}
				onValueChange={setSelectedAddress}
				className="space-y-4"
			>
				<div className={`p-4 rounded-lg ${selectedAddress === "home" ? "bg-gray-100" : "bg-gray-100"}`}>
					<div className="flex items-start">
						<RadioGroupItem
							value="home"
							id="home"
							className="mt-1"
						/>
						<div className="ml-3 flex-1">
							<div className="flex items-center justify-between">
								<Label
									htmlFor="home"
									className="font-medium text-base"
								>
									2118 Thornridge
								</Label>
								<span className="text-xs font-medium bg-black text-white px-2 py-0.5 rounded">HOME</span>
							</div>
							<div className="mt-1 text-sm">
								<p>2118 Thornridge Cir.</p>
								<p>Syracuse, Connecticut 35624</p>
								<p className="mt-1">(209) 555-0104</p>
							</div>
						</div>
						<div className="flex ml-4 space-x-2">
							<button className="text-gray-500">
								<Pencil className="w-4 h-4" />
							</button>
							<button className="text-gray-500">
								<X className="w-4 h-4" />
							</button>
						</div>
					</div>
				</div>

				<div className={`p-4 rounded-lg ${selectedAddress === "office" ? "bg-gray-100" : "bg-gray-100"}`}>
					<div className="flex items-start">
						<RadioGroupItem
							value="office"
							id="office"
							className="mt-1"
						/>
						<div className="ml-3 flex-1">
							<div className="flex items-center justify-between">
								<Label
									htmlFor="office"
									className="font-medium text-base"
								>
									Headoffice
								</Label>
								<span className="text-xs font-medium bg-black text-white px-2 py-0.5 rounded">OFFICE</span>
							</div>
							<div className="mt-1 text-sm">
								<p>2715 Ash Dr. San Jose,</p>
								<p>South Dakota 83475</p>
								<p className="mt-1">(704) 555-0127</p>
							</div>
						</div>
						<div className="flex ml-4 space-x-2">
							<button className="text-gray-500">
								<Pencil className="w-4 h-4" />
							</button>
							<button className="text-gray-500">
								<X className="w-4 h-4" />
							</button>
						</div>
					</div>
				</div>
			</RadioGroup>

			<div className="mt-8 flex justify-center border-t border-dashed pt-8">
				<button className="flex items-center text-sm font-medium">
					<Plus className="w-4 h-4 mr-2" />
					Add New Address
				</button>
			</div>

			<div className="mt-8 flex justify-end space-x-4">
				<Button
					variant="outline"
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
