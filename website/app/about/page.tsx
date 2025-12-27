"use client";

import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import Footer from "@/components/Footer";

// Initiative data
const initiatives = [
	{
		title: "Education",
		description: [
			"The Singal Foundation has funded the development of eight schools across India. The schools cater to underprivileged children living in the slums of Mumbai, India. The schools were pioneered in response to an overwhelming need in the city of Mumbai and across India.",
			"The curriculum involves a mix of academics and activity based training to ensure the children have a solid foundation in the early stages. The schools also offer free health check-ups and adult learning programs as part of the community development program.",
		],
		image: "/images/impact-card-education.png",
		caption: "Anik & Andrea Singal with Naomi & Ian Hendricks, Founders of ARC Schools",
		stats: { value: 8, label: "Schools Funded" },
		color: "#52a7e4",
	},
	{
		title: "Shelter Homes",
		description: [
			"In 2016, the Singal Foundation gave a grant of $10,000 to Compassion Asia, a shelter home in Nepal for visually impaired children.",
			"In 2020, the Singal Foundation committed to caring for 36 children at the SEAL Ashram shelter home in Mumbai, India. A grant of $24,000 was given towards this project.",
			"The Singal Foundation provided 175 meals to Interfaith Works Shelter which is a 70-bed short-term emergency shelter serving approximately 300 women per year in Rockville, Maryland.",
		],
		image: "/images/impact-card-sherlter-home.jpg",
		caption: "Shelter Home for the Blind in Jumla, Nepal",
		stats: { value: 36, label: "Children Cared For" },
		color: "#7a7cc7",
	},
	{
		title: "Business Grants",
		description: [
			"In 2017, the Singal Foundation partnered with Village Enterprise to fund a village in East Africa for $25,000.",
			"Village Enterprise works in rural East Africa where over 60% of the population lives below the global extreme poverty line of $1.90 per day.",
			"With a grant of $25,000 from the Singal Foundation, Village Enterprise trained 150 new entrepreneurs, started 50 new three-person businesses and transformed the lives of approximately 1,000 children, women, and men.",
		],
		image: "/images/impact-card-entreprenuership.png",
		caption: "Three business owners in front of their kiosk with their sheep",
		stats: { value: 150, label: "Entrepreneurs Trained" },
		color: "#194f75",
	},
	{
		title: "Disaster Relief",
		description: [
			"In 2017, when Hurricane Harvey hit Houston Texas, the Singal Foundation gave $48,000 in disaster relief grants to 7 small business owners.",
			"The Singal Foundation in partnership with Lurn, Inc launched the COVID-19 Entrepreneurship Fund in March 2020. The purpose of the fund was to provide grants to small-business owners who were negatively impacted by COVID-19. The fund raised $61,182 and gave grants to 277 small business owners in 22 different countries.",
		],
		image: "/images/impact-card-disaster-relief.jpg",
		caption: "Left to Right: Anik, Bob & Shirley (Owners of Shirley Acres), Andrea, Shannon & Jeremy",
		stats: { value: 277, label: "Grants Distributed" },
		color: "#b28f61",
	},
	{
		title: "Youth Entrepreneurship",
		description: [
			"The Singal Foundation is an advocate of Youth Entrepreneurship and believes in inspiring the next generation of entrepreneurs. In 2018 and 2019 the Singal Foundation sponsored the Children's Business Fair in their local community in Rockville, Maryland.",
			"This Fair provides kids aged 6-16 years old with the opportunity to create a product or service and then open for business during a one-day marketplace.",
			"In 2019, the Singal Foundation held pre-fair workshops at the Lurn Center in Rockville Maryland where kids were taught how to develop their communication skills and sales techniques.",
		],
		image: "/images/impact-card-youth.png",
		caption: "Miguel Coppedge, Age 12, selling his books at the Children's Business Fair, 2018",
		stats: { value: 100, label: "Young Entrepreneurs" },
		color: "#f8b864",
	},
	{
		title: "Medical Relief",
		description: [
			"The Singal Foundation also works with partners that provide health services to those in need. The Singal Foundation has given a grant of $55,000 to SEAL Ashram in Mumbai, India.",
			"The purpose of the grant was to fund the development of a hospital that would provide FREE medical treatment to the poor and destitute living in the city of Mumbai, India.",
		],
		image: "/images/impact-card-medical.png",
		caption: "K.M Philip, Founder of SEAL Ashram bandages the wounds of a woman",
		stats: { value: 55, label: "K Granted", prefix: "$" },
		color: "#6890b7",
	},
];

export default function AboutPage() {
	const [isMuted, setIsMuted] = useState(true);

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section - Mission, Story, Video */}
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

			{/* Initiatives Sections */}
			{initiatives.map((initiative, index) => (
				<section
					key={initiative.title}
					className={`py-16 md:py-20 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
				>
					<div className="container mx-auto px-4">
						<div className="max-w-6xl mx-auto">
							<div
								className={`grid lg:grid-cols-2 gap-12 items-center ${
									index % 2 === 1 ? "lg:flex-row-reverse" : ""
								}`}
							>
								{/* Image - alternating sides */}
								<div className={index % 2 === 1 ? "lg:order-2" : ""}>
									<div className="relative">
										<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
											<Image
												src={initiative.image}
												alt={initiative.title}
												fill
												className="object-cover"
											/>
										</div>
										{/* Stat Badge */}
										<div
											className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-white rounded-xl shadow-lg p-4"
											style={{ borderLeft: `4px solid ${initiative.color}` }}
										>
											<div className="flex items-baseline gap-1">
												{initiative.stats.prefix && (
													<span className="text-2xl font-bold text-gray-900">
														{initiative.stats.prefix}
													</span>
												)}
												<NumberTicker
													value={initiative.stats.value}
													className="text-2xl md:text-3xl font-bold text-gray-900 font-mono"
												/>
											</div>
											<p className="text-gray-600 text-sm">
												{initiative.stats.label}
											</p>
										</div>
									</div>
									<p className="text-center text-gray-500 text-sm mt-8">
										{initiative.caption}
									</p>
								</div>

								{/* Content */}
								<div className={index % 2 === 1 ? "lg:order-1" : ""}>
									<div
										className="inline-block w-12 h-1 rounded-full mb-4"
										style={{ backgroundColor: initiative.color }}
									/>
									<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
										{initiative.title}
									</h2>
									{initiative.description.map((paragraph, pIndex) => (
										<p
											key={pIndex}
											className="text-gray-600 text-lg mb-4 last:mb-0"
										>
											{paragraph}
										</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			))}

			{/* Footer */}
			<Footer />
		</main>
	);
}
