"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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

	// Auto-shuffle cards
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % projects.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % projects.length);
	};

	// Get card position relative to center
	const getCardStyle = (index: number) => {
		const totalCards = projects.length;
		let diff = index - currentIndex;
		
		// Handle wrap-around
		if (diff > totalCards / 2) diff -= totalCards;
		if (diff < -totalCards / 2) diff += totalCards;

		const isCenter = diff === 0;
		const isVisible = Math.abs(diff) <= 2;

		if (!isVisible) {
			return {
				transform: `translateX(${diff * 100}%) scale(0.7)`,
				opacity: 0,
				zIndex: 0,
				filter: "blur(4px)",
			};
		}

		return {
			transform: `translateX(${diff * 85}%) scale(${isCenter ? 1 : 0.85})`,
			opacity: isCenter ? 1 : 0.6,
			zIndex: isCenter ? 30 : 20 - Math.abs(diff),
			filter: isCenter ? "blur(0px)" : "blur(2px)",
		};
	};

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
						<div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#f8d264] via-[#f8d264] to-transparent z-40 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#f8d264] via-[#f8d264] to-transparent z-40 pointer-events-none" />

						{/* Cards Container */}
						<div className="relative h-[420px] flex items-center justify-center overflow-hidden">
							{projects.map((project, index) => {
								const style = getCardStyle(index);
								const IconComponent = project.icon;

								return (
									<div
										key={project.name}
										className="absolute transition-all duration-500 ease-out cursor-pointer"
										style={{
											transform: style.transform,
											opacity: style.opacity,
											zIndex: style.zIndex,
											filter: style.filter,
										}}
										onClick={() => setCurrentIndex(index)}
									>
										<div className="relative w-[260px] md:w-[300px] h-[380px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
											<Image
												src={project.image}
												alt={project.name}
												fill
												className="object-cover"
											/>
											{/* Gradient overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

											{/* Content */}
											<div className="absolute inset-0 p-6 flex flex-col justify-between">
												{/* Badge */}
												<div className="flex items-center gap-2">
													<div className="bg-[#f8d264] p-2.5 rounded-xl shadow-lg">
														<IconComponent className="w-6 h-6 text-black" />
													</div>
													<span className="text-white/90 text-sm font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
														{project.name}
													</span>
												</div>

												{/* Impact & Location */}
												<div>
													<p className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
														{project.impact}
													</p>
													<div className="flex items-center gap-1.5 text-white/80 text-sm md:text-base">
														<svg
															className="w-5 h-5"
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

						{/* Navigation Arrows */}
						<button
							onClick={goToPrevious}
							className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
						>
							<ChevronLeft className="w-6 h-6 text-black" />
						</button>
						<button
							onClick={goToNext}
							className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
						>
							<ChevronRight className="w-6 h-6 text-black" />
						</button>
					</div>

					{/* Dots Navigation */}
					<div className="flex justify-center gap-2 mt-6">
						{projects.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-2.5 h-2.5 rounded-full transition-all ${
									index === currentIndex
										? "bg-black w-8"
										: "bg-black/30 hover:bg-black/50"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
