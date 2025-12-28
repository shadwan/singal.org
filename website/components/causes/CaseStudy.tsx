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

// Define all case studies organized by category
const caseStudies: Record<string, CaseStudyData[]> = {
	"education": [
		{
			id: "arc-schools",
			title: "ARC Schools Initiative",
			tagline: "The path out of poverty begins when the next generation can access quality education.",
			icon: AcademicCapIcon,
			color: "#52a7e4",
			image: "/images/impact-card-education.png",
			partner: "Dream Centers / ARC Schools",
			location: "Mumbai, India",
			overview: "The Singal Foundation partnered with the Dream Centers to fund 8 schools in the slum communities of India. These schools are unique because of their self-sustaining model. After a one-time investment of $45,000, each school becomes completely self-sufficient. As part of the community empowerment program, a nominal fee is charged to the students which sustains all school expenses.",
			stats: [
				{ value: "266M", label: "people can't read or write in India" },
				{ value: "35M", label: "children do not go to school" },
				{ value: "8", label: "schools funded" },
				{ value: "1,900+", label: "children served" },
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
					title: "Teacher Training",
					description: "The ARC School has started its own Training Center for Teachers in Early Education, changing the way teachers are supported and trained.",
				},
				{
					title: "Self Sustainability",
					description: "Each school costs $45,000 to build and becomes completely self-sufficient by month 18 with no additional funding from outside sources.",
				},
			],
			outcome: "To date, the Singal Foundation has funded the development of 8 schools and served over 1,900 children in India – and this is only the beginning.",
		},
	],
	"shelter-homes": [
		{
			id: "compassion-asia",
			title: "Compassion Asia - Nepal",
			tagline: "We believe in giving everyone access to a stable and safe environment in which they can grow and thrive.",
			icon: HomeIcon,
			color: "#7a7cc7",
			image: "/images/impact-card-sherlter-home.jpg",
			partner: "Compassion Asia",
			location: "Jumla District, Nepal",
			overview: "In 2016, the Singal Foundation donated $10,000 to Compassion Asia, a shelter home in Nepal for visually impaired and blind children. This home often cares for fifteen to seventeen kids at a time. The children's home is located in one of the least developed regions of Nepal.",
			stats: [
				{ value: "30,240", label: "Nepalese children are blind" },
				{ value: "90,000+", label: "children are visually impaired" },
				{ value: "15-17", label: "children cared for at a time" },
			],
			approach: [
				{
					title: "Basic Necessities",
					description: "Compassion Asia provides children with good food, adequate clothing and a safe environment to live in.",
				},
				{
					title: "Education",
					description: "Through a special arrangement with the Nepali government, we help pay for a teacher trained to work with the blind and purchase expensive braille books.",
				},
			],
			outcome: "Since April of 2009, Compassion Asia has seen dramatic improvements in the living conditions, health, and emotional well-being of the children.",
		},
		{
			id: "seal-ashram-shelter",
			title: "SEAL Ashram - India",
			tagline: "Providing safe shelter for the most vulnerable.",
			icon: HomeIcon,
			color: "#7a7cc7",
			image: "/images/impact-card-sherlter-home.jpg",
			partner: "SEAL Ashram",
			location: "Mumbai, India",
			overview: "In 2020, the Singal Foundation committed to caring for 36 children at the SEAL Ashram shelter home in Mumbai, India. A grant of $24,000 was given towards this project. Additionally, we provided 175 meals to Interfaith Works Shelter in Rockville, Maryland.",
			stats: [
				{ value: "36", label: "children cared for" },
				{ value: "$24K", label: "grant provided" },
				{ value: "175", label: "meals to Interfaith Works" },
			],
			approach: [
				{
					title: "Child Care",
					description: "SEAL Ashram provides rescued children with food, clothing, shelter, healthcare and education.",
				},
				{
					title: "Community Support",
					description: "Partnership with Interfaith Works Shelter to provide meals to a 70-bed emergency shelter serving approximately 300 women per year.",
				},
			],
			outcome: "36 children now have access to safe shelter, nutritious food, and educational opportunities through our partnership with SEAL Ashram.",
		},
	],
	"entrepreneurship": [
		{
			id: "village-enterprise",
			title: "Village Enterprise",
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
				{ value: "1,000", label: "lives transformed" },
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
				{
					title: "Mentoring",
					description: "Each business is assigned a local mentor who guides them in selecting an enterprise best positioned to flourish based on skills and market conditions.",
				},
			],
			outcome: "With a grant of $25,000, Village Enterprise trained 150 new entrepreneurs, started 50 new three-person businesses and transformed the lives of approximately 1,000 people.",
		},
	],
	"disaster-relief": [
		{
			id: "hurricane-harvey",
			title: "Hurricane Harvey Relief",
			tagline: "We are committed to providing tangible relief to those affected by natural disasters.",
			icon: ShieldExclamationIcon,
			color: "#b28f61",
			image: "/images/impact-card-disaster-relief.jpg",
			partner: "Direct Grants",
			location: "Houston, Texas",
			overview: "In 2017, when Hurricane Harvey hit Houston Texas, the Singal Foundation and its generous donors raised $48,000 and gave grants to small business owners affected by the storm. Our hearts went out to small business owners who lost not only their homes, but also their businesses and livelihood.",
			stats: [
				{ value: "$125B", label: "damages caused by Harvey" },
				{ value: "185,000", label: "homes damaged or destroyed" },
				{ value: "7", label: "business grants given" },
				{ value: "$48K", label: "raised for relief" },
			],
			approach: [
				{
					title: "Fundraising",
					description: "Anik Singal started a GoFundMe campaign and pledged to match every dollar raised. The campaign raised $22,615 which was doubled with the match.",
				},
				{
					title: "Business Grants",
					description: "Anik and his team flew to Houston to visit small business owners and see the devastation first-hand. Grants were given to boutiques, real estate firms, chiropractor practices and gyms.",
				},
			],
			outcome: "All 7 businesses survived the hurricane and were prevented from completely shutting down.",
		},
		{
			id: "covid19-relief",
			title: "COVID-19 Entrepreneurship Fund",
			tagline: "Supporting entrepreneurs through the global pandemic.",
			icon: ShieldExclamationIcon,
			color: "#b28f61",
			image: "/images/impact-card-disaster-relief.jpg",
			partner: "Lurn, Inc",
			location: "Global - 22 Countries",
			overview: "Singal Foundation in partnership with Lurn, Inc started the COVID-19 Entrepreneurship Fund in March 2020. The purpose was to provide grants ranging from $50 to $500 to small-business owners who were negatively impacted by COVID-19 for urgent needs like groceries, medicine and transportation.",
			stats: [
				{ value: "22.2M", label: "jobs lost in the United States" },
				{ value: "277", label: "grants distributed" },
				{ value: "22", label: "countries reached" },
				{ value: "$60K+", label: "total raised" },
			],
			approach: [
				{
					title: "Fundraising",
					description: "The Singal Foundation and Lurn contributed $30,000 towards Fund #1 while Fund #2 raised $30,000 from the entrepreneurial community.",
				},
				{
					title: "Grant Distribution",
					description: "We received 500+ applications. Grants went to ride share drivers, fitness trainers, chefs, servers, event managers, musicians, beauty professionals, teachers and more.",
				},
			],
			outcome: "$60,182 in grants were given to 277 applicants from 22 different countries.",
		},
	],
	"youth-entrepreneurship": [
		{
			id: "childrens-business-fair",
			title: "Children's Business Fair",
			tagline: "We strive to equip young people with the values and vision to pursue their dreams.",
			icon: SparklesIcon,
			color: "#f8b864",
			image: "/images/impact-card-youth.png",
			partner: "Children's Business Fair",
			location: "Rockville, Maryland, USA",
			overview: "The Singal Foundation was the premier sponsor for the Children's Business Fair in Rockville, Maryland in 2018 and 2019. Over 90 children participated, gaining real-life experience in entrepreneurship through creating products, developing brands, and selling at a one-day marketplace.",
			stats: [
				{ value: "44%", label: "of young people want to be entrepreneurs" },
				{ value: "90+", label: "children participated" },
				{ value: "6-14", label: "age range of participants" },
			],
			approach: [
				{
					title: "One-Day Marketplace",
					description: "Children create a product or service, develop a brand, build a marketing strategy and then open for customers. Prizes are given to the best businesses by age and category.",
				},
				{
					title: "Coaching & Training",
					description: "Pre-fair workshops teach budding entrepreneurs communication skills, sales techniques, pricing, product packaging, and sales pitch strategy.",
				},
			],
			outcome: "Product ideas included hand-made jewelry, bath bombs, stuffed animals, recipe cards, face painting, knitting lessons, and specialty lemonade.",
		},
	],
	"medical-relief": [
		{
			id: "seal-ashram-hospital",
			title: "SEAL Ashram Hospital",
			tagline: "We can save lives by delivering healthcare services to those in need.",
			icon: HeartIcon,
			color: "#6890b7",
			image: "/images/impact-card-medical.png",
			partner: "SEAL Ashram",
			location: "Mumbai, India",
			overview: "The Singal Foundation donated $55,000 to SEAL Ashram for the construction of a hospital for the destitute. SEAL Ashram rescues needy and helpless people from the streets and railway stations of Mumbai, providing food, clothing, shelter, healthcare and education.",
			stats: [
				{ value: "1:10,189", label: "doctor to patient ratio in India" },
				{ value: "265", label: "residents at SEAL Ashram" },
				{ value: "200", label: "patient capacity when complete" },
				{ value: "$55K", label: "donated for construction" },
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
	],
};

interface CaseStudyData {
	id: string;
	title: string;
	tagline: string;
	icon: React.ComponentType<{ className?: string }>;
	color: string;
	image: string;
	partner: string;
	location: string;
	overview: string;
	stats: { value: string; label: string }[];
	approach: { title: string; description: string }[];
	outcome: string;
}

interface CaseStudyProps {
	categoryId: string;
	selectedStudyId: string | null;
	onSelectStudy: (id: string) => void;
}

export default function CaseStudy({ categoryId, selectedStudyId, onSelectStudy }: CaseStudyProps) {
	const studies = caseStudies[categoryId] || [];
	
	if (studies.length === 0) return null;

	// If there's only one study, auto-select it
	const activeStudy = studies.length === 1 
		? studies[0] 
		: studies.find(s => s.id === selectedStudyId) || null;

	const IconComponent = activeStudy?.icon;

	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					{/* If multiple studies, show selector */}
					{studies.length > 1 && (
						<div className="mb-12">
							<p className="text-gray-600 text-center mb-4">
								This category has multiple case studies. Select one to view:
							</p>
							<div className="flex flex-wrap justify-center gap-3">
								{studies.map((study) => (
									<button
										key={study.id}
										onClick={() => onSelectStudy(study.id)}
										className={`px-5 py-2.5 rounded-full font-medium transition-all ${
											selectedStudyId === study.id
												? "text-white"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}
										style={{
											backgroundColor: selectedStudyId === study.id ? study.color : undefined,
										}}
									>
										{study.title}
									</button>
								))}
							</div>
						</div>
					)}

					{/* Case Study Content */}
					{activeStudy && IconComponent && (
						<div className="scroll-mt-24">
							{/* Header */}
							<div className="flex items-center gap-4 mb-8">
								<div
									className="w-14 h-14 rounded-2xl flex items-center justify-center"
									style={{ backgroundColor: activeStudy.color }}
								>
									<IconComponent className="w-7 h-7 text-white" />
								</div>
								<div>
									<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
										{activeStudy.title}
									</h2>
									<p className="text-gray-600">{activeStudy.partner} • {activeStudy.location}</p>
								</div>
							</div>

							{/* Tagline */}
							<p
								className="text-xl md:text-2xl font-medium mb-8 pl-4 border-l-4"
								style={{ borderColor: activeStudy.color, color: activeStudy.color }}
							>
								{activeStudy.tagline}
							</p>

							{/* Content Grid */}
							<div className="grid lg:grid-cols-2 gap-12 items-start">
								{/* Left - Image (Polaroid style) */}
								<div>
									<div className="bg-white p-3 pb-16 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-300">
										<div className="aspect-[4/3] overflow-hidden bg-gray-100">
											<Image
												src={activeStudy.image}
												alt={activeStudy.title}
												fill
												className="object-cover !relative"
											/>
										</div>
										{/* Stats in caption */}
										<div className="mt-4 px-1 space-y-2">
											{activeStudy.stats.map((stat, i) => (
												<div key={i} className="flex items-center gap-2">
													<div
														className="w-2 h-2 rounded-full"
														style={{ backgroundColor: activeStudy.color }}
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
										<p className="text-gray-600 text-lg">{activeStudy.overview}</p>
									</div>

									{/* Approach */}
									<div className="mb-8">
										<h3 className="text-lg font-semibold text-gray-900 mb-4">Our Approach</h3>
										<div className="space-y-4">
											{activeStudy.approach.map((item, i) => (
												<div key={i} className="flex gap-4">
													<div
														className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
														style={{ backgroundColor: activeStudy.color }}
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
										style={{ backgroundColor: `${activeStudy.color}15` }}
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">The Outcome</h3>
										<p className="text-gray-700">{activeStudy.outcome}</p>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Prompt to select if multiple and none selected */}
					{studies.length > 1 && !activeStudy && (
						<div className="text-center py-12">
							<p className="text-gray-500 text-lg">
								Please select a case study above to view details.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
