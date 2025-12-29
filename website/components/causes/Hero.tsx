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
	const isExpanded = !selectedCategory;

	return (
		<section 
			className={`bg-white transition-all duration-500 ease-out ${
				isExpanded ? "py-4 md:py-8 lg:py-12" : "py-4 md:py-6 lg:py-8"
			}`}
		>
			<div className={`container mx-auto px-4 ${
				isExpanded ? "min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-140px)] flex items-center" : ""
			}`}>
				<div className={`bg-[#f8d264] rounded-2xl md:rounded-3xl transition-all duration-500 w-full flex flex-col justify-center ${
					isExpanded ? "p-4 md:p-8 lg:p-12 min-h-[calc(100vh-150px)] md:min-h-[calc(100vh-180px)]" : "p-4 md:p-6 lg:p-10"
				}`}>
					{/* Header */}
					<div className={`text-center transition-all duration-500 ${
						isExpanded ? "mb-6 md:mb-10" : "mb-4 md:mb-6"
					}`}>
						<span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-gray-900 text-white rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
							Our Causes
						</span>
						<h1 className={`font-bold text-gray-900 transition-all duration-500 ${
							isExpanded 
								? "text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4" 
								: "text-xl md:text-2xl lg:text-3xl mb-2"
						}`}>
							Discover Our Work
						</h1>
						<p className={`text-gray-800 max-w-2xl mx-auto transition-all duration-500 ${
							isExpanded 
								? "text-sm md:text-lg" 
								: "text-xs md:text-base hidden md:block"
						}`}>
							{isExpanded 
								? "We are committed to creating a world where everyone has the opportunity to succeed."
								: "Select a cause to explore our initiatives."
							}
						</p>
					</div>

					{/* Select a card prompt - only show when expanded */}
					{isExpanded && (
						<div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
							<div className="flex items-center gap-2 px-4 py-2 bg-gray-900/10 rounded-full">
								<svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
								</svg>
								<span className="text-xs md:text-sm font-medium text-gray-800">
									Select a card to view case studies
								</span>
							</div>
						</div>
					)}

					{/* Category Cards Grid */}
					<div className={`grid gap-2 md:gap-4 transition-all duration-500 ${
						isExpanded 
							? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" 
							: "grid-cols-3 sm:grid-cols-6"
					}`}>
						{categories.map((category) => {
							const IconComponent = category.icon;
							const isSelected = selectedCategory === category.id;

							return (
								<button
									key={category.id}
									onClick={() => onSelectCategory(category.id)}
									className={`relative group rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
										isSelected 
											? "ring-2 md:ring-4 ring-gray-900 scale-[1.02] md:scale-105" 
											: "hover:scale-[1.02] md:hover:scale-105"
									}`}
								>
									<div className={`relative transition-all duration-500 ${
										isExpanded ? "aspect-[3/4]" : "aspect-[3/4] md:aspect-[4/5]"
									}`}>
										<Image
											src={category.image}
											alt={category.name}
											fill
											className="object-cover"
										/>
										{/* Gradient overlay */}
										<div 
											className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
										/>

										{/* Content */}
										<div className="absolute inset-0 p-2 md:p-3 flex flex-col">
											{/* Badge - Top */}
											<div 
												className="flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full w-fit"
												style={{ backgroundColor: `${category.color}cc` }}
											>
												<IconComponent className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
												<span className="text-white text-[8px] md:text-xs font-medium truncate">
													{category.name}
												</span>
											</div>

											{/* Spacer */}
											<div className="flex-1" />

											{/* Bottom Content - Impact & Location */}
											<div className="text-left">
												<p className="text-white text-[10px] md:text-sm font-semibold mb-0.5 line-clamp-2 leading-tight">
													{category.impact}
												</p>
												<div className="flex items-center gap-1 text-white/80 text-[8px] md:text-xs">
													<svg
														className="w-2 h-2 md:w-2.5 md:h-2.5 flex-shrink-0"
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
											<div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-5 h-5 md:w-6 md:h-6 bg-gray-900 rounded-full flex items-center justify-center">
												<svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
