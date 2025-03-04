import Image from "next/image";
import { Star } from "lucide-react";

export default function Review({ review }: any) {
	return (
		<div className="bg-[#FAFAFA] rounded-lg p-4">
			<div className="flex justify-between mb-2">
				<div className="flex items-center gap-2">
					<Image
						src={review.avatar}
						alt={review.name}
						width={40}
						height={40}
						className="rounded-full"
					/>
					<div>
						<div className="font-medium">{review.name}</div>
						<div className="flex">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star
									key={i}
									className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="text-xs text-gray-500">{review.date}</div>
			</div>
			<p className="text-sm">{review.comment}</p>
			{review.images && (
				<div className="flex gap-2 mt-2">
					{review.images.map((img, i) => (
						<Image
							key={i}
							src={img}
							alt={`Review image ${i + 1}`}
							width={80}
							height={80}
							className="rounded-md object-cover"
						/>
					))}
				</div>
			)}
		</div>
	);
}
