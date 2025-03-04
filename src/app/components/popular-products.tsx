import Image from "next/image";
import Link from "next/link";

/**TODO
 * 1-SUR MOBILE REMPLACER PAR UN CAROUSSEL DE PRODUIT 
 */
export default function PopularProducts() {
	const products = [
		{
			id: 1,
			name: "iPad Pro",
			image: "/images/popular-products/ipadpro.png",
			description: "The ultimate iPad experience with the most advanced technology.",
		},
		{
			id: 2,
			name: "Samsung Galaxy",
			image: "/images/popular-products/samsung-galaxy.png",
			description: "The next generation of Galaxy innovation is here.",
		},
		{
			id: 3,
			name: "Macbook Pro",
			image: "/images/popular-products/macbook.png",
			description: "The most powerful MacBook Pro ever is here.",
		},
	];

	return (
		<section className="py-8 px-4 md:px-8 bg-white">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="border rounded-lg overflow-hidden"
					>
						<div className="h-48 bg-gray-100 flex items-center justify-center">
							<Image
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								width={400}
								height={300}
								className="object-contain h-full w-auto"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-xl font-bold mb-2">{product.name}</h3>
							<p className="text-sm text-gray-600 mb-4">{product.description}</p>
							<Link
								href={`/shop/${product.name.toLowerCase().replace(" ", "-")}`}
								className="inline-block bg-black text-white px-4 py-1.5 rounded text-sm"
							>
								Shop Now
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
