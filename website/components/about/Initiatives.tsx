"use client";

import Image from "next/image";

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

export default function Initiatives() {
	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
					{initiatives.map((initiative, index) => (
						<div
							key={initiative.title}
							className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
						>
							{/* Polaroid Image */}
							<div className={index % 2 === 1 ? "lg:order-2" : ""}>
								<div className="bg-white p-3 pb-16 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
									<div className="aspect-[4/3] overflow-hidden bg-gray-100">
										<Image
											src={initiative.image}
											alt={initiative.title}
											fill
											className="object-cover !relative"
										/>
									</div>
									{/* Caption with Stats */}
									<div className="mt-4 px-1">
										<div className="flex items-center gap-2 mb-1">
											<div
												className="w-2 h-2 rounded-full"
												style={{ backgroundColor: initiative.color }}
											/>
											<span className="font-mono text-lg font-bold text-gray-900">
												{initiative.stats.prefix || ""}{initiative.stats.value}+
											</span>
											<span className="text-gray-600 text-sm">
												{initiative.stats.label}
											</span>
										</div>
										<p className="text-gray-500 text-sm italic">
											{initiative.caption}
										</p>
									</div>
								</div>
							</div>

							{/* Content */}
							<div className={index % 2 === 1 ? "lg:order-1" : ""}>
								<div
									className="inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-4"
									style={{ backgroundColor: initiative.color }}
								>
									{initiative.title}
								</div>
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
					))}
				</div>
			</div>
		</section>
	);
}
