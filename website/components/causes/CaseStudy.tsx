"use client";

import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import { DottedMap } from "@/components/ui/dotted-map";

// Location coordinates for each case study with region info
const locationData: Record<
	string,
	{ markers: { lat: number; lng: number }[]; region: string }
> = {
	"arc-schools": {
		markers: [{ lat: 19.076, lng: 72.8777 }],
		region: "India",
	},
	"compassion-asia": {
		markers: [{ lat: 29.3, lng: 82.2 }],
		region: "Nepal",
	},
	"seal-ashram-shelter": {
		markers: [{ lat: 19.076, lng: 72.8777 }],
		region: "India",
	},
	"village-enterprise": {
		markers: [
			{ lat: 0.0236, lng: 37.9062 },
			{ lat: 1.3733, lng: 32.2903 },
			{ lat: -6.369, lng: 34.8888 },
		],
		region: "East Africa",
	},
	"hurricane-harvey": {
		markers: [{ lat: 29.7604, lng: -95.3698 }],
		region: "USA",
	},
	"covid19-relief": {
		markers: [
			{ lat: 40.7128, lng: -74.006 },
			{ lat: 51.5074, lng: -0.1278 },
			{ lat: 19.076, lng: 72.8777 },
			{ lat: -23.5505, lng: -46.6333 },
			{ lat: 35.6762, lng: 139.6503 },
			{ lat: 1.3521, lng: 103.8198 },
			{ lat: -33.8688, lng: 151.2093 },
		],
		region: "Global",
	},
	"childrens-business-fair": {
		markers: [{ lat: 39.084, lng: -77.1528 }],
		region: "USA",
	},
	"seal-ashram-hospital": {
		markers: [{ lat: 19.076, lng: 72.8777 }],
		region: "India",
	},
};

