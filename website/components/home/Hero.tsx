"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe from "cobe";

const projects = [
	{
		name: "Education",
		location: "Mumbai, India",
		impact: "8 schools funded, 1,900+ children educated",
		color: "#52a7e4",
		description: "Quality education in slum communities",
	},
	{
		name: "Shelter Homes",
		location: "Jumla, Nepal",
		impact: "15-17 blind children supported",
		color: "#7a7cc7",
		description: "Care for visually impaired children",
	},
	{
		name: "Entrepreneurship",
		location: "East Africa",
		impact: "150 entrepreneurs, 50 businesses",
		color: "#194f75",
		description: "Micro-enterprise in Kenya, Uganda, Tanzania",
	},
	{
		name: "Youth Entrepreneurship",
		location: "Rockville, Maryland",
		impact: "Children's Business Fair",
		color: "#f8b864",
		description: "Inspiring young entrepreneurs ages 6-14",
	},
	{
		name: "Medical Relief",
		location: "Mumbai, India",
		impact: "$55K hospital project",
		color: "#6890b7",
		description: "Healthcare for destitute individuals",
	},
	{
		name: "Disaster Relief",
		location: "Houston, Texas",
		impact: "Hurricane Harvey relief",
		color: "#b28f61",
		description: "Supporting 185,000 affected homes",
	},
];

export default function Hero() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [globeSize, setGlobeSize] = useState(500);

	// Auto-shuffle cards
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % projects.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	// Handle responsive globe sizing
	useEffect(() => {
		const updateSize = () => {
			if (containerRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				const size = Math.min(containerWidth, 600);
				setGlobeSize(size);
			}
		};

		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	// Initialize globe - clean white globe without markers
	useEffect(() => {
		if (!canvasRef.current || globeSize === 0) return;

		let phi = 0;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: globeSize * 2,
			height: globeSize * 2,
			phi: 0,
			theta: 0.3,
			dark: 0,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [1, 1, 1],
			markerColor: [0.97, 0.82, 0.39],
			glowColor: [0.97, 0.82, 0.39],
			markers: [
				{ location: [19.076, 72.8777], size: 0.02 },
				{ location: [29.2743, 82.1938], size: 0.02 },
				{ location: [-1.2921, 36.8219], size: 0.02},
				{ location: [1.3733, 32.2903], size: 0.02},
				{ location: [-6.369, 34.8888], size: 0.02},
				{ location: [39.084, -77.1528], size: 0.02},
				{ location: [29.7604, -95.3698], size: 0.02},
			],
			onRender: (state) => {
				phi += 0.003;
				state.phi = phi;
				state.theta = 0.2;
			},
		});

		return () => globe.destroy();
	}, [globeSize]);

	const currentProject = projects[currentIndex];

	return (
		<section className="bg-white py-16 lg:py-24">
			<div className="bg-[#f8d264] container mx-auto px-24 rounded-4xl">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left: Text Content */} 
					<div>
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
							Building a
							<br />
							Better Future
							<br />
							for Everyone.
						</h1>
						<p className="text-xl md:text-2xl text-[#6b6b6b] mb-8 max-w-lg">
							We are committed to creating a world where everyone has the
							opportunity to succeed.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 mb-10">
							<Button
								size="lg"
								className="bg-[#f8d264] hover:bg-[#f8b864] text-black font-semibold px-8 rounded-full"
							>
								Donate Now
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-black text-black hover:bg-gray-100 rounded-full"
							>
								Learn More
							</Button>
						</div>
					</div>

					{/* Right: Globe with Card */}
					<div
						ref={containerRef}
						className="relative flex items-center justify-center w-full"
					>
						<canvas
							ref={canvasRef}
							style={{
								width: globeSize,
								height: globeSize,
								maxWidth: "100%",
								aspectRatio: "1 / 1",
							}}
						/>
						{/* Project Card - overlaid on globe */}
						<div
							className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 rounded-2xl p-5 transition-all duration-500 shadow-lg text-white max-w-[260px] z-10"
							style={{ backgroundColor: currentProject.color }}
						>
							<div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-white/20">
								{currentProject.name}
							</div>
							<h3 className="text-lg font-bold mb-1">
								{currentProject.location}
							</h3>
							<p className="text-white/80 text-sm mb-2">
								{currentProject.description}
							</p>
							<div className="flex items-center gap-2 font-semibold text-sm">
								<svg
									className="w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								{currentProject.impact}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
