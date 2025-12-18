"use client";

import Link from "next/link";
import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
	AcademicCapIcon,
	HomeIcon,
	BriefcaseIcon,
	SparklesIcon,
	HeartIcon,
	ShieldExclamationIcon,
	CpuChipIcon,
} from "@heroicons/react/24/solid";

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
		<section className="py-16 md:py-24 bg-white overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8 md:mb-12">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
						Our Initiatives
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						Creating lasting change through focused programs that empower
						communities worldwide.
					</p>
				</div>

				{/* Orbiting Circles Container - Desktop */}
				<div className="relative hidden md:flex h-[700px] lg:h-[800px] w-full items-center justify-center">
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

					{/* Inner Orbit - 2 cards (RiseAI featured + Education) */}
					<OrbitingCircles
						radius={140}
						duration={35}
						path={true}
						iconSize={120}
						speed={0.5}
					>
						<InitiativeCard initiative={initiatives[0]} />
						<InitiativeCard initiative={initiatives[1]} />
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
						<InitiativeCard initiative={initiatives[2]} />
						<InitiativeCard initiative={initiatives[3]} />
						<InitiativeCard initiative={initiatives[4]} />
					</OrbitingCircles>

					{/* Outer Orbit - 2 cards */}
					<OrbitingCircles
						radius={360}
						duration={55}
						path={true}
						iconSize={120}
						speed={0.35}
					>
						<InitiativeCard initiative={initiatives[5]} />
						<InitiativeCard initiative={initiatives[6]} />
					</OrbitingCircles>
				</div>

				{/* Orbiting Circles Container - Mobile */}
				<div className="relative flex md:hidden h-[450px] w-full items-center justify-center">
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

					{/* Single orbit with all 7 cards */}
					<OrbitingCircles
						radius={150}
						duration={70}
						path={true}
						iconSize={120}
						speed={0.3}
					>
						<InitiativeCard initiative={initiatives[0]} />
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
