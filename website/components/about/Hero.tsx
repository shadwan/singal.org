"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function Hero() {
	const [isMuted, setIsMuted] = useState(true);

	return (
		<section className="py-12 md:py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="bg-[#f8d264] rounded-3xl overflow-hidden">
					<div className="p-8 md:p-12 lg:p-16">
						<div className="max-w-4xl mx-auto">
							{/* Mission Statement */}
							<div className="text-center mb-4">
								<span className="inline-block px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium">
									Our Mission
								</span>
							</div>
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-center leading-tight">
								To empower those that are less fortunate by giving them the
								tools and resources necessary to{" "}
								<span className="underline decoration-gray-900 underline-offset-4">flourish in life</span>.
							</h1>

							{/* Our Story */}
							<div className="mb-10 text-center">
								<p className="text-gray-800 text-lg md:text-xl mb-6">
									The Singal Foundation is founded by <strong>Anik</strong> & <strong>Andrea Singal</strong>.
									Their goal remains simple - never to give, but only to{" "}
									<strong>EMPOWER</strong>. The initiatives of the organization
									are worldwide and include causes related to education,
									entrepreneurship, medical and disaster relief.
								</p>
								<p className="text-gray-800 text-lg md:text-xl">
									From building schools in India, to funding micro-businesses
									in Africa, to equipping youth with financial education in
									the United States, the Singal Foundation seeks to empower
									the lives of individuals around the globe.
								</p>
							</div>

							{/* Video Player */}
							<div>
								<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
									<div className="aspect-video">
										<iframe
											src={`https://www.youtube.com/embed/ti6S9EUO_UA?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=ti6S9EUO_UA&controls=0&rel=0&modestbranding=1&showinfo=0&start=12`}
											title="TEDx Talk by Anik Singal - Dreams of the Bottom Billion"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="w-full h-full"
										/>
									</div>

									{/* Mute/Unmute Button */}
									<button
										onClick={() => setIsMuted(!isMuted)}
										className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all z-10 ${
											isMuted 
												? "bg-[#f8d264] hover:bg-[#f8b864] shadow-lg animate-pulse" 
												: "bg-black/70 hover:bg-black/90"
										}`}
										aria-label={isMuted ? "Unmute" : "Mute"}
									>
										{isMuted ? (
											<VolumeX className="w-5 h-5 text-gray-900" />
										) : (
											<Volume2 className="w-5 h-5 text-white" />
										)}
									</button>
								</div>
								<p className="text-gray-800 text-sm mt-3 italic text-center">
									"Dreams of the Bottom Billion" — Anik Singal at TEDxWilmington
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
