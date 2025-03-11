import Product from "@/components/ui/product";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128GB (PRODUCT)RED",
      price: "$900",
      image: "/images/new-arrival/Iphone14pro.png",
    },
    {
      id: 2,
      name: "Blackmagic Pocket Cinema Camera 6K",
      price: "$2535",
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
      name: "AirPods Max Silver",
      price: "$549",
      image: "/images/new-arrival/Iphone14pro.png",
    },
    {
      id: 5,
      name: "Samsung Galaxy Watch4 Classic",
      price: "$369",
      image: "/images/new-arrival/Iphone14pro.png",
    },
    {
      id: 6,
      name: "Galaxy Z Fold4 (256GB)",
      price: "$1799",
      image: "/images/new-arrival/Iphone14pro.png",
    },
    {
      id: 7,
      name: "Galaxy Buds FE",
      price: "$99.99",
      image: "/images/new-arrival/Iphone14pro.png",
    },
    {
      id: 8,
      name: 'Apple iPad 10.9" 64GB Wi-Fi Silver (10th Gen)',
      price: "$399",
      image: "/images/new-arrival/Iphone14pro.png",
    },
  ];

  return (
    <section className="px-4 py-8 md:px-0 lg:px-48">
      <div className="scrollbar-hide mb-6 flex items-center space-x-4 overflow-x-auto">
        <button className="text-sm font-medium whitespace-nowrap">
          New Arrival
        </button>
        <button className="text-sm whitespace-nowrap text-gray-500">
          Bestseller
        </button>
        <button className="text-sm whitespace-nowrap text-gray-500">
          Featured Products
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
