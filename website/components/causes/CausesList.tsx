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

const causes = [
	{
		id: "education",
		title: "Education",
		tagline: "The path out of poverty begins when the next generation can access quality education.",
		icon: AcademicCapIcon,
		color: "#52a7e4",
		image: "/images/impact-card-education.png",
		partner: "Dream Centers / ARC Schools",
		location: "Mumbai, India",
		overview: "The Singal Foundation partnered with the Dream Centers to fund 8 schools in the slum communities of India. These schools are unique because of their self-sustaining model. After a one-time investment of $45,000, each school becomes completely self-sufficient.",
		stats: [
			{ value: "266M", label: "people can't read or write in India" },
			{ value: "35M", label: "children do not go to school" },
			{ value: "8", label: "schools funded by Singal Foundation" },
		],
		approach: [
			{
				title: "Early Childhood Education",
				description: "The ARC school focuses heavily on pre-primary education (ages 3-5), ensuring children are provided with a solid foundation through a mix of academics and activity based learning.",
			},
			{
				title: "Support Classes",
				description: "After-school support classes provide children with personalized attention by qualified teachers, drastically reducing their chances of dropping out.",
			},
			{
				title: "Self Sustainability",
				description: "Each school costs $45,000 to build and becomes completely self-sufficient by month 18 with no additional funding from outside sources.",
			},
		],
		outcome: "To date, the Singal Foundation has funded the development of 8 schools and served over 1,900 children in India.",
	},
	{
		id: "shelter-homes",
		title: "Shelter Homes",
		tagline: "We believe in giving everyone access to a stable and safe environment in which they can grow and thrive.",
		icon: HomeIcon,
		color: "#7a7cc7",
		image: "/images/impact-card-sherlter-home.jpg",
		partner: "Compassion Asia / SEAL Ashram",
		location: "Nepal & India",
		overview: "In 2016, the Singal Foundation donated $10,000 to Compassion Asia, a shelter home in Nepal for visually impaired and blind children. In 2020, we committed to caring for 36 children at SEAL Ashram in Mumbai, India with a grant of $24,000.",
		stats: [
			{ value: "30,240", label: "Nepalese children are blind" },
			{ value: "36", label: "children cared for at SEAL Ashram" },
			{ value: "175", label: "meals provided to Interfaith Works Shelter" },
		],
		approach: [
			{
				title: "Basic Necessities",
				description: "We provide vulnerable children with good food, adequate clothing, and a safe environment to live in.",
			},
			{
				title: "Education",
				description: "Through partnerships, we help supplement children's schooling by paying for specially trained teachers and braille books.",
			},
		],
		outcome: "Since 2009, our partners have seen dramatic improvements in the living conditions, health, and emotional well-being of the children served.",
	},
	{
		id: "entrepreneurship",
		title: "Entrepreneurship",
		tagline: "We believe in empowering individuals so they can lift themselves out of poverty.",
		icon: BriefcaseIcon,
		color: "#194f75",
		image: "/images/impact-card-entreprenuership.png",
		partner: "Village Enterprise",
		location: "East Africa (Kenya, Uganda, Tanzania)",
		overview: "In 2017, the Singal Foundation partnered with Village Enterprise to fund a village in East Africa for $25,000. Village Enterprise equips rural Africans with the resources to create sustainable businesses, targeting people living below the extreme poverty level of $1.90 a day.",
		stats: [
			{ value: "767M", label: "worldwide live on less than $1.90/day" },
			{ value: "150", label: "entrepreneurs trained" },
			{ value: "50", label: "new businesses started" },
		],
		approach: [
			{
				title: "Training",
				description: "Groups of three entrepreneurs receive seed capital, training and ongoing mentoring. Business mentors deliver nine months of business and financial skills training.",
			},
			{
				title: "Business Savings Groups",
				description: "BSGs of approximately 30 entrepreneurs allow members to pool savings, access loans, and build social capital as a safety net.",
			},
			{
				title: "Seed Funding",
				description: "$150 micro-grants are given to start each business. Grants rather than loans allow entrepreneurs to take risks without fear of debt.",
			},
		],
		outcome: "With a grant of $25,000, Village Enterprise trained 150 new entrepreneurs, started 50 new three-person businesses and transformed the lives of approximately 1,000 people.",
	},
	{
		id: "disaster-relief",
		title: "Disaster Relief",
		tagline: "We are committed to providing tangible relief to those affected by natural disasters.",
		icon: ShieldExclamationIcon,
		color: "#b28f61",
		image: "/images/impact-card-disaster-relief.jpg",
		partner: "Direct Grants & COVID-19 Fund",
		location: "Houston, Texas & 22 Countries",
		overview: "When Hurricane Harvey hit Houston in 2017, we raised $48,000 and gave grants to small business owners affected by the storm. In 2020, we launched the COVID-19 Entrepreneurship Fund, raising $61,182 and giving grants to 277 small business owners in 22 countries.",
		stats: [
			{ value: "$48K", label: "raised for Hurricane Harvey relief" },
			{ value: "277", label: "COVID-19 grants distributed" },
			{ value: "22", label: "countries reached" },
		],
		approach: [
			{
				title: "Fundraising",
				description: "Anik Singal started a GoFundMe campaign and pledged to match every dollar raised. The campaign raised $22,615 which was doubled with the match.",
			},
			{
				title: "Business Grants",
				description: "Grants were given directly to small business owners including boutiques, real estate firms, chiropractor practices and gyms.",
			},
		],
		outcome: "All 7 Hurricane Harvey businesses survived and were prevented from completely shutting down. 277 COVID-19 grants helped entrepreneurs worldwide.",
	},
	{
		id: "youth-entrepreneurship",
		title: "Youth Entrepreneurship",
		tagline: "We strive to equip young people with the values and vision to pursue their dreams.",
		icon: SparklesIcon,
		color: "#f8b864",
		image: "/images/impact-card-youth.png",
		partner: "Children's Business Fair",
		location: "Rockville, Maryland, USA",
		overview: "The Singal Foundation was the premier sponsor for the Children's Business Fair in Rockville, Maryland in 2018 and 2019. Over 90 children participated, gaining real-life experience in entrepreneurship.",
		stats: [
			{ value: "44%", label: "of young people want to be entrepreneurs" },
			{ value: "90+", label: "children participated" },
			{ value: "6-14", label: "age range of participants" },
		],
		approach: [
			{
				title: "One-Day Marketplace",
				description: "Children create a product or service, develop a brand, build a marketing strategy and then open for customers. Prizes are given to the best businesses.",
			},
			{
				title: "Coaching & Training",
				description: "Pre-fair workshops teach budding entrepreneurs communication skills, sales techniques, pricing, product packaging, and sales pitch strategy.",
			},
		],
		outcome: "Product ideas included hand-made jewelry, bath bombs, stuffed animals, recipe cards, face painting, knitting lessons, and specialty lemonade.",
	},
	{
		id: "medical-relief",
		title: "Medical Relief",
		tagline: "We can save lives by delivering healthcare services to those in need.",
		icon: HeartIcon,
		color: "#6890b7",
		image: "/images/impact-card-medical.png",
		partner: "SEAL Ashram",
		location: "Mumbai, India",
		overview: "The Singal Foundation donated $55,000 to SEAL Ashram for the construction of a hospital for the destitute. SEAL Ashram rescues needy people from the streets and provides food, clothing, shelter, healthcare and education.",
		stats: [
			{ value: "1:10,189", label: "doctor to patient ratio in India" },
			{ value: "265", label: "residents currently at SEAL Ashram" },
			{ value: "$55K", label: "donated for hospital construction" },
		],
		approach: [
			{
				title: "Free Medical Treatment",
				description: "SEAL Ashram is building a hospital to provide free treatment to anyone unable to afford care, especially those with HIV/AIDS, tuberculosis and chronic illness.",
			},
			{
				title: "Safe Housing",
				description: "The new hospital will accommodate 200 patients. Women and girls will move to the new facility to create room for more residents.",
			},
		],
		outcome: "As of December 2020, the hospital construction is underway. Once complete, it will serve the most vulnerable populations in Mumbai.",
	},
];

