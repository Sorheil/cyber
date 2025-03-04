// import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import { Watch } from "lucide-react";
import { Camera } from "lucide-react";
import { Headphones } from "lucide-react";
import { Computer } from "lucide-react";
import { Gamepad } from "lucide-react";

export default function CategoryBrowser() {
	const categories = [
		{ name: "Phones", icon: Smartphone },
		{ name: "Smart Watches", icon: Watch },
		{ name: "Cameras", icon: Camera },
		{ name: "Headphones", icon: Headphones },
		{ name: "Computers", icon: Computer },
		{ name: "Gaming", icon: Gamepad },
	];

	return (
		<section className="py-8 px-4 md:px-8 lg:px-48">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-bold">Browse By Category</h2>
				{/* <div className="flex space-x-2">
					<button className="p-1 border rounded-full">
						<ChevronLeft size={16} />
					</button>
					<button className="p-1 border rounded-full">
						<ChevronRight size={16} />
					</button>
				</div> */}
			</div>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
				{categories.map((category) => (
					<Link
						key={category.name}
						href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
						className="flex flex-col items-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
					>
						<div className="p-2 mb-2">
							<category.icon size={32} />
						</div>
						<span className="text-xs text-center">{category.name}</span>
					</Link>
				))}
			</div>
		</section>
	);
}
