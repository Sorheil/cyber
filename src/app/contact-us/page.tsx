import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function ContactUsPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
							<p className="text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								We&apos;re here to help. Reach out to our team with any questions or concerns.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
						<div className="space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
								<p className="text-muted-foreground">
									Fill out the form below and our team will get back to you as soon as possible.
								</p>
							</div>
							<form className="space-y-6">
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<label
											htmlFor="first-name"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											First Name
										</label>
										<Input
											id="first-name"
											placeholder="Enter your first name"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="last-name"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Last Name
										</label>
										<Input
											id="last-name"
											placeholder="Enter your last name"
										/>
									</div>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="email"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Email
									</label>
									<Input
										id="email"
										type="email"
										placeholder="Enter your email"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="phone"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Phone Number
									</label>
									<Input
										id="phone"
										type="tel"
										placeholder="Enter your phone number"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="subject"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Subject
									</label>
									<Input
										id="subject"
										placeholder="Enter the subject"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="message"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Message
									</label>
									<Textarea
										id="message"
										placeholder="Enter your message"
										className="min-h-[150px]"
									/>
								</div>
								<Button
									type="submit"
									className="w-full bg-zinc-900 text-white hover:bg-zinc-800"
								>
									Send Message
								</Button>
							</form>
						</div>
						<div className="space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
								<p className="text-muted-foreground">Our team is available Monday through Friday, 9am to 5pm.</p>
							</div>
							<div className="grid gap-6">
								<div className="flex items-start gap-4">
									<MapPin className="h-6 w-6 text-zinc-900" />
									<div className="space-y-1">
										<h3 className="font-medium">Visit Us</h3>
										<p className="text-sm text-muted-foreground">
											123 Tech Boulevard
											<br />
											San Francisco, CA 94107
											<br />
											United States
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<Phone className="h-6 w-6 text-zinc-900" />
									<div className="space-y-1">
										<h3 className="font-medium">Call Us</h3>
										<p className="text-sm text-muted-foreground">
											+1 (555) 123-4567
											<br />
											Monday - Friday, 9am - 5pm PST
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<Mail className="h-6 w-6 text-zinc-900" />
									<div className="space-y-1">
										<h3 className="font-medium">Email Us</h3>
										<p className="text-sm text-muted-foreground">
											support@cyberstore.com
											<br />
											sales@cyberstore.com
										</p>
									</div>
								</div>
							</div>
							<div className="space-y-4">
								<h3 className="font-medium">Follow Us</h3>
								<div className="flex gap-4">
									<Link
										href="#"
										className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
									>
										<Facebook className="h-5 w-5" />
										<span className="sr-only">Facebook</span>
									</Link>
									<Link
										href="#"
										className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
									>
										<Twitter className="h-5 w-5" />
										<span className="sr-only">Twitter</span>
									</Link>
									<Link
										href="#"
										className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
									>
										<Instagram className="h-5 w-5" />
										<span className="sr-only">Instagram</span>
									</Link>
									<Link
										href="#"
										className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
									>
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">LinkedIn</span>
									</Link>
								</div>
							</div>
							<div className="overflow-hidden rounded-xl border">
								<Image
									src="/placeholder.svg?height=400&width=600"
									width={600}
									height={400}
									alt="Map"
									className="aspect-video object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Store Locations */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Store Locations</h2>
							<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Visit one of our physical stores for a hands-on experience with our products.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
						<div className="space-y-4">
							<Image
								src="/placeholder.svg?height=200&width=300"
								width={300}
								height={200}
								alt="San Francisco Store"
								className="aspect-video rounded-xl object-cover"
							/>
							<div>
								<h3 className="text-xl font-bold">San Francisco</h3>
								<p className="text-sm text-muted-foreground">
									123 Tech Boulevard
									<br />
									San Francisco, CA 94107
								</p>
								<p className="text-sm text-muted-foreground mt-2">
									Monday - Saturday: 10am - 8pm
									<br />
									Sunday: 11am - 6pm
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<Image
								src="/placeholder.svg?height=200&width=300"
								width={300}
								height={200}
								alt="New York Store"
								className="aspect-video rounded-xl object-cover"
							/>
							<div>
								<h3 className="text-xl font-bold">New York</h3>
								<p className="text-sm text-muted-foreground">
									456 Digital Avenue
									<br />
									New York, NY 10001
								</p>
								<p className="text-sm text-muted-foreground mt-2">
									Monday - Saturday: 10am - 8pm
									<br />
									Sunday: 11am - 6pm
								</p>
							</div>
						</div>
						<div className="space-y-4 md:col-span-2 lg:col-span-1">
							<Image
								src="/placeholder.svg?height=200&width=300"
								width={300}
								height={200}
								alt="Los Angeles Store"
								className="aspect-video rounded-xl object-cover"
							/>
							<div>
								<h3 className="text-xl font-bold">Los Angeles</h3>
								<p className="text-sm text-muted-foreground">
									789 Innovation Drive
									<br />
									Los Angeles, CA 90001
								</p>
								<p className="text-sm text-muted-foreground mt-2">
									Monday - Saturday: 10am - 8pm
									<br />
									Sunday: 11am - 6pm
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
