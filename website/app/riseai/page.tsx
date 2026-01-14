import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
	AlertTriangle,
	BadgeCheck,
	Clock,
	Globe,
	LineChart,
	LucideIcon,
	Rocket,
	ShieldAlert,
	Sparkles,
	Target,
	TrendingUp,
	Users,
	Wallet,
	PlayCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShineBorder } from "@/components/ui/shine-border";

export const metadata: Metadata = {
	title: "RiseAI | Singal Foundation",
	description:
		"RiseAI is the Singal Foundation initiative training 10,000 kids to partner with AI through execution, creation, and real outcomes.",
};

type Stat = {
	value: number;
	label: string;
	prefix?: string;
	suffix?: string;
};

type Feature = {
	title: string;
	description: string;
	icon: LucideIcon;
};

type Belt = {
	title: string;
	subtitle: string;
	description: string;
	color: string;
};

type Metric = {
	value: number;
	suffix: string;
	label: string;
	icon: LucideIcon;
};

const heroStats: Stat[] = [
	{ value: 10000, label: "Students by 2026" },
	{ value: 8, label: "Belt Certifications" },
	{ value: 100, label: "Per Child/Year", prefix: "$" },
];

const standAgainst: Feature[] = [
	{
		title: "Theoretical Fluff",
		description:
			"\"Learn about AI.\" Vocabulary lessons. PowerPoint presentations. No real applications. No tangible outcomes. Just concepts that evaporate the moment the lesson ends.",
		icon: AlertTriangle,
	},
	{
		title: "Fear-Based Training",
		description:
			"\"AI is coming for your job, so you better learn to code.\" Scare tactics that position AI as an enemy to defend against, not a partner to collaborate with.",
		icon: ShieldAlert,
	},
];

const standFor: Feature[] = [
	{
		title: "Learning by Doing",
		description:
			"Students don’t watch lectures. They build. Every lesson ends with a tangible output. Every skill is proven through creation.",
		icon: Rocket,
	},
	{
		title: "Daily AI Partnership",
		description:
			"AI isn’t a subject. It’s a collaborator. Students use AI tools the same way professionals do: to multiply their ideas, execute faster, and create more.",
		icon: Sparkles,
	},
	{
		title: "Mastery-Based Progression",
		description:
			"No age limits. No grade levels. Students advance by demonstrating mastery through completed projects. A 12-year-old can reach Black Belt if they do the work.",
		icon: Target,
	},
	{
		title: "Portfolio Over Grades",
		description:
			"By the end, students have 8+ published, launched, or revenue-generating projects. That’s not a resume line. That’s proof of capability that opens doors.",
		icon: BadgeCheck,
	},
];

const belts: Belt[] = [
	{
		title: "White Belt",
		subtitle: "The Writer",
		description:
			"Publish a 20+ page book on Amazon with ISBN using AI-assisted content creation.",
		color: "#f5f5f5",
	},
	{
		title: "Yellow Belt",
		subtitle: "The Presenter",
		description:
			"Deliver a professional 5-10 minute presentation with research and scripting.",
		color: "#f8d264",
	},
	{
		title: "Orange Belt",
		subtitle: "Media Creator",
		description:
			"Release a 3-song EP or produce a 5-10 minute documentary on YouTube.",
		color: "#f97316",
	},
	{
		title: "Green Belt",
		subtitle: "Web Builder",
		description:
			"Launch a live website with custom domain and professional design.",
		color: "#22c55e",
	},
	{
		title: "Blue Belt",
		subtitle: "The Developer",
		description:
			"Build a working web/mobile app or playable video game with AI.",
		color: "#3b82f6",
	},
	{
		title: "Red Belt",
		subtitle: "Automation Expert",
		description:
			"Create automation saving 10+ hours/month or build a functional AI agent.",
		color: "#ef4444",
	},
	{
		title: "Brown Belt",
		subtitle: "Product Designer",
		description:
			"Launch an online store and achieve 10+ real sales from real customers.",
		color: "#8b5e3c",
	},
	{
		title: "Black Belt",
		subtitle: "The Entrepreneur",
		description:
			"Run a business generating $500+ revenue with a complete portfolio.",
		color: "#111827",
	},
];

