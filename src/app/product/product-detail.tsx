import { Tabs } from "@radix-ui/react-tabs";
import { TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
export default function ProductDetail() {
	return (
		<div className="mt-12">
			<Tabs defaultValue="details">
				<TabsList className="w-full justify-start mb-6">
					<TabsTrigger
						value="details"
						className="text-lg "
					>
						Details
					</TabsTrigger>
				</TabsList>
				<TabsContent value="details">
					<div className="text-sm text-gray-700 space-y-4">
						<p>
							Join us if beauty is simplicity for you. We bring you the finest products where form and function are in perfect harmony.
							Designed to be both aesthetically pleasing and functionally superior, our products are crafted with the utmost attention
							to detail. With their sleek design and user-friendly features, they seamlessly integrate into your daily routine, making
							your life easier and more enjoyable. But they&apos; re not just about looks; they&apos; re built to last, with
							high-quality materials and robust construction ensuring they withstand the test of time. Experience the perfect blend of
							form and function with our meticulously designed products.
						</p>
					</div>

					<div className="mt-8">
						<h3 className="font-medium mb-4">Screens</h3>
						<div className="grid grid-cols-2 gap-y-4 text-sm">
							<div>Screen diagonal</div>
							<div className="text-right">6.7&apos;</div>
							<div>The screen resolution</div>
							<div className="text-right">2796x1290</div>
							<div>The screen refresh rate</div>
							<div className="text-right">120 Hz</div>
							<div>The pixel density</div>
							<div className="text-right">460 ppi</div>
							<div>Screen type</div>
							<div className="text-right">OLED</div>
						</div>
					</div>

					<div className="mt-8">
						<h3 className="font-medium mb-4">Additional</h3>
						<div className="grid grid-cols-2 gap-y-4 text-sm">
							<div>Dynamic Island</div>
							<div className="text-right">
								<Badge>New</Badge>
							</div>
							<div>LiDAR scanner</div>
							<div className="text-right">Yes</div>
							<div>True Tone</div>
							<div className="text-right">Yes</div>
							<div>Face ID</div>
							<div className="text-right">Yes</div>
						</div>
					</div>

					<div className="mt-8">
						<h3 className="font-medium mb-4">CPU</h3>
						<div className="grid grid-cols-2 gap-y-4 text-sm">
							<div>CPU</div>
							<div className="text-right">A16 Bionic</div>
							<div>Number of cores</div>
							<div className="text-right">6</div>
						</div>
					</div>

					<div className="mt-8 flex justify-center">
						<Button
							variant="outline"
							className="flex items-center gap-2"
						>
							View More <ChevronDown className="h-4 w-4" />
						</Button>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
