"use client";

import Image from "next/image";
import Link from "next/link";

interface StoryData {
	id: string;
	title: string;
	category: string;
	categoryLabel: string;
	location: string;
	color: string;
	heroImage: string;
	imageCaption: string;
	grantAmount?: number;
	year?: number;
	content: string[];
	quote?: {
		text: string;
		author: string;
	};
	stats: { label: string; value: string }[];
}

interface StoryDetailProps {
	story: StoryData;
	relatedStories: StoryData[];
}

export default function StoryDetail({ story, relatedStories }: StoryDetailProps) {
	return (
		<>
			{/* Hero Section */}
			<section className="py-4 md:py-8 lg:py-12 bg-white">
				<div className="container mx-auto px-4">
					{/* Breadcrumb */}
					<nav className="mb-6">
						<ol className="flex items-center gap-2 text-sm text-gray-500">
							<li>
								<Link href="/" className="hover:text-gray-900 transition-colors">
									Singal Foundation
								</Link>
							</li>
							<li>/</li>
							<li>
								<Link href="/stories" className="hover:text-gray-900 transition-colors">
									Stories
								</Link>
							</li>
							<li>/</li>
							<li className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none">
								{story.title}
							</li>
						</ol>
					</nav>

					{/* Main Content */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
						{/* Image Column */}
						<div>
							<div
								className="rounded-2xl overflow-hidden p-3 md:p-4"
								style={{ backgroundColor: `${story.color}15` }}
							>
								<div className="relative aspect-[4/3] rounded-xl overflow-hidden">
									<Image
										src={story.heroImage}
										alt={story.title}
										fill
										className="object-cover"
										priority
									/>
								</div>
								{story.imageCaption && (
									<p className="text-center text-sm text-gray-600 mt-3 px-2">
										{story.imageCaption}
									</p>
								)}
							</div>

							{/* Stats */}
							{story.stats.length > 0 && (
								<div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
									{story.stats.map((stat, index) => (
										<div
											key={index}
											className="bg-gray-50 rounded-xl p-4 text-center"
										>
											<p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
												{stat.label}
											</p>
											<p
												className="font-bold text-lg"
												style={{ color: story.color }}
											>
												{stat.value}
											</p>
										</div>
									))}
								</div>
							)}
						</div>

						{/* Content Column */}
						<div>
							{/* Category Badge */}
							<div className="mb-4">
								<span
									className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-sm font-medium"
									style={{ backgroundColor: story.color }}
								>
									{story.categoryLabel}
									<span className="w-1 h-1 rounded-full bg-white/50" />
									{story.location}
								</span>
							</div>

							{/* Title */}
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								{story.title}
							</h1>

							{/* Content */}
							<div className="space-y-4 text-gray-700 text-lg leading-relaxed">
								{story.content.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>

							{/* Quote */}
							{story.quote && (
								<blockquote
									className="mt-8 p-6 rounded-2xl border-l-4"
									style={{
										backgroundColor: `${story.color}10`,
										borderColor: story.color,
									}}
								>
									<p className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
										&ldquo;{story.quote.text}&rdquo;
									</p>
									<cite
										className="text-sm font-semibold not-italic"
										style={{ color: story.color }}
									>
										— {story.quote.author}
									</cite>
								</blockquote>
							)}

							{/* CTA Section */}
							<div className="mt-10 p-6 md:p-8 bg-[#f8d264] rounded-2xl">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
									Together, we can change the world!
								</h3>
								<p className="text-gray-800 mb-6">
									Your donation helps us continue supporting communities around
									the world through education, entrepreneurship, and disaster
									relief.
								</p>
								<Link
									href="/donate"
									className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
								>
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
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
									Donate Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Related Stories Section */}
			{relatedStories.length > 0 && (
				<section className="py-12 md:py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
							More Inspiring Stories
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{relatedStories.map((relatedStory) => (
								<Link
									key={relatedStory.id}
									href={`/stories/${relatedStory.id}`}
									className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
								>
									<div className="relative aspect-[4/3]">
										<Image
											src={relatedStory.heroImage}
											alt={relatedStory.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										{/* Gradient overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

										{/* Category badge */}
										<div
											className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-medium"
											style={{ backgroundColor: relatedStory.color }}
										>
											{relatedStory.categoryLabel}
										</div>

										{/* Content */}
										<div className="absolute bottom-0 left-0 right-0 p-4">
											<h3 className="text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-[#f8d264] transition-colors">
												{relatedStory.title}
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
												<span>{relatedStory.location}</span>
											</div>
										</div>
									</div>

									{/* Read Story Link */}
									<div className="p-4 flex items-center justify-between">
										<span className="text-gray-600 text-sm">Read this story</span>
										<div
											className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
											style={{ color: relatedStory.color }}
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
							))}
						</div>

						{/* Back to Stories Button */}
						<div className="text-center mt-10">
							<Link
								href="/stories"
								className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
							>
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
										d="M7 16l-4-4m0 0l4-4m-4 4h18"
									/>
								</svg>
								View All Stories
							</Link>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
