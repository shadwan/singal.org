"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
	{
		id: 1,
		image: "/images/stories/slider-1.jpg",
		headline: "A Small Kiosk is Sending Kids to School",
		subheadline:
			"Catch a glimpse of Monica's new lease of life, through this uplifting story of how a small grant had such a profound impact on her family and children.",
		category: "Entrepreneurship",
		location: "East Africa",
		color: "#194f75",
		storyId: "caroline",
	},
	{
		id: 2,
		image: "/images/stories/slider-2.jpg",
		headline: "A Pig Farming Success Story",
		subheadline:
			"Get insight into the lives of three entrepreneurs who pulled themselves out of extreme poverty with a financial grant from the Singal Foundation.",
		category: "Entrepreneurship",
		location: "East Africa",
		color: "#194f75",
		storyId: "farming",
	},
	{
		id: 3,
		image: "/images/stories/slider-3.jpg",
		headline: "Aditi, the Little Dreamer",
		subheadline:
			"Learn how the ARC Schools are giving slum children the ability to dream big and see a brighter future for themselves.",
		category: "Education",
		location: "Mumbai, India",
		color: "#52a7e4",
		storyId: "aditi",
	},
	{
		id: 4,
		image: "/images/stories/slider-4.jpg",
		headline: "Joanna Lost Everything",
		subheadline:
			"Discover how a grant from the Singal Foundation bought restoration and hope to this small business owner.",
		category: "Disaster Relief",
		location: "Houston, TX",
		color: "#b28f61",
		storyId: "joanna",
	},
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	}, []);

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 5000);
	};

	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, nextSlide]);

	return (
		<section className="relative bg-white py-4 md:py-8 lg:py-12">
			<div className="container mx-auto px-4">
				<div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
					{/* Slides */}
					<div className="relative aspect-[4/3] md:aspect-[21/9]">
						{slides.map((slide, index) => (
							<div
								key={slide.id}
								className={`absolute inset-0 transition-opacity duration-700 ${
									index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
								}`}
							>
								<Image
									src={slide.image}
									alt={slide.headline}
									fill
									className="object-cover"
									priority={index === 0}
								/>
								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

								{/* Content */}
								<div className="absolute inset-0 flex items-center">
									<div className="container mx-auto px-6 md:px-12 lg:px-16">
										<div className="max-w-xl">
											{/* Category Badge */}
											<div
												className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs md:text-sm font-medium mb-3 md:mb-4"
												style={{ backgroundColor: slide.color }}
											>
												<span>{slide.category}</span>
												<span className="w-1 h-1 rounded-full bg-white/50" />
												<span>{slide.location}</span>
											</div>

											<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
												{slide.headline}
											</h1>
											<p className="text-sm md:text-lg text-white/90 leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
												{slide.subheadline}
											</p>

											{/* Read Story Button */}
											<Link
												href={`/stories/${slide.storyId}`}
												className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-[#f8d264] text-gray-900 rounded-full font-semibold text-sm md:text-base hover:bg-[#f5c842] transition-colors"
											>
												Read Story
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 8l4 4m0 0l-4 4m4-4H3"
													/>
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={prevSlide}
						className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center"
						aria-label="Previous slide"
					>
						<svg
							className="w-5 h-5 md:w-6 md:h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center"
						aria-label="Next slide"
					>
						<svg
							className="w-5 h-5 md:w-6 md:h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					{/* Indicators */}
					<div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
						{slides.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
									index === currentSlide
										? "bg-[#f8d264] w-6 md:w-8"
										: "bg-white/50 hover:bg-white/70"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
