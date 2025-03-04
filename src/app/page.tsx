import HeroSection from "@/app/components/hero-section";
import FeaturedProducts from "@/app/components/featured-products";
import CategoryBrowser from "@/app/components/category-browser";
import NewArrivals from "@/app/components/new-arrivals";
import PopularProducts from "@/app/components/popular-products";
import Discounts from "@/app/components/discounts";
import SummerSale from "@/app/components/summer-sale";

/**
 * TODO
 * 1-AJOUTER LA SECTION BESTSELLER FEATUREDPRODUCTS A CELLE NEW ARRIVAL
 */

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col">
			<HeroSection />
			<FeaturedProducts />
			<CategoryBrowser />
			<NewArrivals />
			<PopularProducts />
			<Discounts />
			<SummerSale />
		</main>
	);
}
