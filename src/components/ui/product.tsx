"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

/**
 * TODO
 * 1-DEFINIR L'INTERFACE  D'UN PRODUIT
 */
export default function Product({ product }: any) {
	const [liked, setLiked] = useState(false);

	return (
		<div
			key={product.id}
			className=" flex flex-col justify-between  border rounded-lg p-4 relative text-center"
		>
			<button
				className="absolute top-6 md:top-8 right-2 "
				onClick={() => setLiked(!liked)}
			>
				<Heart className={`${liked ? "text-red-500 fill-red-500" : "text-gray-500"}`} />
			</button>
			<div className="mt-8 mb-2 flex items-center justify-center ">
				<Image
					src={product.image || "/placeholder.svg"}
					alt={product.name}
					width={160}
					height={160}
					className="object-contain h-full w-auto"
				/>
			</div>
			<div className=" flex flex-col gap-2">
				<h3 className="text-xs lg:text-lg ">{product.name}</h3>
				<p className="font-bold text-sm md:text-lg">{product.price}</p>
				<Link
					href={`/product/${product.id}`}
					className="w-full bg-black text-white text-md py-3 rounded-lg"
				>
					Buy Now
				</Link>
			</div>
		</div>
	);
}
