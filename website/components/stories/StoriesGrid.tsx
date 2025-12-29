"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categoryColors: Record<string, string> = {
	education: "#52a7e4",
	entrepreneurship: "#194f75",
	"disaster-relief": "#b28f61",
};

const stories = [
	{
		id: "joanna",
		title: "Joanna Lost All in the Storm",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		image: "/images/stories/impact-1.jpg",
		excerpt: "A personal trainer who lost everything in Hurricane Harvey found hope through a Singal Foundation grant.",
	},
	{
		id: "aditi",
		title: "Aditi, the Little Dreamer",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		image: "/images/stories/impact-2.jpg",
		excerpt: "Learn how ARC Schools are giving slum children the ability to dream big.",
	},
	{
		id: "caroline",
		title: "A Small Kiosk is Sending Kids to School",
		category: "entrepreneurship",
		categoryLabel: "Entrepreneurship",
		location: "Sabwani Marinda, East Africa",
		image: "/images/stories/impact-3.jpg",
		excerpt: "Three women entrepreneurs transformed their families through a small produce stand.",
	},
	{
		id: "claudia",
		title: "Stronger Than the Storm",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		image: "/images/stories/impact-4.jpg",
		excerpt: "A handbag designer rescued by helicopter rebuilt her business stronger than ever.",
	},
	{
		id: "farming",
		title: "A Pig Farming Success Story",
		category: "entrepreneurship",
		categoryLabel: "Entrepreneurship",
		location: "Sabwani Marinda, East Africa",
		image: "/images/stories/impact-6.jpg",
		excerpt: "Three entrepreneurs pulled themselves out of extreme poverty through pig farming.",
	},
	{
		id: "ayush",
		title: "Ayush Beat the Odds",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		image: "/images/stories/impact-5.jpg",
		excerpt: "A boy with a speech disorder learned to read and dreams of becoming a civil engineer.",
	},
	{
		id: "elizabeth",
		title: "From Casual Worker to Business Owner",
		category: "entrepreneurship",
		categoryLabel: "Entrepreneurship",
		location: "Sabwani Marinda, East Africa",
		image: "/images/stories/impact-7.jpg",
		excerpt: "Elizabeth went from digging holes to running a successful soap-making business.",
	},
	{
		id: "aarav",
		title: "Aarav Gets His First Toothbrush",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		image: "/images/stories/impact-8.jpg",
		excerpt: "A simple gift opened a world of opportunity for a child from extreme poverty.",
	},
	{
		id: "roshni",
		title: "The Girl Who Pleaded to Go to School",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		image: "/images/stories/impact-9.jpg",
		excerpt: "Roshni's determination to attend school even while injured shows the power of education.",
	},
	{
		id: "chuck",
		title: "Keeping the Faith",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		image: "/images/stories/impact-10.jpg",
		excerpt: "Faith and community helped Chuck rebuild after Hurricane Harvey devastated his business.",
	},
	{
		id: "charles",
		title: "Top Houston Chiropractor Receives Grant",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		image: "/images/stories/impact-11.jpg",
		excerpt: "A leading Houston chiropractor received support to continue serving his community.",
	},
];

interface StoryCardProps {
	story: typeof stories[0];
}

function StoryCard({ story }: StoryCardProps) {
	const color = categoryColors[story.category];

	return (
		<Link
			href={`/stories/${story.id}`}
			className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
		>
			<div className="relative aspect-[4/3]">
				<Image
					src={story.image}
					alt={story.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				{/* Color overlay on hover */}
				<div
					className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
					style={{ backgroundColor: color }}
				/>
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

				{/* Category badge */}
				<div
					className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-medium"
					style={{ backgroundColor: color }}
				>
					{story.categoryLabel}
				</div>

				{/* Content */}
				<div className="absolute bottom-0 left-0 right-0 p-4">
					<h3 className="text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-[#f8d264] transition-colors">
						{story.title}
					</h3>
					<div className="flex items-center gap-1.5 text-white/70 text-sm">
						<svg
							className="w-3.5 h-3.5 flex-shrink-0"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clipRule="evenodd"
							/>
						</svg>
						<span>{story.location}</span>
					</div>
				</div>
			</div>

			{/* Read Story Link */}
			<div className="p-4 flex items-center justify-between">
				<p className="text-gray-600 text-sm line-clamp-2 flex-1 pr-4">
					{story.excerpt}
				</p>
				<div
					className="flex items-center gap-1 text-sm font-semibold flex-shrink-0 group-hover:gap-2 transition-all"
					style={{ color }}
				>
					<span>Read</span>
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
				</div>
			</div>
		</Link>
	);
}

export default function StoriesGrid() {
	const [showAll, setShowAll] = useState(false);
	const [filter, setFilter] = useState<string | null>(null);

	const filteredStories = filter
		? stories.filter((s) => s.category === filter)
		: stories;

	const visibleStories = showAll ? filteredStories : filteredStories.slice(0, 6);

	const categories = [
		{ id: null, label: "All Stories" },
		{ id: "education", label: "Education" },
		{ id: "entrepreneurship", label: "Entrepreneurship" },
		{ id: "disaster-relief", label: "Disaster Relief" },
	];

	return (
		<section className="py-12 md:py-16 lg:py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-8 md:mb-12">
					<span className="inline-block px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium mb-4">
						Impact Stories
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Lives Transformed
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Real stories of hope, resilience, and transformation from the
						communities we serve around the world.
					</p>
				</div>

				{/* Filter Tabs */}
				<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
					{categories.map((category) => (
						<button
							key={category.id || "all"}
							onClick={() => {
								setFilter(category.id);
								setShowAll(false);
							}}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
								filter === category.id
									? "bg-gray-900 text-white"
									: "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
							}`}
						>
							{category.label}
						</button>
					))}
				</div>

				{/* Stories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{visibleStories.map((story) => (
						<StoryCard key={story.id} story={story} />
					))}
				</div>

				{/* Show More Button */}
				{!showAll && filteredStories.length > 6 && (
					<div className="text-center mt-10">
						<button
							onClick={() => setShowAll(true)}
							className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
						>
							Show More Stories
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
				)}

				{/* Show Less Button */}
				{showAll && filteredStories.length > 6 && (
					<div className="text-center mt-10">
						<button
							onClick={() => setShowAll(false)}
							className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors"
						>
							Show Less
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 15l7-7 7 7"
								/>
							</svg>
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
