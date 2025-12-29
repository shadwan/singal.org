"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
	{
		id: 1,
		image: "/images/education/slider-3.jpg",
		headline: "Our Initiative in Financial Education",
		subheadline:
			"Inspiring children and teens to live empowered lives through financial education.",
	},
	{
		id: 2,
		image: "/images/education/slider-1.jpg",
		headline: "Our Initiative in Financial Education",
		subheadline:
			"Inspiring children and teens to live empowered lives through financial education.",
	},
	{
		id: 3,
		image: "/images/education/slider-2.jpg",
		headline: "Our Initiative in Financial Education",
		subheadline:
			"Inspiring children and teens to live empowered lives through financial education.",
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
		// Resume autoplay after 5 seconds
		setTimeout(() => setIsAutoPlaying(true), 5000);
	};

	// Auto-play
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
					<div className="relative aspect-[16/9] md:aspect-[21/9]">
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
								<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

								{/* Content */}
								<div className="absolute inset-0 flex items-center">
									<div className="container mx-auto px-6 md:px-12 lg:px-16">
										<div className="max-w-xl">
											<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
												{slide.headline}
											</h1>
											<p className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed">
												{slide.subheadline}
											</p>
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
										? "bg-white w-6 md:w-8"
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
