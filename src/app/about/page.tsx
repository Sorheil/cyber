import Image from "next/image";

export default function AboutPage() {
	return (
		<main className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Cyber</h1>
							<p className="text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Your premier destination for cutting-edge technology and innovative gadgets.
							</p>
						</div>
						<div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
							<Image
								src="/placeholder.svg?height=500&width=800"
								width={800}
								height={500}
								alt="Cyber Store Interior"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-3xl space-y-8 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
						<p className="text-muted-foreground md:text-xl/relaxed">
							Founded in 2015, Cyber began with a simple mission: to provide tech enthusiasts with the latest and greatest devices at
							competitive prices. What started as a small online store has grown into a global retailer with physical locations in major
							cities around the world.
						</p>
						<p className="text-muted-foreground md:text-xl/relaxed">
							Our team of experts carefully curates our product selection, ensuring that we only offer devices that meet our high
							standards for quality, performance, and innovation. We believe that technology should enhance your life, and w&apos;re
							committed to helping you find the perfect devices for your needs.
						</p>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-3xl space-y-8 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
						<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
							<div className="space-y-4">
								<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-6 w-6"
									>
										<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold">Innovation</h3>
								<p className="text-muted-foreground">
									We embrace the latest technologies and continuously seek new ways to improve our products and services.
								</p>
							</div>
							<div className="space-y-4">
								<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-6 w-6"
									>
										<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold">Quality</h3>
								<p className="text-muted-foreground">
									We only offer products that meet our rigorous standards for performance, durability, and design.
								</p>
							</div>
							<div className="space-y-4 sm:col-span-2 md:col-span-1">
								<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-6 w-6"
									>
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
										<circle
											cx="9"
											cy="7"
											r="4"
										/>
										<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								</div>
								<h3 className="text-xl font-bold">Customer Focus</h3>
								<p className="text-muted-foreground">
									We put our customers at the center of everything we do, providing exceptional service and support.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-3xl space-y-8 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Leadership Team</h2>
						<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
							<div className="space-y-4">
								<Image
									src="/placeholder.svg?height=200&width=200"
									width={200}
									height={200}
									alt="CEO"
									className="mx-auto rounded-full object-cover"
								/>
								<div>
									<h3 className="text-xl font-bold">Alex Chen</h3>
									<p className="text-muted-foreground">CEO & Founder</p>
								</div>
							</div>
							<div className="space-y-4">
								<Image
									src="/placeholder.svg?height=200&width=200"
									width={200}
									height={200}
									alt="CTO"
									className="mx-auto rounded-full object-cover"
								/>
								<div>
									<h3 className="text-xl font-bold">Sarah Johnson</h3>
									<p className="text-muted-foreground">CTO</p>
								</div>
							</div>
							<div className="space-y-4 sm:col-span-2 md:col-span-1">
								<Image
									src="/placeholder.svg?height=200&width=200"
									width={200}
									height={200}
									alt="COO"
									className="mx-auto rounded-full object-cover"
								/>
								<div>
									<h3 className="text-xl font-bold">Michael Rodriguez</h3>
									<p className="text-muted-foreground">COO</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
