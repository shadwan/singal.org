"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
	AcademicCapIcon,
	HomeIcon,
	BriefcaseIcon,
	SparklesIcon,
	HeartIcon,
	ShieldExclamationIcon,
} from "@heroicons/react/24/solid";

const projects = [
	{
		name: "Education",
		location: "Mumbai, India",
		impact: "8 schools funded, 1,900+ children",
		icon: AcademicCapIcon,
		image: "/images/impact-card-education.png",
	},
	{
		name: "Shelter Homes",
		location: "Jumla, Nepal",
		impact: "15-17 blind children supported",
		icon: HomeIcon,
		image: "/images/impact-card-sherlter-home.jpg",
	},
	{
		name: "Entrepreneurship",
		location: "Kenya, Uganda, Tanzania",
		impact: "150 entrepreneurs, 50 businesses",
		icon: BriefcaseIcon,
		image: "/images/impact-card-entreprenuership.png",
	},
	{
		name: "Youth Entrepreneurship",
		location: "Rockville, Maryland",
		impact: "Children's Business Fair program",
		icon: SparklesIcon,
		image: "/images/impact-card-youth.png",
	},
	{
		name: "Medical Relief",
		location: "Mumbai, India",
		impact: "$55K hospital construction",
		icon: HeartIcon,
		image: "/images/impact-card-medical.png",
	},
	{
		name: "Disaster Relief",
		location: "Houston, Texas",
		impact: "185,000 homes supported",
		icon: ShieldExclamationIcon,
		image: "/images/impact-card-disaster-relief.jpg",
	},
];

export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	// Detect mobile screen
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Auto-shuffle cards
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % projects.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	// Get card position relative to center
	const getCardStyle = useCallback((index: number) => {
		const totalCards = projects.length;
		let diff = index - currentIndex;
		
		// Handle wrap-around
		if (diff > totalCards / 2) diff -= totalCards;
		if (diff < -totalCards / 2) diff += totalCards;

		const isCenter = diff === 0;
		// Show fewer cards on mobile
		const isVisible = isMobile ? Math.abs(diff) <= 1 : Math.abs(diff) <= 2;

		if (!isVisible) {
			return {
				transform: `translateX(${diff * 100}%) scale(0.6)`,
				opacity: 0,
				zIndex: 0,
				filter: "blur(8px)",
				isCenter: false,
			};
		}

		// Scale decreases more for cards further from center
		const scale = isCenter ? 1 : Math.abs(diff) === 1 ? 0.8 : 0.65;
		const blur = isCenter ? 0 : Math.abs(diff) === 1 ? 4 : 8;
		
		// Less translation on mobile for tighter spacing
		const translatePercent = isMobile ? 55 : 70;

		return {
			transform: `translateX(${diff * translatePercent}%) scale(${scale})`,
			opacity: isCenter ? 1 : 0.7,
			zIndex: isCenter ? 30 : 20 - Math.abs(diff),
			filter: `blur(${blur}px)`,
			isCenter,
		};
	}, [currentIndex, isMobile]);

	return (
		<section className="bg-white py-16 lg:py-24">
			<div className="container mx-auto px-4">
				{/* Yellow Card Container */}
				<div className="bg-[#f8d264] rounded-3xl p-8 md:p-12 lg:p-16">
					{/* Text Content - Centered */}
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
							Building a{" "}
							<span className="text-white">Better Future</span>
							<br />
							for Everyone.
						</h1>
						<p className="text-lg md:text-xl text-black/70 mb-8 max-w-2xl mx-auto">
							We are committed to creating a world where everyone has the
							opportunity to succeed.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-black hover:bg-black/80 text-white font-semibold px-8 rounded-full"
							>
								Donate Now
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-black text-black hover:bg-black/10 rounded-full"
							>
								Learn More
							</Button>
						</div>
					</div>

					{/* Carousel */}
					<div className="relative">
						{/* Yellow gradient fade on edges */}
						<div className="absolute left-0 top-0 bottom-0 w-4 md:w-40 bg-gradient-to-r from-[#f8d264] to-transparent z-40 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-4 md:w-40 bg-gradient-to-l from-[#f8d264] to-transparent z-40 pointer-events-none" />

						{/* Cards Container */}
						<div className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
							{projects.map((project, index) => {
								const style = getCardStyle(index);
								const IconComponent = project.icon;

								return (
									<div
										key={project.name}
										className="absolute cursor-pointer"
										style={{
											transform: style.transform,
											opacity: style.opacity,
											zIndex: style.zIndex,
											filter: style.filter,
											transition: "transform 500ms ease-out, opacity 500ms ease-out, filter 500ms ease-out",
										}}
										onClick={() => setCurrentIndex(index)}
									>
										<div 
											className="relative w-[220px] md:w-[300px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
											style={{
												boxShadow: style.isCenter ? "-20px 0 25px -15px rgba(0,0,0,0.3), 20px 0 25px -15px rgba(0,0,0,0.3)" : "none",
											}}
										>
											<Image
												src={project.image}
												alt={project.name}
												fill
												className="object-cover"
											/>
											{/* Gradient overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

											{/* Content */}
											<div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between transition-none">
												{/* Badge Pill */}
												<div className="flex items-center gap-1.5 md:gap-2 bg-black/30 pl-2 pr-3 md:pr-4 py-1 md:py-1.5 rounded-full w-fit transition-none">
													<IconComponent className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/90 transition-none" />
													<span className="text-white/90 text-xs md:text-sm font-medium transition-none">
														{project.name}
													</span>
												</div>

												{/* Impact & Location */}
												<div className="transition-none">
													<p className="text-white text-base md:text-2xl font-bold mb-1 md:mb-2 drop-shadow-lg transition-none">
														{project.impact}
													</p>
													<div className="flex items-center gap-1 md:gap-1.5 text-white/90 text-xs md:text-base transition-none">
														<svg
															className="w-3.5 h-3.5 md:w-4 md:h-4 transition-none"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
																clipRule="evenodd"
															/>
														</svg>
														{project.location}
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
