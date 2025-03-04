import Product from "@/components/ui/product";
interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
}

interface ProductGridProps {
	products: Product[];
	isMobile: boolean;
}

export default function ProductGrid({ products, isMobile }: ProductGridProps) {
	return (
		<div className={`grid ${isMobile ? "grid-cols-2 gap-4" : "grid-cols-3 gap-6"}`}>
			{products.map((product) => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
}
