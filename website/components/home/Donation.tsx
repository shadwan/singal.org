"use client";

import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Ripple } from "@/components/ui/ripple";
import { Heart } from "lucide-react";

const donationTiers = [
	{ amount: 25, impact: "Provides school supplies for 1 child" },
	{ amount: 100, impact: "Funds 1 year of education" },
	{ amount: 500, impact: "Supports a micro-business grant" },
];

export default function Donation() {
	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				{/* Main Card Container */}
				<div className="relative bg-[#f8d264] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden min-h-[600px] flex items-center justify-center">
					
					{/* Ripple Background Effect */}
					<Ripple 
						mainCircleSize={180}
						mainCircleOpacity={0.6}
						numCircles={12}
						className="[--foreground:#c9952c] [mask-image:none]"
					/>

					{/* Main Content */}
					<div className="relative z-10 max-w-2xl mx-auto">
						{/* Section Header */}
						<div className="text-center mb-10 md:mb-12">
							<span className="inline-block px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium mb-4">
								Make an Impact
							</span>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
								Your Donation{" "}
								<span className="text-gray-900">Changes Lives</span>
							</h2>
							<p className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto">
								Every contribution directly funds education, entrepreneurship,
								and community development programs.
							</p>
						</div>

						{/* Poverty Stat Highlight */}
						<div className="text-center mb-10">
							<div className="inline-flex items-baseline gap-1 mb-2">
								<NumberTicker
									value={736}
									className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-mono"
								/>
								<span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
									M
								</span>
							</div>
							<p className="text-gray-800 text-base md:text-lg">
								people still live in extreme poverty worldwide
							</p>
						</div>

						{/* Donation Tiers */}
						<div className="grid md:grid-cols-3 gap-4 mb-10">
							{donationTiers.map((tier, index) => (
								<button
									key={tier.amount}
									className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 text-left backdrop-blur-sm ${
										index === 1
											? "border-gray-900 bg-gray-900"
											: "border-gray-900/20 hover:border-gray-900/50 bg-white/60"
									}`}
								>
									<div className="flex items-center gap-2 mb-2">
										<span className={`text-2xl md:text-3xl font-bold ${index === 1 ? "text-white" : "text-gray-900"}`}>
											${tier.amount}
										</span>
										{index === 1 && (
											<span className="px-2 py-0.5 bg-[#f8d264] text-gray-900 text-xs font-semibold rounded-full">
												POPULAR
											</span>
										)}
									</div>
									<p className={`text-sm ${index === 1 ? "text-gray-300" : "text-gray-700"}`}>{tier.impact}</p>
								</button>
							))}
						</div>

						{/* CTA Button */}
						<div className="flex justify-center">
							<Button
								size="lg"
								className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-lg"
							>
								<Heart className="mr-2 h-5 w-5" />
								Donate Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
