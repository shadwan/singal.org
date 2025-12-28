"use client";

import Image from "next/image";
import {
	AcademicCapIcon,
	HomeIcon,
	BriefcaseIcon,
	SparklesIcon,
	HeartIcon,
	ShieldExclamationIcon,
} from "@heroicons/react/24/solid";

const categories = [
	{
		id: "education",
		name: "Education",
		location: "Mumbai, India",
		impact: "8 schools funded, 1,900+ children",
		icon: AcademicCapIcon,
		image: "/images/impact-card-education.png",
		color: "#52a7e4",
	},
	{
		id: "shelter-homes",
		name: "Shelter Homes",
		location: "Nepal & India",
		impact: "36+ children cared for",
		icon: HomeIcon,
		image: "/images/impact-card-sherlter-home.jpg",
		color: "#7a7cc7",
	},
	{
		id: "entrepreneurship",
		name: "Entrepreneurship",
		location: "Kenya, Uganda, Tanzania",
		impact: "150 entrepreneurs, 50 businesses",
		icon: BriefcaseIcon,
		image: "/images/impact-card-entreprenuership.png",
		color: "#194f75",
	},
	{
		id: "disaster-relief",
		name: "Disaster Relief",
		location: "Houston & 22 Countries",
		impact: "284 grants distributed",
		icon: ShieldExclamationIcon,
		image: "/images/impact-card-disaster-relief.jpg",
		color: "#b28f61",
	},
	{
		id: "youth-entrepreneurship",
		name: "Youth Programs",
		location: "Rockville, Maryland",
		impact: "90+ young entrepreneurs",
		icon: SparklesIcon,
		image: "/images/impact-card-youth.png",
		color: "#f8b864",
	},
	{
		id: "medical-relief",
		name: "Medical Relief",
		location: "Mumbai, India",
		impact: "$55K hospital construction",
		icon: HeartIcon,
		image: "/images/impact-card-medical.png",
		color: "#6890b7",
	},
];

interface HeroProps {
	selectedCategory: string | null;
	onSelectCategory: (id: string) => void;
}

export default function Hero({ selectedCategory, onSelectCategory }: HeroProps) {
	return (
		<section className="py-8 lg:py-12 bg-white">
			<div className="container mx-auto px-4">
				<div className="bg-[#f8d264] rounded-3xl p-8 md:p-12 lg:p-16">
					{/* Header */}
					<div className="text-center mb-10">
						<span className="inline-block px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium mb-4">
							Our Causes
						</span>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
							Discover Our Work
						</h1>
						<p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto">
							We are committed to creating a world where everyone has the opportunity to succeed. 
							Select a cause to learn more.
						</p>
					</div>

					{/* Category Cards Grid */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{categories.map((category) => {
							const IconComponent = category.icon;
							const isSelected = selectedCategory === category.id;

							return (
								<button
									key={category.id}
									onClick={() => onSelectCategory(category.id)}
									className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${
										isSelected 
											? "ring-4 ring-gray-900 scale-105" 
											: "hover:scale-105"
									}`}
								>
									<div className="aspect-[3/4] relative">
										<Image
											src={category.image}
											alt={category.name}
											fill
											className="object-cover"
										/>
										{/* Gradient overlay */}
										<div 
											className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
										/>

										{/* Content */}
										<div className="absolute inset-0 p-3 flex flex-col justify-between">
											{/* Badge */}
											<div 
												className="flex items-center gap-1.5 px-2 py-1 rounded-full w-fit"
												style={{ backgroundColor: `${category.color}cc` }}
											>
												<IconComponent className="w-3 h-3 text-white" />
												<span className="text-white text-[10px] md:text-xs font-medium truncate">
													{category.name}
												</span>
											</div>

											{/* Location */}
											<div>
												<p className="text-white text-xs md:text-sm font-semibold mb-0.5 line-clamp-2">
													{category.impact}
												</p>
												<div className="flex items-center gap-1 text-white/80 text-[10px] md:text-xs">
													<svg
														className="w-2.5 h-2.5 flex-shrink-0"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
															clipRule="evenodd"
														/>
													</svg>
													<span className="truncate">{category.location}</span>
												</div>
											</div>
										</div>

										{/* Selected indicator */}
										{isSelected && (
											<div className="absolute top-2 right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
												<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
												</svg>
											</div>
										)}
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