// Full case study data with images
const caseStudies: Record<string, CaseStudyData[]> = {
	education: [
		{
			id: "arc-schools",
			title: "ARC Schools Initiative",
			tagline:
				"The path out of poverty begins when the next generation can access quality education.",
			color: "#52a7e4",
			heroImage: "/images/causes/education/hero.jpg",
			partner: "Dream Centers / ARC Schools",
			location: "Mumbai, India",
			year: "2014-Present",
			grantAmount: 360000,
			overview:
				"The Singal Foundation partnered with the Dream Centers to fund 8 schools in the slum communities of India. The schools were pioneered in response to an overwhelming need in the city of Mumbai and across India. These schools are unique because of their self-sustaining model. After a one-time investment of $45,000, each school becomes completely self-sufficient. As part of the community empowerment program, a nominal fee is charged to the students which is able to sustain all the expenses of the school.",
			issueStats: [
				{ value: 266, suffix: "M", label: "people can't read or write" },
				{ value: 35, suffix: "M", label: "children do not go to school" },
				{ value: 47, suffix: "M", label: "children dropout by grade 10" },
				{ value: 35, suffix: "%", label: "of world's illiterate from India" },
				{ value: 30, suffix: "%", label: "don't reach grade 8" },
				{ value: 50, suffix: "%", label: "can't solve grade 3 math" },
			],
			approach: [
				{
					title: "Early Childhood Education",
					description:
						"The Right to Education Act in India guarantees free public school education to children ages 6-14. However, early childhood education (3-5 years) is not covered. The ARC school focuses heavily on pre-primary education, ensuring children have a solid foundation through academics and activity based learning.",
					image: "/images/causes/education/children-img.png",
					imageCaption: "A student of the ARC School playing with building blocks",
				},
				{
					title: "Support Classes",
					description:
						"Most children cannot get after-school support from their parents because they are either uneducated or too busy making ends meet. Support classes provide children with personalized attention by qualified teachers, drastically reducing dropout rates.",
					image: "/images/causes/education/support.png",
					imageCaption: "Naomi Hendricks, Founder of the ARC Schools, helps a student",
				},
				{
					title: "Teacher Training Programs",
					description:
						"1 in 6 elementary school teachers are not professionally trained. India falls short of nearly 1 Million teachers. The ARC School has started its own Training Center for Teachers in Early Education to combat this issue.",
					image: "/images/causes/education/training.png",
					imageCaption: "ARC School teachers and support team",
				},
				{
					title: "Community Empowerment",
					description:
						"Instead of providing education free of cost, a subsidized fee is taken from students. This increases accountability of parents and children. Teachers are also recruited from within the community.",
					image: "/images/causes/education/community.png",
					imageCaption: "A student with his dad at the annual Sports Day competition",
				},
				{
					title: "Self Sustainability",
					description:
						"Each school costs $45,000 to build. After this initial investment, the school becomes completely self-sufficient by month 18 with no additional funding needed. Once we have 50 schools, profits will help fund other schools.",
					image: "/images/causes/education/self.png",
					imageCaption: "The first ARC School in Mumbai, India",
				},
				{
					title: "Health and Sanitation",
					description:
						"443 million school days are lost each year due to water and sanitation-related diseases. Children and parents are educated on healthy sanitation behavior, and free health checkups and dental care are provided annually.",
					image: "/images/causes/education/health.png",
					imageCaption: "A doctor administers a free health check-up to a student",
				},
				{
					title: "Adult Learning",
					description:
						"Adult learning programs provide the community with classes and workshops including training for women entrepreneurs, parenting workshops, music and photography.",
					image: "/images/causes/education/adult.png",
					imageCaption: "Ian Hendricks, Founder of the ARC Schools, trains women entrepreneurs",
				},
			],
			outcome:
				"To date, the Singal Foundation has funded the development of 8 schools and served over 1,900 children in India – and this is only the beginning.",
			outcomeImage: "/images/causes/education/outcome.jpg",
			outcomeStats: [
				{ value: 8, label: "Schools Funded" },
				{ value: 1900, label: "Children Served" },
				{ value: 45000, prefix: "$", label: "Per School Cost" },
			],
		},
	],
	"shelter-homes": [
		{
			id: "compassion-asia",
			title: "Compassion Asia - Nepal",
			tagline:
				"We believe in giving everyone access to a stable and safe environment in which they can grow and thrive.",
			color: "#7a7cc7",
			heroImage: "/images/causes/shelter-homes/hero.jpg",
			partner: "Compassion Asia",
			location: "Jumla District, Nepal",
			year: "2016",
			grantAmount: 10000,
			overview:
				"In 2016, the Singal Foundation donated $10,000 to Compassion Asia, a shelter home in Nepal for visually impaired and blind children. This home often cares for fifteen to seventeen kids at a time. The children's home is located in the Jumla district of Nepal, one of the least developed regions of the country. Until 2015, the home was only accessible via an eleven hour trek from the Jumla airstrip. The home gives these vulnerable children the ability to hope and dream again.",
			issueStats: [
				{ value: 30240, label: "Nepalese children are blind" },
				{ value: 90000, suffix: "+", label: "children visually impaired" },
				{ value: 80, suffix: "%", label: "visual impairment avoidable" },
			],
			approach: [
				{
					title: "Basic Necessities",
					description:
						"Little food, inadequate clothing, harsh living conditions, no sight, no hope. These were the conditions before these children came to the hostel. Compassion Asia provides them with good food, adequate clothing and a safe environment.",
					image: "/images/causes/shelter-homes/basic-necessities.jpg",
					imageCaption: "Home for the Blind & Visually Impaired at Jumla, Nepal",
				},
				{
					title: "Education",
					description:
						"Through a special arrangement with the Nepali government, Compassion Asia pays the salary for a teacher trained to work with the blind. They also pay for braille books, which are very expensive and purchased in Kathmandu.",
					image: "/images/causes/shelter-homes/education.jpg",
					imageCaption: "School for the Blind & Visually Impaired at Jumla, Nepal",
				},
			],
			outcome:
				"Since April of 2009, Compassion Asia has seen dramatic improvements in the living conditions, health, and emotional well-being of the children.",
			outcomeImage: "/images/causes/shelter-homes/outcome.jpg",
			outcomeStats: [
				{ value: 17, label: "Children Cared For" },
				{ value: 10000, prefix: "$", label: "Grant Provided" },
			],
		},
		{
			id: "seal-ashram-shelter",
			title: "SEAL Ashram - India",
			tagline: "Providing safe shelter for the most vulnerable.",
			color: "#7a7cc7",
			heroImage: "/images/causes/shelter-homes/seal-ashram.jpg",
			partner: "SEAL Ashram",
			location: "Mumbai, India",
			year: "2020",
			grantAmount: 24000,
			overview:
				"In 2020, the Singal Foundation committed to caring for 36 children at the SEAL Ashram shelter home in Mumbai, India. A grant of $24,000 was given towards this project. Additionally, we provided 175 meals to Interfaith Works Shelter in Rockville, Maryland - a 70-bed short-term emergency shelter serving approximately 300 women per year.",
			issueStats: [
				{ value: 36, label: "children cared for" },
				{ value: 175, label: "meals provided" },
				{ value: 300, label: "women served annually" },
			],
			approach: [
				{
					title: "Child Care",
					description:
						"SEAL Ashram rescues needy and helpless people from the streets and railway stations of Mumbai, providing them with food, clothing, shelter, healthcare and education.",
					image: "/images/causes/shelter-homes/seal-ashram.jpg",
					imageCaption: "SEAL Ashram shelter home in Mumbai, India",
				},
				{
					title: "Community Support",
					description:
						"Partnership with Interfaith Works Shelter to provide meals to a 70-bed emergency shelter serving women in need in Rockville, Maryland.",
					image: "/images/causes/shelter-homes/seal-ashram-2.jpg",
					imageCaption: "Supporting vulnerable communities",
				},
			],
			outcome:
				"36 children now have access to safe shelter, nutritious food, and educational opportunities through our partnership with SEAL Ashram.",
			outcomeImage: "/images/causes/shelter-homes/outcome.jpg",
			outcomeStats: [
				{ value: 36, label: "Children Supported" },
				{ value: 24000, prefix: "$", label: "Grant Provided" },
			],
		},
	],
	entrepreneurship: [
		{
			id: "village-enterprise",
			title: "Village Enterprise",
			tagline:
				"We believe in empowering individuals so they can lift themselves out of poverty.",
			color: "#194f75",
			heroImage: "/images/causes/entrepreneurship/hero.jpg",
			partner: "Village Enterprise",
			location: "East Africa (Kenya, Uganda, Tanzania)",
			year: "2017",
			grantAmount: 25000,
			overview:
				"In 2017, the Singal Foundation partnered with Village Enterprise to fund a village in East Africa for $25,000. Village Enterprise is a non-profit organization that equips rural Africans with the resources to create sustainable businesses. Established in 1987, they target people living below the extreme poverty level of $1.90 a day or less, especially women and youth.",
			issueStats: [
				{ value: 767, suffix: "M", label: "live on less than $1.90/day" },
				{ value: 389, suffix: "M", label: "in extreme poverty in Africa" },
				{ value: 589, suffix: "M", label: "without electricity in Africa" },
				{ value: 30, suffix: "%", label: "youth unemployed in Africa" },
				{ value: 40, suffix: "%", label: "can't access clean water" },
				{ value: 60, suffix: "%", label: "youth not in school" },
			],
			approach: [
				{
					title: "Training",
					description:
						"The one-year Graduation program provides groups of three entrepreneurs with seed capital, training and ongoing mentoring. Business mentors deliver nine months of business and financial skills training designed for participants with little formal education.",
					image: "/images/causes/entrepreneurship/training.png",
					imageCaption: "Entrepreneurs at a Business Training Program by Village Enterprise",
				},
				{
					title: "Business Savings Groups",
					description:
						"BSGs of approximately 30 entrepreneurs are created at the beginning of training. These self-managed microfinance groups allow members to pool savings, access loans, and build social capital as a safety net.",
					image: "/images/causes/entrepreneurship/savings-group.png",
					imageCaption: "A Business Savings Group in Orkweswa Village",
				},
				{
					title: "Seed Funding",
					description:
						"$150 micro-grants are given to start each business. Grants rather than loans allow first-time entrepreneurs to take risks without fear of debt. Profits can address family needs rather than repay loans.",
					image: "/images/causes/entrepreneurship/seed-funding.png",
					imageCaption: "Two ladies celebrate receiving their business grant",
				},
				{
					title: "Mentoring",
					description:
						"Business mentors guide each group in selecting an enterprise best positioned to flourish, considering skills, market conditions, risk factors, and profitability. Village Enterprise has started over 44,000 businesses and trained over 175,000 East Africans.",
					image: "/images/causes/entrepreneurship/mentoring.jpg",
					imageCaption: "Entrepreneurs of the Sabwani Marinda Village funded by the Singal Foundation",
				},
			],
			outcome:
				"With a grant of $25,000, Village Enterprise trained 150 new entrepreneurs, started 50 new three-person businesses and transformed the lives of approximately 1,000 children, women, and men.",
			outcomeImage: "/images/causes/entrepreneurship/outcome.jpg",
			outcomeStats: [
				{ value: 150, label: "Entrepreneurs Trained" },
				{ value: 50, label: "Businesses Started" },
				{ value: 1000, label: "Lives Transformed" },
			],
		},
	],
	"disaster-relief": [
		{
			id: "hurricane-harvey",
			title: "Hurricane Harvey Relief",
			tagline:
				"We are committed to providing tangible relief to those affected by natural disasters.",
			color: "#b28f61",
			heroImage: "/images/causes/disaster-relief/hero.jpg",
			partner: "Direct Grants",
			location: "Houston, Texas",
			year: "2017",
			grantAmount: 48000,
			overview:
				"In 2017, when Hurricane Harvey hit Houston Texas, the Singal Foundation and its generous donors raised $48,000 and gave grants to small business owners affected by the storm. Our hearts went out to small business owners who lost not only their homes, but also their businesses and livelihood.",
			issueStats: [
				{ value: 99, suffix: "%", label: "of Houston companies are small businesses" },
				{ value: 125, prefix: "$", suffix: "B", label: "in damages caused" },
				{ value: 700, label: "businesses damaged" },
				{ value: 13, suffix: "M", label: "people affected" },
				{ value: 88, label: "lives lost" },
				{ value: 185000, label: "homes damaged or destroyed" },
			],
			approach: [
				{
					title: "Fundraising",
					description:
						"Most relief funds were going toward essential needs like food, clothing and shelter. Anik Singal started a GoFundMe campaign and pledged to match every dollar raised. The campaign raised $22,615 which was doubled with the match.",
					image: "/images/causes/disaster-relief/fundraising.jpg",
					imageCaption: "Supporting small businesses after the hurricane",
				},
				{
					title: "Business Grants",
					description:
						"Anik and his team flew to Houston to visit small business owners and see the devastation first-hand. Grants were given to 7 small business owners including boutiques, real estate firms, chiropractor practices and gyms.",
					image: "/images/causes/disaster-relief/business-grants.jpg",
					imageCaption: "Left to Right: Shannon M, Chuck Poteet (Business Owner), Anik & Andrea Singal and Jeremy B",
				},
			],
			outcome:
				"All 7 businesses survived the hurricane and were prevented from completely shutting down.",
			outcomeImage: "/images/causes/disaster-relief/outcome.jpg",
			outcomeStats: [
				{ value: 7, label: "Businesses Saved" },
				{ value: 48000, prefix: "$", label: "Raised" },
				{ value: 22615, prefix: "$", label: "Matched" },
			],
		},
		{
			id: "covid19-relief",
			title: "COVID-19 Entrepreneurship Fund",
			tagline: "Supporting entrepreneurs through the global pandemic.",
			color: "#b28f61",
			heroImage: "/images/causes/covid19/hero.jpg",
			partner: "Lurn, Inc",
			location: "Global - 22 Countries",
			year: "2020",
			grantAmount: 60182,
			overview:
				"Singal Foundation in partnership with Lurn, Inc started the COVID-19 Entrepreneurship Fund in March 2020. The purpose was to provide grants ranging from $50 to $500 to small-business owners who were negatively impacted by COVID-19 for urgent needs like groceries, medicine and transportation. The fund raised $60,182 and gave grants to 277 small business owners in 22 different countries.",
			issueStats: [
				{ value: 22.2, suffix: "M", label: "jobs lost in the US" },
				{ value: 92, suffix: "%", label: "small businesses impacted" },
				{ value: 96, suffix: "M+", label: "confirmed cases worldwide" },
				{ value: 2, suffix: "M+", label: "deaths worldwide" },
			],
			approach: [
				{
					title: "Fundraising",
					description:
						"In the wake of COVID-19, almost all small businesses were negatively impacted while hourly workers were laid off or furloughed. The Singal Foundation and Lurn contributed $30,000 towards Fund #1 while Fund #2 raised $30,000 from the entrepreneurial community.",
					image: "/images/causes/covid19/fundraising.jpg",
					imageCaption: "Supporting entrepreneurs during the pandemic",
				},
				{
					title: "Grant Distribution",
					description:
						"We received 500+ applications. Grants went to ride share drivers, fitness trainers, chefs, servers, independent contractors, event managers, musicians, beauty professionals, massage therapists, teachers, and ecommerce professionals.",
					image: "/images/causes/covid19/grants.jpg",
					imageCaption: "Grants distributed to entrepreneurs worldwide",
				},
			],
			outcome:
				"$60,182 in grants were given to 277 applicants from 22 different countries.",
			outcomeImage: "/images/causes/covid19/outcome.jpg",
			outcomeStats: [
				{ value: 277, label: "Grants Distributed" },
				{ value: 22, label: "Countries Reached" },
				{ value: 60182, prefix: "$", label: "Total Raised" },
			],
		},
	],
	"youth-entrepreneurship": [
		{
			id: "childrens-business-fair",
			title: "Children's Business Fair",
			tagline:
				"We strive to equip young people with the values and vision to pursue their dreams.",
			color: "#f8b864",
			heroImage: "/images/causes/youth-entrepreneurship/hero.jpg",
			partner: "Children's Business Fair",
			location: "Rockville, Maryland, USA",
			year: "2018-2019",
			grantAmount: 0,
			overview:
				"The Singal Foundation has a passion to inspire the next generation of entrepreneurs. Regardless of background, ideology or industry – most people agree that entrepreneurial innovation positively impacts society. The Singal Foundation was the premier sponsor for the Children's Business Fair in Rockville, Maryland in 2018 and 2019. Over 90 children participated, gaining real-life experience in entrepreneurship.",
			issueStats: [
				{ value: 44, suffix: "%", label: "of young people want to be entrepreneurs" },
				{ value: 46, suffix: "%", label: "aim to start business within 2 years" },
				{ value: 43, suffix: "%", label: "of students grades 5-12 want to be entrepreneurs" },
			],
			approach: [
				{
					title: "One-Day Marketplace",
					description:
						"At the Children's Business Fair, children create a product or service, develop a brand, build a marketing strategy and then open for customers. Children are responsible for set-up, customer interaction and sales. Prizes are given to the best businesses by age and category.",
					image: "/images/causes/youth-entrepreneurship/marketplace.jpg",
					imageCaption: "Children's Business Fair event",
				},
				{
					title: "Coaching & Training",
					description:
						"In 2019, the Singal Foundation hosted pre-fair workshops where budding entrepreneurs were taught communication skills and sales techniques. Topics included sales, marketing, booth presentation, product packaging, pricing, and sales pitch strategy.",
					image: "/images/causes/youth-entrepreneurship/coaching.jpg",
					imageCaption: "Training workshops for young entrepreneurs",
				},
			],
			outcome:
				"90+ young entrepreneurs participated in 2018 and 2019. Product ideas included hand-made jewelry, bath bombs, re-imagined stuffed animals, recipe cards, neck ties, face painting, knitting lessons, specialty lemonade and much more.",
			outcomeImage: "/images/causes/youth-entrepreneurship/outcome.jpg",
			outcomeStats: [
				{ value: 90, suffix: "+", label: "Young Entrepreneurs" },
				{ value: 2, label: "Years as Premier Sponsor" },
			],
		},
	],
	"medical-relief": [
		{
			id: "seal-ashram-hospital",
			title: "SEAL Ashram Hospital",
			tagline:
				"We can save lives by delivering healthcare services to those in need.",
			color: "#6890b7",
			heroImage: "/images/causes/medical-relief/hero.jpg",
			partner: "SEAL Ashram",
			location: "Mumbai, India",
			year: "2019-2020",
			grantAmount: 55000,
			overview:
				"The Singal Foundation donated $55,000 to SEAL Ashram in Mumbai India, for the construction of a much needed hospital for the destitute. SEAL Ashram is a non-profit organization that rescues needy and helpless people from the streets and railway stations of Mumbai. It provides those rescued with food, clothing, shelter, healthcare and education.",
			issueStats: [
				{ value: 1, label: "doctor per 10,189 patients in India" },
				{ value: 1, label: "doctor per 75,000 patients in rural India" },
				{ value: 1, label: "hospital bed per 2,046 patients" },
				{ value: 1, label: "state hospital per 90,343 patients" },
				{ value: 20, suffix: "%", label: "of rural doctors unqualified" },
				{ value: 2, label: "children under 5 die every minute" },
			],
			approach: [
				{
					title: "Free Medical Treatment",
					description:
						"Patients with infectious diseases like tuberculosis or HIV are sometimes refused treatment in Indian hospitals where staff are frightened of infection. SEAL Ashram is building a hospital to provide free treatment to anyone unable to afford care, especially those with HIV/AIDS, tuberculosis and chronic illness.",
					image: "/images/causes/medical-relief/medical-treatment.jpg",
					imageCaption: "A man rescued from the streets receives medical treatment at SEAL Ashram",
				},
				{
					title: "Safe Housing",
					description:
						"Today, SEAL is a shelter home for over 265 people. Once the hospital is completed, women and girls will move to the new facility to create room for more residents. The hospital will accommodate around 200 patients.",
					image: "/images/causes/medical-relief/safe-housing.jpg",
					imageCaption: "A man being rescued from the streets of India by the SEAL Ashram team",
				},
			],
			outcome:
				"As of December 2020, the Singal Foundation has donated $55,000 towards the development of this hospital. The construction is still underway.",
			outcomeImage: "/images/causes/medical-relief/outcome.jpg",
			outcomeStats: [
				{ value: 265, label: "Current Residents" },
				{ value: 200, label: "Hospital Capacity" },
				{ value: 55000, prefix: "$", label: "Donated" },
			],
		},
	],
};

