"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Send,
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Youtube,
} from "lucide-react";

const navigation = {
	causes: [
		{ name: "Education", href: "/causes?category=education" },
		{ name: "Shelter Homes", href: "/causes?category=shelter-homes" },
		{ name: "Entrepreneurship", href: "/causes?category=entrepreneurship" },
		{ name: "Youth Programs", href: "/causes?category=youth-entrepreneurship" },
		{ name: "Medical Relief", href: "/causes?category=medical-relief" },
		{ name: "Disaster Relief", href: "/causes?category=disaster-relief" },
	],
	company: [
		{ name: "About Us", href: "/about" },
		{ name: "Our Stories", href: "/stories" },
		{ name: "Contact", href: "/contact" },
		{ name: "Donate", href: "/donate" },
	],
	legal: [
		{ name: "Privacy Policy", href: "/privacy-policy" },
		{ name: "Terms of Service", href: "/terms" },
	],
};

const socialLinks = [
	{ name: "Facebook", icon: Facebook, href: "https://facebook.com/singalfoundation" },
	{ name: "Twitter", icon: Twitter, href: "https://twitter.com/singalfoundation" },
	{ name: "Instagram", icon: Instagram, href: "https://instagram.com/singalfoundation" },
	{ name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/singalfoundation" },
	{ name: "YouTube", icon: Youtube, href: "https://youtube.com/singalfoundation" },
];

export default function Footer() {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");

	const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.target.value);
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<footer className="bg-[#1a1f36]">
			{/* Newsletter Section */}
			<div className="border-b border-gray-700/50">
				<div className="container mx-auto px-4 py-12 md:py-16">
					<div className="max-w-4xl mx-auto text-center">
						<h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
							Stay Connected
						</h3>
						<p className="text-gray-400 mb-8 max-w-xl mx-auto">
							Join our community and be the first to know about our impact,
							stories, and ways you can help.
						</p>

						<form
							action="https://sendlane.com/form-api/submission/eyJkb21haW4iOiJzaW5nYWwiLCJmb3JtX2lkIjoiMDA2MDVlY2QtNWU1Zi00YzBmLTk2N2ItZmE2ZGExZDE0YjdkIn0="
							method="POST"
							onSubmit={handleSubmit}
							className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
						>
							<Input
								type="text"
								name="1"
								placeholder="First name"
								value={firstName}
								onChange={handleFirstNameChange}
								className="bg-white/10 border-gray-600 text-white placeholder:text-gray-500 h-12 rounded-full px-6 focus:border-[#f8d264]"
							/>
							<Input
								type="email"
								name="3"
								placeholder="Email address"
								value={email}
								onChange={handleEmailChange}
								required
								className="bg-white/10 border-gray-600 text-white placeholder:text-gray-500 h-12 rounded-full px-6 focus:border-[#f8d264]"
							/>
							<Button
								type="submit"
								size="lg"
								className="bg-[#f8d264] hover:bg-[#f8b864] text-gray-900 font-semibold px-8 h-12 rounded-full"
							>
								<Send className="mr-2 h-4 w-4" />
								Subscribe
							</Button>
						</form>
					</div>
				</div>
			</div>

			{/* Main Footer Content */}
			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
					{/* Brand Column */}
					<div className="lg:col-span-1">
						<Link href="/" className="inline-block mb-6">
							<Image
								src="/images/white-logo.png"
								alt="Singal Foundation"
								width={140}
								height={40}
								className="h-10 w-auto"
							/>
						</Link>
						<p className="text-gray-400 text-sm mb-6 leading-relaxed">
							Building a better future through education, entrepreneurship, and
							humanitarian aid since 2014.
						</p>

						{/* Contact Info */}
						<div className="space-y-3">
							<a
								href="mailto:info@singal.org"
								className="flex items-center gap-3 text-gray-400 hover:text-[#f8d264] transition-colors text-sm"
							>
								<Mail className="w-4 h-4" />
								info@singal.org
							</a>
							<a
								href="tel:+1234567890"
								className="flex items-center gap-3 text-gray-400 hover:text-[#f8d264] transition-colors text-sm"
							>
								<Phone className="w-4 h-4" />
								(301) 251-0540
							</a>
							<div className="flex items-start gap-3 text-gray-400 text-sm">
								<MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
								<span>
									51 Monroe Street, Suite 1405
									<br />
									Rockville, MD 20850
								</span>
							</div>
						</div>
					</div>

					{/* Causes Column */}
					<div>
						<h4 className="text-white font-semibold mb-5">Our Causes</h4>
						<ul className="space-y-3">
							{navigation.causes.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-gray-400 hover:text-[#f8d264] transition-colors text-sm"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company Column */}
					<div>
						<h4 className="text-white font-semibold mb-5">Organization</h4>
						<ul className="space-y-3">
							{navigation.company.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-gray-400 hover:text-[#f8d264] transition-colors text-sm"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>

						<h4 className="text-white font-semibold mb-5 mt-8">Legal</h4>
						<ul className="space-y-3">
							{navigation.legal.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-gray-400 hover:text-[#f8d264] transition-colors text-sm"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Social & Tax Info Column */}
					<div>
						<h4 className="text-white font-semibold mb-5">Follow Us</h4>
						<div className="flex gap-3 mb-8">
							{socialLinks.map((social) => {
								const IconComponent = social.icon;
								return (
									<a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-white/10 hover:bg-[#f8d264] rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all"
										aria-label={social.name}
									>
										<IconComponent className="w-4 h-4" />
									</a>
								);
							})}
						</div>

						{/* Tax Info */}
						<div className="bg-white/5 rounded-xl p-5 border border-gray-700/50">
							<p className="text-white font-medium text-sm mb-2">
								Tax-Deductible Donations
							</p>
							<p className="text-gray-400 text-xs leading-relaxed">
								Singal Foundation is a registered 501(c)(3) nonprofit
								organization. Your donations are tax-deductible to the fullest
								extent allowed by law.
							</p>
							<p className="text-gray-500 text-xs mt-3">
								EIN: 46-5765662
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-700/50">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-500 text-sm">
							© {new Date().getFullYear()} Singal Foundation. All rights reserved.
						</p>
						<p className="text-gray-500 text-sm">
							Made with love for a better world
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
