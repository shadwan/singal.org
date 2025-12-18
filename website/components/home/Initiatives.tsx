"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { DottedMap } from "@/components/ui/dotted-map";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import {
	AcademicCapIcon,
	HomeIcon,
	BriefcaseIcon,
	SparklesIcon,
	HeartIcon,
	ShieldExclamationIcon,
	CpuChipIcon,
} from "@heroicons/react/24/solid";

// Project location markers with lat/lng coordinates
const locationMarkers = [
	{ lat: 19.076, lng: 72.8777, size: .5 }, // Mumbai, India (Education, Medical, Shelter)
	{ lat: 29.2985, lng: 82.1839, size: .5 }, // Jumla, Nepal (Shelter Homes)
	{ lat: 39.0839, lng: -77.1528, size: .5 }, // Rockville, Maryland (Youth, Shelter)
	{ lat: 29.7604, lng: -95.3698, size: .5 }, // Houston, Texas (Disaster Relief)
	{ lat: -1.2921, lng: 36.8219, size: .5 }, // Kenya (Entrepreneurship)
	{ lat: 0.3476, lng: 32.5825, size: .5 }, // Uganda (Entrepreneurship)
	{ lat: -6.3690, lng: 34.8888, size: .5 }, // Tanzania (Entrepreneurship)
];

const initiatives = [
	{
		Icon: CpuChipIcon,
		name: "RiseAI",
		description: "The next evolution of education",
		href: "/causes/rise-ai",
		color: "#8B5CF6",
	},
	{
		Icon: AcademicCapIcon,
		name: "Education",
		description: "Quality education for the next generation",
		href: "/causes/education",
		color: "#52a7e4",
	},
	{
		Icon: HomeIcon,
		name: "Shelter Homes",
		description: "Safe environments for growth",
		href: "/causes/shelter-homes",
		color: "#7a7cc7",
	},
	{
		Icon: BriefcaseIcon,
		name: "Entrepreneurship",
		description: "Tools for productive life",
		href: "/causes/entrepreneurship",
		color: "#194f75",
	},
	{
		Icon: SparklesIcon,
		name: "Youth Programs",
		description: "Empowering young dreamers",
		href: "/causes/youth-entrepreneurship",
		color: "#f8b864",
	},
	{
		Icon: HeartIcon,
		name: "Medical Relief",
		description: "Healthcare for those in need",
		href: "/causes/medical-relief",
		color: "#6890b7",
	},
	{
		Icon: ShieldExclamationIcon,
		name: "Disaster Relief",
		description: "Immediate support in crisis",
		href: "/causes/disaster-relief",
		color: "#b28f61",
	},
];

const riseAIStats = [
	{ value: 10000, label: "Students by 2026", prefix: "", suffix: "" },
	{ value: 8, label: "Belt Certifications", prefix: "", suffix: "" },
	{ value: 100, label: "Per Child/Year", prefix: "$", suffix: "" },
];

function InitiativeCard({
	initiative,
}: {
	initiative: (typeof initiatives)[0];
}) {
	const IconComponent = initiative.Icon;
	
	return (
		<Link
			href={initiative.href}
			className="group flex flex-col items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-100 w-[120px] h-[120px] aspect-square"
		>
			<IconComponent
				className="w-7 h-7 mb-2"
				style={{ color: initiative.color }}
			/>
			<h3 className="text-[11px] font-semibold text-gray-900 text-center leading-tight px-3">
				{initiative.name}
			</h3>
		</Link>
	);
}

