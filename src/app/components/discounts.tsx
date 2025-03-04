import Product from "@/components/ui/product";
export default function Discounts() {
	const products = [
		{
			id: 1,
			name: "Apple iPhone 14 Pro (128GB) Gold #U2275",
			price: "$1437",
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 2,
			name: "AirPods Max Silver",
			price: "$549",
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 3,
			name: "Apple Watch Series 3 GPS 42mm Silver Aluminum Case",
			price: "$399",
			image: "/images/new-arrival/Iphone14pro.png",
		},
		{
			id: 4,
			name: "Apple iPhone 14 Pro (128GB) #U2275",
			price: "$1499",
			image: "/images/new-arrival/Iphone14pro.png",
		},
	];

	return (
		<section className="py-8 px-4 md:px-8 lg:px-48">
			<h2 className="text-xl font-bold mb-6">Discounts up to -50%</h2>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</section>
	);
}
