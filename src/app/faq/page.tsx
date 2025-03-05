import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FAQPage() {
	return (
		<main className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
							<p className="text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Find answers to common questions about our products, services, and policies.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Categories */}
			<section className="w-full py-12 md:py-24  lg:px-48">
				<div className="container px-4 md:px-6">
					<div className="grid gap-10 md:gap-16">
						<div className="space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">Product Information</h2>
							</div>
							<Accordion
								type="single"
								collapsible
								className="w-full"
							>
								<AccordionItem value="item-1">
									<AccordionTrigger>Are your products covered by warranty?</AccordionTrigger>
									<AccordionContent>
										Yes, all our products come with a standard 1-year manufacturer warranty. We also offer extended warranty
										options for most products, which can be purchased at checkout or within 30 days of your original purchase.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>Do you sell refurbished products?</AccordionTrigger>
									<AccordionContent>
										Yes, we offer certified refurbished products that have been thoroughly tested and restored to like-new
										condition. These products come with a 6-month warranty and are clearly labeled as &quot;Refurbished&quot; on
										our website.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>How can I check if a product is compatible with my device?</AccordionTrigger>
									<AccordionContent>
										Each product page includes a &quot;Compatibility&quot; section that lists all compatible devices. You can also
										use our compatibility checker tool or contact our customer support team for assistance.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger>Do you offer international versions of products?</AccordionTrigger>
									<AccordionContent>
										Yes, we carry both domestic and international versions of many products. International versions are clearly
										labeled and may have different specifications, warranty terms, or compatibility. Please check the product
										description for details.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
						<div className="space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">Orders & Shipping</h2>
							</div>
							<Accordion
								type="single"
								collapsible
								className="w-full"
							>
								<AccordionItem value="item-1">
									<AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
									<AccordionContent>
										Standard shipping typically takes 3-5 business days within the continental United States. Expedited shipping
										options are available at checkout. International shipping times vary by destination, usually between 7-14
										business days.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>Do you ship internationally?</AccordionTrigger>
									<AccordionContent>
										Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.
										Please note that customers are responsible for any import duties, taxes, or customs fees that may apply.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>Can I track my order?</AccordionTrigger>
									<AccordionContent>
										Yes, once your order ships, you&apos;ll receive a confirmation email with tracking information. You can also
										track your order by logging into your account on our website or using the tracking number provided in your
										shipping confirmation email.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
									<AccordionContent>
										We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google
										Pay, and Shop Pay. For orders over $1,000, we also offer financing options through Affirm.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
						<div className="space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">Returns & Refunds</h2>
							</div>
							<Accordion
								type="single"
								collapsible
								className="w-full"
							>
								<AccordionItem value="item-1">
									<AccordionTrigger>What is your return policy?</AccordionTrigger>
									<AccordionContent>
										We offer a 30-day return policy for most products. Items must be returned in their original packaging with all
										accessories included. Certain products, such as software, opened media, and custom-configured systems, may
										have different return policies as noted in their product descriptions.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>How do I initiate a return?</AccordionTrigger>
									<AccordionContent>
										To initiate a return, log into your account, go to your order history, and select the &quot;Return Item&quot;
										option for the product you wish to return. You can also contact our customer service team for assistance. Once
										your return is approved, you&apos;ll receive a return shipping label and instructions.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>How long does it take to process a refund?</AccordionTrigger>
									<AccordionContent>
										Once we receive your returned item, it typically takes 3-5 business days to inspect and process the return.
										After approval, refunds are issued to your original payment method and may take an additional 5-10 business
										days to appear on your statement, depending on your financial institution.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger>Do you charge a restocking fee?</AccordionTrigger>
									<AccordionContent>
										We do not charge restocking fees for most returns. However, certain categories such as large appliances,
										custom-built computers, and special order items may incur a 15% restocking fee. This will be clearly noted in
										the product description before purchase.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
						<div className="space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">Technical Support</h2>
							</div>
							<Accordion
								type="single"
								collapsible
								className="w-full"
							>
								<AccordionItem value="item-1">
									<AccordionTrigger>How can I get technical support for my product?</AccordionTrigger>
									<AccordionContent>
										We offer technical support through multiple channels: live chat on our website, email support at
										support@cyberstore.com, or by phone at +1 (555) 123-4567. Our technical support team is available Monday
										through Friday, 9am to 8pm EST.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>Do you offer in-store technical services?</AccordionTrigger>
									<AccordionContent>
										Yes, all our physical store locations offer technical services including diagnostics, repairs, data recovery,
										and system optimization. You can schedule an appointment online or walk in during store hours.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>What should I do if my product is defective?</AccordionTrigger>
									<AccordionContent>
										If you receive a defective product, please contact our customer service team within 14 days of delivery.
										We&apos;ll arrange for a replacement or repair under warranty. For products that develop issues after the
										initial 14-day period, please contact the manufacturer&apos;s warranty service or our technical support team
										for assistance.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger>Do you offer extended technical support plans?</AccordionTrigger>
									<AccordionContent>
										Yes, we offer Cyber Care+ plans that provide extended technical support, accidental damage protection, and
										priority service for 1, 2, or 3 years beyond the standard warranty. These plans can be purchased at checkout
										or within 30 days of your original purchase.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still have questions?</h2>
							<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our team is here to help. Contact us for personalized assistance.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link
								href="/contact-us"
								className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							>
								Contact Us
							</Link>
							<Link
								href="tel:+15551234567"
								className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							>
								Call Us
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter */}
			<section className="w-full py-12 md:py-24 lg:py-32 border-t">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
							<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Subscribe to our newsletter for the latest product updates, tech news, and exclusive offers.
							</p>
						</div>
						<div className="mx-auto w-full max-w-sm space-y-2">
							<form className="flex space-x-2">
								<Input
									type="email"
									placeholder="Enter your email"
									className="max-w-lg flex-1"
								/>
								<Button
									type="submit"
									className="bg-zinc-900 text-white hover:bg-zinc-800"
								>
									Subscribe
								</Button>
							</form>
							<p className="text-xs text-muted-foreground">
								By subscribing, you agree to our{" "}
								<Link
									href="#"
									className="underline underline-offset-2"
								>
									Terms & Conditions
								</Link>{" "}
								and{" "}
								<Link
									href="#"
									className="underline underline-offset-2"
								>
									Privacy Policy
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