export default function Initiatives() {
	return (
		<section className="py-8 md:py-12 bg-white overflow-hidden relative">
			{/* Dotted Map Background */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
				{/* Map dots - low opacity */}
				<div className="absolute w-full max-w-[1400px] aspect-[2/1] opacity-[0.12]">
					<DottedMap
						markers={[]}
						dotColor="#9ca3af"
						markerColor="#dc2626"
						mapSamples={5000}
						dotRadius={0.20}
					/>
				</div>
				{/* Location markers - full opacity */}
				<div className="absolute w-full max-w-[1400px] aspect-[2/1]">
					<DottedMap
						markers={locationMarkers}
						dotColor="transparent"
						markerColor="#f8d264"
						mapSamples={5000}
						dotRadius={0}
					/>
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Title */}
				<div className="text-center mb-10 md:mb-14">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
						Our Initiatives
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						Creating lasting change through focused programs that empower
						communities worldwide.
					</p>
				</div>

				{/* RiseAI Featured Card */}
				<div className="max-w-4xl mx-auto mb-12 md:mb-16">
					<div className="relative bg-gray-50 rounded-2xl p-6 md:p-8">
						<ShineBorder
							shineColor={["#f8d264", "#8B5CF6", "#f8b864"]}
							borderWidth={2}
							duration={10}
						/>
						<div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
							{/* Left Content */}
							<div>
								<span className="inline-block px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold mb-3">
									<AnimatedGradientText
										colorFrom="#f8d264"
										colorTo="#8B5CF6"
										speed={1.5}
									>
										NEW INITIATIVE
									</AnimatedGradientText>
								</span>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
									Rise<span className="text-[#f8d264]">AI</span>
								</h3>
								<p className="text-gray-900 font-medium mb-3">
									The Next Evolution of Education
								</p>
								<p className="text-gray-600 text-sm leading-relaxed mb-5">
									We&apos;re not teaching kids about AI. We&apos;re teaching them to 
									partner with AI to solve bigger problems, multiply their ideas, 
									and build the future they want to see.
								</p>

								{/* Stats */}
								<div className="flex gap-6 mb-5">
									{riseAIStats.map((stat, index) => (
										<div key={stat.label}>
											<div className="flex items-baseline gap-0.5">
												{stat.prefix && (
													<span className="text-xl font-bold text-gray-900">
														{stat.prefix}
													</span>
												)}
												<NumberTicker
													value={stat.value}
													delay={index * 0.15}
													className="text-xl font-bold text-gray-900 font-mono"
												/>
											</div>
											<p className="text-gray-500 text-xs">
												{stat.label}
											</p>
										</div>
									))}
								</div>

								<Button
									size="sm"
									className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full"
								>
									Learn More
									<ArrowRight className="ml-2 w-4 h-4" />
								</Button>
							</div>

							{/* Right - Video */}
							<div className="order-first md:order-last">
								<div className="aspect-[4/3] rounded-xl overflow-hidden">
									<video
										src="/images/riseaiheader.mp4"
										autoPlay
										loop
										muted
										playsInline
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Orbiting Circles Container - Desktop */}
				<div className="relative hidden md:flex h-[600px] lg:h-[700px] w-full items-center justify-center">
					{/* Center Logo */}
					<div className="absolute z-10 flex items-center justify-center">
						<div className="bg-[#f8d264] rounded-full w-28 h-28 lg:w-32 lg:h-32 shadow-xl flex items-center justify-center p-5 lg:p-6 aspect-square">
							<Image
								src="/images/white-logo.png"
								alt="Singal Foundation"
								width={80}
								height={80}
								className="w-full h-full object-contain"
							/>
						</div>
					</div>

					{/* Inner Orbit - 2 cards */}
					<OrbitingCircles
						radius={140}
						duration={35}
						path={true}
						iconSize={120}
						speed={0.5}
					>
						<InitiativeCard initiative={initiatives[1]} />
						<InitiativeCard initiative={initiatives[2]} />
					</OrbitingCircles>

					{/* Middle Orbit - 3 cards (reverse) */}
					<OrbitingCircles
						radius={250}
						duration={45}
						path={true}
						iconSize={120}
						speed={0.4}
						reverse
					>
						<InitiativeCard initiative={initiatives[3]} />
						<InitiativeCard initiative={initiatives[4]} />
						<InitiativeCard initiative={initiatives[5]} />
					</OrbitingCircles>

					{/* Outer Orbit - 1 card */}
					<OrbitingCircles
						radius={340}
						duration={55}
						path={true}
						iconSize={120}
						speed={0.35}
					>
						<InitiativeCard initiative={initiatives[6]} />
					</OrbitingCircles>
				</div>

				{/* Orbiting Circles Container - Mobile */}
				<div className="relative flex md:hidden h-[400px] w-full items-center justify-center">
					{/* Center Logo */}
					<div className="absolute z-10 flex items-center justify-center">
						<div className="bg-[#f8d264] rounded-full w-20 h-20 shadow-xl flex items-center justify-center p-4 aspect-square">
							<Image
								src="/images/white-logo.png"
								alt="Singal Foundation"
								width={50}
								height={50}
								className="w-full h-full object-contain"
							/>
						</div>
					</div>

					{/* Single orbit with 6 cards (excluding RiseAI since it's featured) */}
					<OrbitingCircles
						radius={140}
						duration={70}
						path={true}
						iconSize={100}
						speed={0.3}
					>
						<InitiativeCard initiative={initiatives[1]} />
						<InitiativeCard initiative={initiatives[2]} />
						<InitiativeCard initiative={initiatives[3]} />
						<InitiativeCard initiative={initiatives[4]} />
						<InitiativeCard initiative={initiatives[5]} />
						<InitiativeCard initiative={initiatives[6]} />
					</OrbitingCircles>
				</div>
			</div>
		</section>
	);
}