const urgencyStats = [
	{ value: 100, suffix: "%", label: "China AI education mandated for all students in 2025" },
	{ value: 18, suffix: "%", label: "schools worldwide with AI guidance policies" },
	{ value: 12, suffix: "%", label: "workforce tasks already completed by AI today" },
];

const whoWeServePoints: Feature[] = [
	{
		title: "Global Access",
		description: "Fully online, accessible anywhere. No elite schools required. No expensive tutors.",
		icon: Globe,
	},
	{
		title: "Self-Paced",
		description: "Progress based on what you create, not your age or background.",
		icon: Clock,
	},
	{
		title: "Self-Sufficiency",
		description: "We teach kids to create opportunities, not wait for them.",
		icon: Sparkles,
	},
	{
		title: "Direct to Families",
		description: "No bureaucracy. Parents can enroll children directly.",
		icon: Users,
	},
];

const selfSustainingPoints: Feature[] = [
	{
		title: "Sell to Those Who Can Pay",
		description:
			"Same curriculum sold at modest pricing to families who can afford it. Same education, different funding model.",
		icon: Wallet,
	},
	{
		title: "Revenue Funds Scholarships",
		description: "Every dollar from paid students funds scholarships for kids who can’t afford it.",
		icon: BadgeCheck,
	},
	{
		title: "Growth Fuels Growth",
		description: "More families paying creates an ever-expanding scholarship fund.",
		icon: TrendingUp,
	},
	{
		title: "Entrepreneurial Model",
		description: "A business model that funds social impact. Sustainable. Scalable.",
		icon: LineChart,
	},
];

const founderStats: Stat[] = [
	{ value: 25, label: "Years Experience" },
	{ value: 250000, label: "Students Trained", suffix: "+" },
	{ value: 150, label: "Revenue Generated", prefix: "$", suffix: "M+" },
];

const successMetrics: Metric[] = [
	{
		value: 40,
		suffix: "%+",
		label: "Completion rate (industry standard is 5-10%)",
		icon: Target,
	},
	{
		value: 8,
		suffix: "+",
		label: "Portfolio pieces with real published projects",
		icon: Rocket,
	},
	{
		value: 100,
		suffix: "%",
		label: "Real outcomes tracked post-program",
		icon: BadgeCheck,
	},
	{
		value: 4,
		suffix: "x",
		label: "Quarterly reports with full transparency",
		icon: LineChart,
	},
];

const visionTimeline = [
	{
		year: "2026",
		students: "10K",
		description: "Pilot validated, portfolio outcomes documented",
	},
	{
		year: "2027-28",
		students: "100K",
		description: "International partnerships, 5+ languages",
	},
	{
		year: "2029-30",
		students: "1M",
		description: "Global standard for practical AI education",
	},
];

const fundraisingBreakdown = [
	{ label: "Secured", value: 400000, description: "Founder & Corporate Commitments" },
	{ label: "In Progress", value: 200000, description: "Community Partnerships" },
	{ label: "Needed", value: 400000, description: "Corporate Partners" },
];

const allocation = [
	{ label: "Content & Curriculum", amount: "$450K", percent: "45%" },
	{ label: "Core Team", amount: "$375K", percent: "37.5%" },
	{ label: "Platform & Tech", amount: "$100K", percent: "10%" },
	{ label: "Pilot & Launch", amount: "$75K", percent: "7.5%" },
];