interface CaseStudyData {
	id: string;
	title: string;
	tagline: string;
	color: string;
	heroImage: string;
	partner: string;
	location: string;
	year: string;
	grantAmount: number;
	overview: string;
	issueStats: { value: number; prefix?: string; suffix?: string; label: string }[];
	approach: { title: string; description: string; image: string; imageCaption: string }[];
	outcome: string;
	outcomeImage: string;
	outcomeStats: { value: number; prefix?: string; suffix?: string; label: string }[];
}

interface CaseStudyProps {
	categoryId: string;
	selectedStudyId: string | null;
	onSelectStudy: (id: string) => void;
}

export default function CaseStudy({
	categoryId,
	selectedStudyId,
	onSelectStudy,
}: CaseStudyProps) {
	const studies = caseStudies[categoryId] || [];

	if (studies.length === 0) return null;

	// If there's only one study, auto-select it
	const activeStudy =
		studies.length === 1
			? studies[0]
			: studies.find((s) => s.id === selectedStudyId) || null;

	const locData = activeStudy ? locationData[activeStudy.id] : null;

	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					{/* If multiple studies, show selector */}
					{studies.length > 1 && (
						<div className="mb-12">
							<p className="text-gray-600 text-center mb-4">
								Select a case study to explore:
							</p>
							<div className="flex flex-wrap justify-center gap-3">
								{studies.map((study) => (
									<button
										key={study.id}
										onClick={() => onSelectStudy(study.id)}
										className={`px-5 py-2.5 rounded-full font-medium transition-all ${
											selectedStudyId === study.id
												? "text-white shadow-lg"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}
										style={{
											backgroundColor:
												selectedStudyId === study.id ? study.color : undefined,
										}}
									>
										{study.title}
									</button>
								))}
							</div>
						</div>
					)}

					{/* Case Study Content */}
					{activeStudy && (
						<div className="scroll-mt-24">
							{/* Hero Header - New Design */}
							<div className="relative rounded-3xl overflow-hidden mb-12">
								{/* Background Image */}
								<div className="absolute inset-0">
									<Image
										src={activeStudy.heroImage}
										alt={activeStudy.title}
										fill
										className="object-cover"
									/>
									<div
										className="absolute inset-0"
										style={{
											background: `linear-gradient(135deg, ${activeStudy.color}dd 0%, ${activeStudy.color}99 50%, transparent 100%)`,
										}}
									/>
								</div>

								{/* Content */}
								<div className="relative z-10 p-8 md:p-12 lg:p-16">
									<div className="max-w-2xl">
										{/* Partner badge */}
										<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm mb-4">
											<span>{activeStudy.partner}</span>
										</div>

										{/* Title */}
										<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
											{activeStudy.title}
										</h2>

										{/* Meta info */}
										<div className="flex flex-wrap gap-4 text-white/80 text-sm mb-6">
											<span className="flex items-center gap-1.5">
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>
												{activeStudy.location}
											</span>
											<span className="flex items-center gap-1.5">
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
												</svg>
												{activeStudy.year}
											</span>
											{activeStudy.grantAmount > 0 && (
												<span className="flex items-center gap-1.5">
													<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													${activeStudy.grantAmount.toLocaleString()} Granted
												</span>
											)}
										</div>

										{/* Tagline */}
										<p className="text-xl text-white/90 font-medium leading-relaxed">
											&ldquo;{activeStudy.tagline}&rdquo;
										</p>
									</div>
								</div>
							</div>

							{/* Overview Section */}
							<div className="mb-16">
								<p className="text-gray-700 text-lg leading-relaxed">
									{activeStudy.overview}
								</p>
							</div>

							{/* The Issue - Stats Grid */}
							<div className="mb-16">
								<h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
									The Issue
								</h3>
								<p className="text-gray-500 text-center mb-8">
									Understanding the challenge we&apos;re addressing
								</p>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
									{activeStudy.issueStats.map((stat, i) => (
										<div
											key={i}
											className="bg-gray-50 rounded-xl p-5 text-center hover:shadow-md transition-shadow"
										>
											<div className="flex items-baseline justify-center gap-0.5">
												{stat.prefix && (
													<span className="text-2xl md:text-3xl font-bold text-gray-900">
														{stat.prefix}
													</span>
												)}
												<NumberTicker
													value={stat.value}
													className="text-2xl md:text-3xl font-bold text-gray-900"
												/>
												{stat.suffix && (
													<span className="text-xl md:text-2xl font-bold text-gray-900">
														{stat.suffix}
													</span>
												)}
											</div>
											<p className="text-gray-600 text-sm mt-2">{stat.label}</p>
										</div>
									))}
								</div>
							</div>

							{/* Where We Work - Map */}
							<div className="mb-16">
								<h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
									Where We Work
								</h3>
								<p className="text-gray-500 text-center mb-8">
									{activeStudy.location}
								</p>
								<div
									className="rounded-3xl overflow-hidden"
									style={{ backgroundColor: `${activeStudy.color}08` }}
								>
									<div className="p-6 md:p-8">
										<div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-900">
											<DottedMap
												markers={(locData?.markers || []).map(m => ({ ...m, size: 1.5 }))}
												markerColor={activeStudy.color}
												dotRadius={0.4}
												className="w-full h-full"
											/>
											{/* Region label overlay */}
											<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
												<p className="text-sm font-medium text-gray-900">
													{locData?.region || activeStudy.location}
												</p>
												<p className="text-xs text-gray-500">
													{locData?.markers.length === 1
														? "1 project location"
														: `${locData?.markers.length || 0} project locations`}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* The Approach - Alternating Layout with Images */}
							<div className="mb-16">
								<h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
									Our Approach
								</h3>
								<p className="text-gray-500 text-center mb-10">
									How we&apos;re making a difference
								</p>
								<div className="space-y-12">
									{activeStudy.approach.map((item, i) => (
										<div
											key={i}
											className={`flex flex-col ${
												i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
											} gap-8 items-center`}
										>
											{/* Image */}
											<div className="w-full lg:w-1/2">
												<div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
													<Image
														src={item.image}
														alt={item.title}
														fill
														className="object-cover transition-transform duration-500 group-hover:scale-105"
													/>
													{/* Caption overlay */}
													<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
														<p className="text-white/90 text-sm">
															{item.imageCaption}
														</p>
													</div>
												</div>
											</div>

											{/* Content */}
											<div className="w-full lg:w-1/2">
												<div className="flex items-start gap-4">
													<div
														className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
														style={{ backgroundColor: activeStudy.color }}
													>
														{i + 1}
													</div>
													<div>
														<h4 className="font-bold text-gray-900 text-xl mb-3">
															{item.title}
														</h4>
														<p className="text-gray-600 leading-relaxed">
															{item.description}
														</p>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* The Outcome - Full width with background image */}
							<div className="relative rounded-3xl overflow-hidden">
								{/* Background */}
								<div className="absolute inset-0">
									<Image
										src={activeStudy.outcomeImage}
										alt="Outcome"
										fill
										className="object-cover"
									/>
									<div
										className="absolute inset-0"
										style={{
											background: `linear-gradient(135deg, ${activeStudy.color}ee 0%, ${activeStudy.color}cc 100%)`,
										}}
									/>
								</div>

								{/* Content */}
								<div className="relative z-10 p-8 md:p-12 lg:p-16">
									<h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
										The Outcome
									</h3>
									<p className="text-white/90 text-lg md:text-xl text-center max-w-3xl mx-auto mb-10">
										{activeStudy.outcome}
									</p>

									{/* Outcome Stats */}
									<div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
										{activeStudy.outcomeStats.map((stat, i) => (
											<div
												key={i}
												className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 text-center"
											>
												<div className="flex items-baseline justify-center gap-0.5">
													{stat.prefix && (
														<span className="text-2xl md:text-3xl font-bold text-white">
															{stat.prefix}
														</span>
													)}
													<NumberTicker
														value={stat.value}
														className="text-2xl md:text-3xl font-bold text-white"
													/>
													{stat.suffix && (
														<span className="text-xl md:text-2xl font-bold text-white">
															{stat.suffix}
														</span>
													)}
												</div>
												<p className="text-white/80 text-sm mt-2">{stat.label}</p>
											</div>
										))}
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