export default function CausesList() {
	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
					{causes.map((cause) => {
						const IconComponent = cause.icon;
						return (
							<div key={cause.id} id={cause.id} className="scroll-mt-24">
								{/* Cause Header */}
								<div className="flex items-center gap-4 mb-8">
									<div
										className="w-14 h-14 rounded-2xl flex items-center justify-center"
										style={{ backgroundColor: cause.color }}
									>
										<IconComponent className="w-7 h-7 text-white" />
									</div>
									<div>
										<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
											{cause.title}
										</h2>
										<p className="text-gray-600">{cause.partner} • {cause.location}</p>
									</div>
								</div>

								{/* Tagline */}
								<p
									className="text-xl md:text-2xl font-medium mb-8 pl-4 border-l-4"
									style={{ borderColor: cause.color, color: cause.color }}
								>
									{cause.tagline}
								</p>

								{/* Content Grid */}
								<div className="grid lg:grid-cols-2 gap-12 items-start">
									{/* Left - Image (Polaroid style) */}
									<div>
										<div className="bg-white p-3 pb-16 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-300">
											<div className="aspect-[4/3] overflow-hidden bg-gray-100">
												<Image
													src={cause.image}
													alt={cause.title}
													fill
													className="object-cover !relative"
												/>
											</div>
											{/* Stats in caption */}
											<div className="mt-4 px-1 space-y-2">
												{cause.stats.map((stat, i) => (
													<div key={i} className="flex items-center gap-2">
														<div
															className="w-2 h-2 rounded-full"
															style={{ backgroundColor: cause.color }}
														/>
														<span className="font-mono text-lg font-bold text-gray-900">
															{stat.value}
														</span>
														<span className="text-gray-600 text-sm">
															{stat.label}
														</span>
													</div>
												))}
											</div>
										</div>
									</div>

									{/* Right - Content */}
									<div>
										{/* Overview */}
										<div className="mb-8">
											<h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
											<p className="text-gray-600 text-lg">{cause.overview}</p>
										</div>

										{/* Approach */}
										<div className="mb-8">
											<h3 className="text-lg font-semibold text-gray-900 mb-4">Our Approach</h3>
											<div className="space-y-4">
												{cause.approach.map((item, i) => (
													<div key={i} className="flex gap-4">
														<div
															className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
															style={{ backgroundColor: cause.color }}
														>
															{i + 1}
														</div>
														<div>
															<h4 className="font-semibold text-gray-900">{item.title}</h4>
															<p className="text-gray-600 text-sm">{item.description}</p>
														</div>
													</div>
												))}
											</div>
										</div>

										{/* Outcome */}
										<div
											className="p-6 rounded-2xl"
											style={{ backgroundColor: `${cause.color}15` }}
										>
											<h3 className="text-lg font-semibold text-gray-900 mb-2">The Outcome</h3>
											<p className="text-gray-700">{cause.outcome}</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
