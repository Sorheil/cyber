import Link from "next/link";

const Breadcrumb = ({ items }: { items: { label: string; href?: string }[] }) => {
	return (
		<div className="container mx-auto px-4 py-2">
			<div className="flex items-center text-xs gap-2 text-gray-500">
				{items.map((item, index) => (
					<span
						key={index}
						className="flex items-center gap-2"
					>
						{item.href ? (
							<Link
								href={item.href}
								className="hover:underline"
							>
								{item.label}
							</Link>
						) : (
							<span className="text-black">{item.label}</span>
						)}
						{index < items.length - 1 && <span>/</span>}
					</span>
				))}
			</div>
		</div>
	);
};

export default Breadcrumb;
