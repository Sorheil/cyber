"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, Smartphone, Computer, Watch, Camera, Headphones, Gamepad2 } from "lucide-react";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/contact-us", label: "Contact Us" },
	{ href: "/faq", label: "FAQ" },
];

const categories = [
	{ href: "/products", label: "Phones", icon: Smartphone },
	{ href: "/category/computers", label: "Computers", icon: Computer },
	{ href: "/category/watches", label: "Smart Watches", icon: Watch },
	{ href: "/category/cameras", label: "Cameras", icon: Camera },
	{ href: "/category/headphones", label: "Headphones", icon: Headphones },
	{ href: "/category/gaming", label: "Gaming", icon: Gamepad2 },
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="w-full ">
			<div className="flex items-center justify-between px-4 md:px-8 py-3 lg:py-6">
				<div className="flex items-center">
					<button
						className="mr-2 md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
					<Link
						href="/"
						className="flex items-center"
					>
						<span className="font-bold text-lg">xxxx</span>
					</Link>
				</div>

				<div className="hidden md:flex items-center border rounded-md px-3 py-1 flex-1 max-w-md mx-4">
					<Search
						size={18}
						className="text-gray-400 mr-2"
					/>
					<input
						type="text"
						placeholder="Search"
						className="bg-transparent outline-none w-full text-sm py-1"
					/>
				</div>

				<nav className="hidden md:flex items-center space-x-4">
					{navLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className="text-sm font-medium text-gray-500 hover:text-black"
						>
							{label}
						</Link>
					))}
				</nav>

				<div className="flex items-center space-x-4">
					<Link href="/cart">
						<ShoppingCart
							size={20}
							className="text-gray-700"
						/>
					</Link>
				</div>
			</div>

			<div className="hidden md:block bg-[#2E2E2E]">
				<div className="container mx-auto px-4 text-sm">
					<div className="flex justify-between text-white/50">
						{categories.map(({ href, label, icon: Icon }) => (
							<Link
								key={href}
								href={href}
								className="flex items-center gap-2 py-3 px-4 hover:text-white"
							>
								<Icon size={20} />
								<span>{label}</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