export default function RiseAIPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="py-16 md:py-20">
				<div className="container mx-auto px-4">
					<div className="bg-[#1a1f36] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
						<ShineBorder
							borderWidth={2}
							shineColor={["#f8d264", "#8B5CF6", "#f8b864"]}
						/>
						<div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
							<div>
								<span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#f8d264]">
									<AnimatedGradientText colorFrom="#f8d264" colorTo="#8B5CF6" speed={1.5}>
										A Singal Foundation Initiative
									</AnimatedGradientText>
								</span>
								<h1 className="text-4xl md:text-5xl font-bold mt-4">
									Rise<span className="text-[#f8d264]">AI</span>
								</h1>
								<p className="text-xl md:text-2xl font-semibold text-white/90 mt-3">
									The Next Evolution of Education
								</p>
								<p className="text-white/80 mt-4 leading-relaxed">
									We&apos;re not teaching kids about AI. We&apos;re teaching them to partner with AI to solve bigger problems, multiply their ideas, and build the future they want to see.
								</p>
								<div className="flex flex-wrap gap-6 mt-6">
									{heroStats.map((stat) => (
										<div key={stat.label}>
											<div className="flex items-baseline gap-1">
												{stat.prefix && (
													<span className="text-2xl font-bold text-[#f8d264]">
														{stat.prefix}
													</span>
												)}
												<NumberTicker
													value={stat.value}
													className="text-2xl font-bold text-[#f8d264] font-mono"
												/>
												{stat.suffix && (
													<span className="text-2xl font-bold text-[#f8d264]">
														{stat.suffix}
													</span>
												)}
											</div>
											<p className="text-sm text-white/70">{stat.label}</p>
										</div>
									))}
								</div>
								<div className="mt-8">
									<Button
										asChild
										className="bg-[#f8d264] hover:bg-[#f8b864] text-gray-900 font-semibold rounded-full"
									>
										<Link href="/donate">Support RiseAI</Link>
									</Button>
								</div>
							</div>
							<div className="rounded-2xl overflow-hidden bg-[#f8d264]">
								<video
									src="/images/riseaiheader.mp4"
									autoPlay
									loop
									muted
									playsInline
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-5xl text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Turn AI Anxiety into the Greatest Opportunity
					</h2>
					<p className="text-gray-700 mt-4 leading-relaxed">
						We believe the exact opposite of fear. AI isn&apos;t the threat. It&apos;s the tool. And the children who learn to partner with AI today will be the ones who define what&apos;s possible tomorrow.
					</p>
					<p className="text-gray-700 mt-4 leading-relaxed">
						For too long, the conversation around AI and children has been dominated by fear. Fear that AI will take their jobs. Fear that they&apos;ll be left behind. Fear that the future belongs to machines, not humans.
					</p>
					<p className="text-gray-700 mt-4 leading-relaxed">
						They won&apos;t compete with AI. They&apos;ll use AI to do things no generation before them could even imagine.
					</p>
					<p className="text-gray-700 mt-4 leading-relaxed">
						RiseAI exists to make that future real for 10,000 children who need it most. Not through theory. Not through fear. Through execution, creation, and tangible proof.
					</p>
					<div className="mt-10">
						<div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-gray-200">
							<Image
								src="/images/students-learning.png"
								alt="Students learning with AI"
								fill
								className="object-cover"
								sizes="(min-width: 1024px) 768px, 100vw"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="bg-gray-50 rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
							What We Stand Against
						</h2>
						<p className="text-gray-600 text-center mt-3">
							Fluff &amp; Fear-Based Education
						</p>
						<div className="grid md:grid-cols-2 gap-6 mt-10">
							{standAgainst.map((item) => {
								const Icon = item.icon;
								return (
									<div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
										<div className="flex items-start gap-4">
										<div className="h-10 w-10 rounded-full bg-white border border-[#1a1f36]/10 flex items-center justify-center shrink-0">
											<Icon className="h-5 w-5 text-[#1a1f36]" />
										</div>

											<div>
												<h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
												<p className="text-gray-600 leading-relaxed">{item.description}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
						What We Stand For
					</h2>
					<p className="text-gray-600 text-center mt-3">
						Execution &amp; Creation
					</p>
					<p className="text-gray-700 mt-6 text-center max-w-3xl mx-auto">
						Every child who completes RiseAI walks away with something no classroom can give them: a professional portfolio of real projects that demonstrate real capability.
					</p>
					<div className="grid md:grid-cols-2 gap-6 mt-10">
						{standFor.map((item) => {
							const Icon = item.icon;
							return (
								<div key={item.title} className="rounded-2xl border border-gray-200 p-6">
									<div className="flex items-start gap-4">
										<div className="h-10 w-10 rounded-full bg-white border border-[#f8d264]/50 flex items-center justify-center shrink-0">
											<Icon className="h-5 w-5 text-[#1a1f36]" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
											<p className="text-gray-600 leading-relaxed">{item.description}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="bg-gray-50 rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
							The 8-Belt System
						</h2>
						<p className="text-gray-600 text-center mt-3">
							From First Project to First Business
						</p>
						<p className="text-gray-700 mt-6 text-center max-w-3xl mx-auto">
							Inspired by martial arts, each belt requires completing a real-world project that demonstrates mastery. No tests. No essays. Just execution.
						</p>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
							{belts.map((belt) => {
								const isDark = ["Blue Belt", "Red Belt", "Brown Belt", "Black Belt"].includes(
									belt.title
								);
								const cardStyle = {
									backgroundColor: belt.title === "White Belt" ? "#ffffff" : belt.color,
									borderColor: belt.title === "White Belt" ? "#1a1f36" : belt.color,
								};
								const beltIconColor = belt.title === "White Belt" ? "#111827" : belt.color;
								const beltMaskStyle = {
									backgroundColor: beltIconColor,
									WebkitMaskImage: "url('/images/karate-belt.svg')",
									maskImage: "url('/images/karate-belt.svg')",
									WebkitMaskRepeat: "no-repeat",
									maskRepeat: "no-repeat",
									WebkitMaskSize: "contain",
									maskSize: "contain",
									WebkitMaskPosition: "center",
									maskPosition: "center",
								};

								return (
									<div
										key={belt.title}
										className="relative rounded-2xl border-2 p-6 shadow-sm"
										style={cardStyle}
									>
										<div
											className="absolute -top-4 right-6 h-12 w-12 rounded-full bg-white border-2 flex items-center justify-center"
											style={{ borderColor: belt.color }}
										>
											<div className="h-6 w-8" style={beltMaskStyle} />
										</div>
										<p
											className={`text-sm font-semibold uppercase tracking-wide ${
												isDark ? "text-white" : "text-gray-900"
											}`}
										>
											{belt.title}
										</p>
										<h3
											className={`text-lg font-bold mt-1 ${
												isDark ? "text-white/90" : "text-gray-800"
											}`}
										>
											{belt.subtitle}
										</h3>
										<p
											className={`mt-3 leading-relaxed text-sm ${
												isDark ? "text-white/80" : "text-gray-700"
											}`}
										>
											{belt.description}
										</p>
									</div>
								);
							})}
						</div>
						<p className="text-gray-700 mt-8 text-center">

							Every graduate leaves with 8 portfolio pieces: published books, live websites, working apps, revenue-generating businesses. Not hypotheticals. Proof.
						</p>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
						The World is Moving. Kids Are Being Left Behind.
					</h2>
					<p className="text-gray-700 mt-6 text-center max-w-4xl mx-auto">
						In 2025, China mandated AI education for every primary and secondary student. They&apos;re training an entire generation to partner with AI before they enter the workforce. Meanwhile, only 18% of schools worldwide have AI guidance policies. The gap isn&apos;t closing. It&apos;s widening. RiseAI exists to close that gap. By empowering individuals.
					</p>
					<div className="grid md:grid-cols-3 gap-6 mt-10">
						{urgencyStats.map((stat) => (
							<div key={stat.label} className="rounded-2xl border border-gray-200 p-6 text-center">
								<div className="flex items-baseline justify-center gap-1">
									<NumberTicker
										value={stat.value}
										className="text-3xl font-bold text-gray-900 font-mono"
									/>
									<span className="text-2xl font-bold text-gray-900">
										{stat.suffix}
									</span>
								</div>
								<p className="text-gray-600 mt-3 text-sm">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="bg-[#f8d264]/15 rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							10,000 Kids Who Deserve Better Than Waiting
						</h2>
					<p className="text-gray-700 mt-4 leading-relaxed">
						RiseAI targets underserved youth around the world: children from low-income households, under-resourced schools, and communities where opportunities are scarce. We&apos;re done waiting. And we&apos;re teaching them to be done waiting too.
					</p>
					<p className="text-gray-700 mt-4 leading-relaxed">
						With AI as their partner, these children can publish books, launch websites, build apps, and start businesses. AI has commoditized the tools of success.
					</p>
					<p className="text-gray-700 mt-4 leading-relaxed">
						Goal: Train 10,000 students by September 2026. Give them the power to control their own destiny.
					</p>
						<div className="grid md:grid-cols-2 gap-6 mt-8">
							{whoWeServePoints.map((point) => {
								const Icon = point.icon;
								return (
									<div key={point.title} className="bg-white rounded-2xl p-6 shadow-sm">
										<div className="flex items-start gap-4">
											<div className="h-10 w-10 rounded-full bg-[#f8d264]/20 flex items-center justify-center">
												<Icon className="h-5 w-5 text-[#1a1f36]" />
											</div>
											<div>
												<h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
												<p className="text-gray-600 mt-2">{point.description}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>

					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
						A Self-Sustaining Model
					</h2>
					<p className="text-gray-600 text-center mt-3">
						Entrepreneurial by Design
					</p>
					<p className="text-gray-700 mt-6 text-center max-w-4xl mx-auto">
						RiseAI isn&apos;t a traditional charity that relies on perpetual donations. We&apos;re building a self-propelling economy for AI education that funds itself. The $1M we raise now launches the engine. After that, the engine runs itself. This reflects what we teach: build something that sustains itself.
					</p>
					<div className="grid md:grid-cols-2 gap-6 mt-10">
						{selfSustainingPoints.map((point) => {
							const Icon = point.icon;
							return (
								<div key={point.title} className="rounded-2xl border border-gray-200 p-6">
									<div className="flex items-start gap-4">
										<div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
											<Icon className="h-5 w-5 text-gray-900" />
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
											<p className="text-gray-600 mt-2">{point.description}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="bg-gray-50 rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
							Built by Operators Who Know How to Scale Impact
						</h2>
					<p className="text-gray-700 mt-6 text-center max-w-4xl mx-auto">
						RiseAI is an initiative of the Singal Foundation, a 501(c)(3) public charity, founded by entrepreneur Anik Singal.
					</p>
					<p className="text-gray-700 mt-4 text-center max-w-4xl mx-auto">
						Anik has 25 years of experience building scaled education companies. He&apos;s trained over 250,000 students globally and generated $150M+ in online education revenue. His track record isn&apos;t in traditional nonprofit management. It&apos;s in building systems that work, scale, and deliver measurable results.
					</p>
					<div className="grid md:grid-cols-3 gap-6 mt-10">
						{founderStats.map((stat) => (
							<div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
								<div className="flex items-baseline justify-center gap-1">
									{stat.prefix && (
										<span className="text-2xl font-bold text-gray-900">
											{stat.prefix}
										</span>
									)}
									<NumberTicker
										value={stat.value}
										className="text-3xl font-bold text-gray-900 font-mono"
									/>
									{stat.suffix && (
										<span className="text-2xl font-bold text-gray-900">
											{stat.suffix}
										</span>
									)}
								</div>
								<p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
							</div>
						))}
					</div>
					<p className="text-gray-700 mt-8 text-center max-w-4xl mx-auto">
						This program is designed like a business: ruthlessly focused on tangible outcomes, cost efficiency, and scalable execution. No fluff. No theories. Just results.
					</p>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-5xl">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Philosophy</h2>
					<p className="text-gray-600 mt-2">From Anik&apos;s TEDx Talk</p>
					<p className="text-gray-700 mt-4 leading-relaxed">
						The foundation of RiseAI: Why entrepreneurship, not charity, is the answer to creating lasting opportunity.
					</p>
					<blockquote className="mt-6 border-l-4 border-[#f8d264] pl-4 text-gray-700 italic">
						Traditional education systems aren&apos;t equipped to teach AI partnership skills. And traditional charity models aren&apos;t built to sustain themselves. So we&apos;re building something new. Something that produces proof, not just participation. Something that funds itself, not just fundraises.
						<span className="block mt-3 font-semibold text-gray-900">— Anik Singal, Founder</span>
					</blockquote>
					<div className="mt-8">
						<div className="flex items-center gap-2 text-gray-600 mb-4">
							<PlayCircle className="h-5 w-5 text-[#1a1f36]" />
							<span className="font-semibold">Watch Anik&apos;s TEDx Talk</span>
						</div>
						<div className="aspect-video overflow-hidden rounded-2xl shadow-lg bg-black">
							<iframe
								src="https://www.youtube.com/embed/ti6S9EUO_UA"
								title="Anik Singal TEDx Talk"
								className="h-full w-full"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="bg-gray-50 rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
							Success Metrics We&apos;re Tracking
						</h2>
						<div className="grid md:grid-cols-4 gap-6 mt-10">
							{successMetrics.map((metric) => {
								const Icon = metric.icon;
								return (
									<div key={metric.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
										<div className="mx-auto mb-4 h-10 w-10 rounded-full bg-[#f8d264]/20 flex items-center justify-center">
											<Icon className="h-5 w-5 text-[#1a1f36]" />
										</div>
										<div className="flex items-baseline justify-center gap-1">
											<NumberTicker
												value={metric.value}
												className="text-3xl font-bold text-gray-900 font-mono"
											/>
											<span className="text-2xl font-bold text-gray-900">
												{metric.suffix}
											</span>
										</div>
										<p className="text-gray-600 mt-3 text-sm">{metric.label}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
						The Vision: 10,000 Kids. Then 100,000. Then the World.
					</h2>
					<p className="text-gray-700 mt-6 text-center max-w-4xl mx-auto">
						This is the blueprint for a new model of education. One that teaches execution, not theory. One that produces portfolios, not transcripts. But first, we need to prove it works. That&apos;s where you come in.
					</p>
					<div className="grid md:grid-cols-3 gap-6 mt-10">
						{visionTimeline.map((step) => (
							<div key={step.year} className="rounded-2xl border border-gray-200 p-6 text-center">
								<p className="text-sm font-semibold text-[#1a1f36]">{step.year}</p>
								<h3 className="text-2xl font-bold text-gray-900 mt-2">{step.students}</h3>
								<p className="text-gray-600 mt-2 text-sm">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="bg-[#1a1f36] text-white rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl md:text-4xl font-bold text-center">
							$1M Campaign — 10,000 Kids. Year 1.
						</h2>
						<p className="text-white/80 mt-4 text-center max-w-3xl mx-auto">
							We&apos;re raising $1 million to launch RiseAI and train 10,000 underserved children. Progress: $600K of $1M (60% funded). This $1M launches the engine. After that, the engine runs itself.
						</p>
						<div className="mt-8 bg-white/10 rounded-full h-3 overflow-hidden">
							<div className="h-full bg-[#f8d264]" style={{ width: "60%" }} />
						</div>
						<div className="grid md:grid-cols-3 gap-6 mt-10">
							{fundraisingBreakdown.map((item) => (
								<div key={item.label} className="rounded-2xl bg-white/10 p-6 text-center">
									<p className="text-sm uppercase tracking-wide text-white/70">{item.label}</p>
									<p className="text-2xl font-bold text-white mt-2">
										${item.value.toLocaleString()}
									</p>
									<p className="text-white/70 text-sm mt-2">{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
						Where Every Dollar Goes
					</h2>
					<p className="text-gray-700 mt-6 text-center max-w-4xl mx-auto">
						Full transparency. Here&apos;s exactly how we deploy the $1M to train 10,000 students.
					</p>
					<div className="grid md:grid-cols-2 gap-6 mt-10">
						{allocation.map((item) => (
							<div key={item.label} className="rounded-2xl border border-gray-200 p-6">
								<div className="flex items-center justify-between">
									<h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
									<span className="text-sm font-semibold text-[#1a1f36]">{item.percent}</span>
								</div>
								<p className="text-gray-600 mt-2">{item.amount}</p>
							</div>
						))}
					</div>
					<p className="text-gray-700 mt-8 text-center">
						$100 cost per child for a full year of professional-grade AI education. That&apos;s not overhead. That&apos;s impact at scale.
					</p>
				</div>
			</section>

			<section className="py-14 md:py-18">
				<div className="container mx-auto px-4 max-w-5xl text-center">
					<div className="bg-[#f8d264] rounded-3xl p-8 md:p-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">Be Part of This Movement</h2>
						<p className="text-gray-800 mt-4 leading-relaxed">
							RiseAI isn&apos;t just an education program. It&apos;s a belief that AI creates opportunity, not scarcity. That children from anywhere can build anything if given the right tools.
						</p>
						<p className="text-gray-800 mt-4 leading-relaxed">
							Support RiseAI with a tax-deductible donation through the Singal Foundation and get a free ticket to UgenticAI Summit — two missions, one transaction.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
							<Button
								asChild
								className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full"
							>
								<Link href="/donate">Donate &amp; Get Free Summit Ticket</Link>
							</Button>
						</div>
						<p className="text-gray-800 mt-6">
							UgenticAI Summit 2026 — September 15-17 at The Ritz-Carlton, Tysons Virginia. The premier AI marketing event of the year.
						</p>
						<p className="text-gray-800 mt-2">Your donation funds youth AI education.</p>
					</div>
				</div>
			</section>


			<Footer />
		</main>
	);
}
