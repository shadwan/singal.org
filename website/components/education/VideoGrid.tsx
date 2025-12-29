"use client";

import { useState } from "react";
import Image from "next/image";

const videoSeries = [
	{
		id: "knowledge-bomb",
		title: "Knowledge Bomb Series",
		subtitle: "Financial education fundamentals",
		color: "#52a7e4",
		videos: [
			{
				id: "kb-1",
				title: "The Three Rules of the Rich",
				thumbnail: "/images/education/kb-thumb-1.jpg",
				vimeoId: "471558307",
			},
			{
				id: "kb-2",
				title: "You Must Have Multiple Streams Of Income",
				thumbnail: "/images/education/kb-thumb-2.jpg",
				vimeoId: "471558681",
			},
		],
	},
	{
		id: "bls",
		title: "BLS Series",
		subtitle: "Goal setting and personal development",
		color: "#f8b864",
		videos: [
			{
				id: "bls-1",
				title: "Set A Goal",
				thumbnail: "/images/education/bls-thumb-1.jpg",
				vimeoId: "361126193",
			},
			{
				id: "bls-2",
				title: "Discover Your Spark",
				thumbnail: "/images/education/bls-thumb-2.jpg",
				vimeoId: "361126456",
			},
		],
	},
	{
		id: "re",
		title: "RE Series",
		subtitle: "System overview and child development",
		color: "#194f75",
		videos: [
			{
				id: "re-1",
				title: "Overview of the System",
				thumbnail: "/images/education/re-thumb-1.jpg",
				vimeoId: "355867892",
			},
			{
				id: "re-2",
				title: "Giving Your Child an Unfair Advantage",
				thumbnail: "/images/education/re-thumb-2.jpg",
				vimeoId: "373149845",
			},
		],
	},
];

interface VideoModalProps {
	vimeoId: string;
	title: string;
	onClose: () => void;
}

function VideoModal({ vimeoId, title, onClose }: VideoModalProps) {
	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-5xl aspect-video"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
					aria-label="Close video"
				>
					<svg
						className="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				{/* Video iframe */}
				<iframe
					src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
					className="w-full h-full rounded-xl"
					allow="autoplay; fullscreen; picture-in-picture"
					allowFullScreen
					title={title}
				/>
			</div>
		</div>
	);
}

interface VideoCardProps {
	video: {
		id: string;
		title: string;
		thumbnail: string;
		vimeoId: string;
	};
	color: string;
	onPlay: () => void;
}

function VideoCard({ video, color, onPlay }: VideoCardProps) {
	return (
		<button
			onClick={onPlay}
			className="group relative w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
		>
			<div className="relative aspect-video">
				<Image
					src={video.thumbnail}
					alt={video.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>

				{/* Color overlay on hover */}
				<div
					className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
					style={{ backgroundColor: color }}
				/>

				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

				{/* Play button */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div
						className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
						style={{ backgroundColor: `${color}ee` }}
					>
						<svg
							className="w-7 h-7 md:w-8 md:h-8 text-white ml-1"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M8 5v14l11-7z" />
						</svg>
					</div>
				</div>

				{/* Title */}
				<div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
					<h4 className="text-white font-semibold text-sm md:text-lg leading-tight text-left">
						{video.title}
					</h4>
				</div>
			</div>
		</button>
	);
}

export default function VideoGrid() {
	const [activeVideo, setActiveVideo] = useState<{
		vimeoId: string;
		title: string;
	} | null>(null);

	return (
		<>
			<section className="py-12 md:py-16 lg:py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					{/* Section Header */}
					<div className="text-center mb-10 md:mb-14">
						<span className="inline-block px-4 py-1.5 bg-[#52a7e4] text-white rounded-full text-sm font-medium mb-4">
							Financial Education
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Educational Videos
						</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Empowering the next generation with financial literacy and
							entrepreneurial skills through engaging video content.
						</p>
					</div>

					{/* Video Series */}
					<div className="space-y-12 md:space-y-16">
						{videoSeries.map((series) => (
							<div key={series.id}>
								{/* Series Header */}
								<div className="flex items-center gap-3 mb-6">
									<div
										className="w-1.5 h-8 rounded-full"
										style={{ backgroundColor: series.color }}
									/>
									<div>
										<h3 className="text-xl md:text-2xl font-bold text-gray-900">
											{series.title}
										</h3>
										<p className="text-gray-500 text-sm">{series.subtitle}</p>
									</div>
								</div>

								{/* Videos Grid */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
									{series.videos.map((video) => (
										<VideoCard
											key={video.id}
											video={video}
											color={series.color}
											onPlay={() =>
												setActiveVideo({
													vimeoId: video.vimeoId,
													title: video.title,
												})
											}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Video Modal */}
			{activeVideo && (
				<VideoModal
					vimeoId={activeVideo.vimeoId}
					title={activeVideo.title}
					onClose={() => setActiveVideo(null)}
				/>
			)}
		</>
	);
}
