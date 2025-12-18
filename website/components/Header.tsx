"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Causes", href: "/causes" },
	{ name: "Education", href: "/education" },
	{ name: "Stories", href: "/stories" },
	{ name: "Contact", href: "/contact" },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white shadow-md py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="relative z-50">
						<Image
							src="/images/logo.svg"
							alt="Singal Foundation"
							width={140}
							height={40}
							className="h-10 w-auto"
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-1">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`relative px-4 py-2 font-medium transition-colors group ${
									isScrolled ? "text-gray-800" : "text-gray-800"
								}`}
							>
								{item.name}
								<span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#f8d264] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
							</Link>
						))}
					</nav>

					{/* Desktop Donate Button */}
					<div className="hidden lg:block">
						<Button
							asChild
							className="bg-[#f8d264] hover:bg-[#f8b864] text-black font-semibold px-6 rounded-full"
						>
							<Link href="/donate">
								<Heart className="w-4 h-4 mr-2 fill-current" />
								Donate Now
							</Link>
						</Button>
					</div>

					{/* Mobile: Donate + Menu Toggle */}
					<div className="flex items-center gap-3 lg:hidden">
						<Button
							asChild
							size="sm"
							className="bg-[#f8d264] hover:bg-[#f8b864] text-black font-semibold px-4 rounded-full"
						>
							<Link href="/donate">
								<Heart className="w-4 h-4 fill-current" />
							</Link>
						</Button>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={`p-2 rounded-lg transition-colors ${
								isScrolled ? "text-gray-800" : "text-gray-800"
							}`}
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
					isMobileMenuOpen
						? "opacity-100 visible translate-y-0"
						: "opacity-0 invisible -translate-y-4"
				}`}
			>
				<nav className="container mx-auto px-4 py-4">
					<div className="flex flex-col gap-1">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="px-4 py-3 font-medium text-gray-800 hover:bg-[#f8d264]/20 rounded-lg transition-colors"
							>
								{item.name}
							</Link>
						))}
						<div className="mt-4 pt-4 border-t">
							<Button
								asChild
								className="w-full bg-[#f8d264] hover:bg-[#f8b864] text-black font-semibold rounded-full"
							>
								<Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
									<Heart className="w-4 h-4 mr-2 fill-current" />
									Donate Now
								</Link>
							</Button>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
