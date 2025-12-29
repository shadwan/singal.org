import { notFound } from "next/navigation";
import StoryDetail from "@/components/stories/StoryDetail";
import Footer from "@/components/Footer";

// Story data
const stories: Record<string, StoryData> = {
	joanna: {
		id: "joanna",
		title: "Joanna Lost Everything in the Storm",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		color: "#b28f61",
		heroImage: "/images/stories/joanna.jpg",
		imageCaption:
			"Left to Right: Anik Singal, Andrea Singal, Joanna Peak, Shannon Ingram & Jeremy Bellotti",
		grantAmount: 7000,
		year: 2017,
		content: [
			"Joanna Peak has been a personal trainer for 15 years. She has always been an avid fitness enthusiast and played basketball all through college.",
			"When Hurricane Harvey hit Houston, it wiped out Joanna's entire business. All her training equipment was ruined, the carpets had to be replaced and she needed a completely new paint job.",
			"To make matters worse, this was the THIRD time that her space was ruined by a flood. This time, Joanna wasn't sure if she would recover.",
			"We decided to give Joanna a grant of $7,000 dollars. She was very appreciative with the help she received. It gave her the hope she needed to keep marching forward.",
			"We followed up with her to find out how she was doing. She was so grateful for the generosity of the Singal Foundation & it's partners. With a grant from the Singal Foundation and others in the community, Joanna was able to replace all of her equipment, and was up and running again within 6 weeks of the flood.",
		],
		stats: [
			{ label: "Grant Amount", value: "$7,000" },
			{ label: "Recovery Time", value: "6 weeks" },
			{ label: "Years as Trainer", value: "15 years" },
		],
	},
	aditi: {
		id: "aditi",
		title: "Aditi, the Little Dreamer",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		color: "#52a7e4",
		heroImage: "/images/stories/impact-2.jpg",
		imageCaption: "Aditi at the ARC School in Mumbai",
		content: [
			"Aditi came to the ARC School from one of the most disadvantaged communities in Mumbai's slums. Like many children in her community, she had never had the opportunity to dream about her future.",
			"The ARC Schools are giving slum children like Aditi the ability to dream big and see a brighter future for themselves. Through quality early childhood education, these children are building the foundation they need to succeed.",
			"Today, Aditi is one of the brightest students in her class. She loves to learn, and her teachers say she has a natural curiosity that drives her to ask questions and explore new ideas.",
			"With the support of the Singal Foundation, Aditi and children like her are proving that with the right opportunities, any child can achieve their dreams.",
		],
		stats: [
			{ label: "School", value: "ARC Schools" },
			{ label: "Location", value: "Mumbai Slums" },
		],
	},
	caroline: {
		id: "caroline",
		title: "A Small Kiosk is Sending Kids to School",
		category: "entrepreneurship",
		categoryLabel: "Entrepreneurship",
		location: "Sabwani Marinda, East Africa",
		color: "#194f75",
		heroImage: "/images/stories/caroline.jpg",
		imageCaption: "Caroline, Monica, and Lomeyen at their produce stand",
		content: [
			"Caroline Simuyu, Monica Sitienei, and Lomeyen Kerio run a small produce stand together at the edge of the main road through their village. They sell flour, donuts, dried fish, seasoning, and dish soap.",
			"With their Village Enterprise grant funded by the Singal Foundation, these three women have transformed their lives and their families. They also care for sheep and bought a cow with their profits.",
			'Monica, a single parent to six children, says "I\'m a single parent to my six children, but feel as though I have a husband because I\'m earning money. I identify my business as my husband."',
			'"I used to depend on my husband, which caused so much conflict," Caroline explains. "But now I have my own source of money. I can even put my children in private school."',
			"The business has created peace in their homes. The conflict that used to exist has subsided now that they have their own income and independence.",
		],
		quote: {
			text: "I used to depend on my husband, which caused so much conflict. But now I have my own source of money. I can even put my children in private school.",
			author: "Caroline Simuyu",
		},
		stats: [
			{ label: "Business Owners", value: "3 women" },
			{ label: "Partner", value: "Village Enterprise" },
		],
	},
	claudia: {
		id: "claudia",
		title: "Stronger Than the Storm",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		color: "#b28f61",
		heroImage: "/images/stories/claudia.jpg",
		imageCaption: "Claudia with her handcrafted handbag collection",
		grantAmount: 5000,
		content: [
			"Claudia runs ClaudiaG Collection, creating handcrafted handbags and fashion accessories. When Hurricane Harvey hit Houston, she was trapped with water rising to her waist and had to be rescued by helicopter.",
			"She lost everything - her home, her entire inventory, and her livelihood. The devastation was complete.",
			"The Singal Foundation, connected through the Chamber of Commerce, provided Claudia with a $5,000 grant. She used it to buy inventory for an immediate kickstart to her business.",
			"Today, Claudia is back on her feet and thriving, stronger and better than ever before. She now focuses on helping other entrepreneurs through hard times, paying forward the support she received.",
		],
		quote: {
			text: "Stronger and better than ever before.",
			author: "Claudia",
		},
		stats: [
			{ label: "Grant Amount", value: "$5,000" },
			{ label: "Business", value: "ClaudiaG Collection" },
		],
	},
	farming: {
		id: "farming",
		title: "A Pig Farming Success Story",
		category: "entrepreneurship",
		categoryLabel: "Entrepreneurship",
		location: "Sabwani Marinda, East Africa",
		color: "#194f75",
		heroImage: "/images/stories/farming.jpg",
		imageCaption: "Florence Jeptekei and her pigs",
		content: [
			"Florence Jeptekei, Beatrice Tengan, and Richard Simatwa own a piggery together. They used their Village Enterprise grant funded by the Singal Foundation to begin a small garden, where they raised tomatoes and greens.",
			"They sold the produce and used their savings to purchase the profitable pigs. When asked how their lives have changed since they started the business, they instantly begin sharing various examples.",
			"Richard mentioned that he is now able to pay for school fees and uniforms so that his children can go to school. He also saved enough money to pay for his son's wedding.",
			'"We used to be weak and tired," Florence explains, "and now we have energy."',
			"When everyone at home is able to eat enough, tensions cease and people are able to focus on other things. This transformation is one of the most important because it enables people to build their businesses rather than worry about where to find their next meal.",
			"These tangible transformations are common amongst the business groups funded by the Singal Foundation in this small village in Northern Kenya.",
		],
		quote: {
			text: "We used to be weak and tired, and now we have energy.",
			author: "Florence Jeptekei",
		},
		stats: [
			{ label: "Business Type", value: "Piggery" },
			{ label: "Business Owners", value: "3 partners" },
			{ label: "Partner", value: "Village Enterprise" },
		],
	},
	ayush: {
		id: "ayush",
		title: "Ayush Beat the Odds",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		color: "#52a7e4",
		heroImage: "/images/stories/ayush.jpg",
		imageCaption: "Ayush at the ARC School",
		content: [
			"When Ayush first came to the ARC school, he would barely talk to anyone. The ARC schools serve children from disadvantaged groups living in the slum community of India.",
			"The teachers tried their very best to communicate with him but he refused to talk. It took the teachers a while to realize he had a speech disorder.",
			"The teachers decided not to give up on him and did their very best. They diligently communicated with him daily and got him to eventually open up to them.",
			"By the end of the first year, he was able to fluently recite the alphabet. At the end of the second year, he could read his textbooks. Even though he still struggles to communicate as clearly as the other kids, the teachers say his ability to grasp a subject matter far exceeds those of the other students.",
			"He is a very energetic child and is extraordinarily talented at drawing. Ayush dreams of becoming a civil engineer when he grows up. The teachers have no doubt that he will be successful at whatever he chooses to do.",
		],
		stats: [
			{ label: "School", value: "ARC Schools" },
			{ label: "Dream Career", value: "Civil Engineer" },
			{ label: "Special Talent", value: "Drawing" },
		],
	},
	elizabeth: {
		id: "elizabeth",
		title: "From Casual Worker to Business Owner",
		category: "entrepreneurship",
		categoryLabel: "Entrepreneurship",
		location: "Sabwani Marinda, East Africa",
		color: "#194f75",
		heroImage: "/images/stories/elizabeth.jpg",
		imageCaption: "Elizabeth and her soap-making business partners",
		content: [
			"Elizabeth Kamboy, Sally Chirchir, and Janet Najala run a soap-making business together. Before starting their business, Elizabeth used to dig holes and harvest corn for other people just to survive.",
			"Elizabeth attended a workshop at the Women's Empowerment Center where she learned soap making. Initially, the group tried making cakes, but they pivoted to soap which proved more profitable.",
			"The group has earned approximately $1,000 in revenue and plans to invest in a machine for making bar soap. They now supply soaps and detergents to local schools.",
			'"I like my business because it feeds us," Elizabeth says. "It has also built our name in the community."',
			"Their success is part of the Singal Foundation's $25,000 Village Enterprise grant that trained 150 entrepreneurs, started 50 businesses, and transformed approximately 1,000 lives.",
		],
		quote: {
			text: "I like my business because it feeds us. It has also built our name in the community.",
			author: "Elizabeth Kamboy",
		},
		stats: [
			{ label: "Business Type", value: "Soap Making" },
			{ label: "Revenue Earned", value: "~$1,000" },
			{ label: "Partner", value: "Village Enterprise" },
		],
	},
	aarav: {
		id: "aarav",
		title: "Aarav Gets His First Toothbrush",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		color: "#52a7e4",
		heroImage: "/images/stories/impact-8.jpg",
		imageCaption: "Aarav at the ARC School",
		content: [
			"Aarav came from one of the most impoverished families in Mumbai's slum communities. When he arrived at the ARC School, he had never owned a toothbrush - a simple item that most of us take for granted.",
			"The ARC Schools provide more than just education. They provide children with basic necessities, health education, and the tools they need to build healthy habits.",
			"For Aarav, receiving his first toothbrush was more than just getting a hygiene product. It was a symbol of care, of being seen, and of having access to opportunities he never had before.",
			"Today, Aarav is thriving at school. He has learned proper hygiene habits, is excelling in his studies, and is dreaming of a future that once seemed impossible.",
		],
		stats: [
			{ label: "School", value: "ARC Schools" },
			{ label: "Program", value: "Health & Hygiene" },
		],
	},
	roshni: {
		id: "roshni",
		title: "The Girl Who Pleaded to Go to School",
		category: "education",
		categoryLabel: "Education",
		location: "Mumbai, India",
		color: "#52a7e4",
		heroImage: "/images/stories/impact-9.jpg",
		imageCaption: "Roshni, the most creative student in her class",
		content: [
			"Roshni joined the ARC School in 2015 when she was just 3 years old. She quickly became known as the most creative student in her class, with a love for art and crafts. She is happiest when she is dancing.",
			"One day, Roshni accidentally dropped hot milk on herself and suffered minor burns. The doctor recommended she stay home and rest.",
			"By day 3, Roshni was back at school. Her father explained, \"Roshni has been crying at home and insists if we take her to school she will get better.\"",
			"Her determination to attend school, even while injured, shows the profound impact that education has on these children. School is not just a place to learn - it's a place where they feel valued and see possibilities for their future.",
			"Roshni dreams of becoming a doctor when she grows up. The ARC School has given her the ability to dream big and believe nothing is impossible.",
		],
		quote: {
			text: "Roshni has been crying at home and insists if we take her to school she will get better.",
			author: "Roshni's Father",
		},
		stats: [
			{ label: "School", value: "ARC Schools" },
			{ label: "Dream Career", value: "Doctor" },
			{ label: "Joined", value: "2015 (age 3)" },
		],
	},
	chuck: {
		id: "chuck",
		title: "Keeping the Faith",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		color: "#b28f61",
		heroImage: "/images/stories/impact-10.jpg",
		imageCaption: "Chuck Poteet, small business owner",
		content: [
			"When Hurricane Harvey devastated Houston in 2017, Chuck Poteet's small business was among the many that suffered tremendous damage.",
			"Despite the overwhelming destruction, Chuck never lost faith. He believed that with hard work and the support of his community, he could rebuild.",
			"The Singal Foundation provided Chuck with a grant to help him get back on his feet. The funds helped him replace damaged equipment and inventory.",
			"Chuck's story is a testament to the resilience of small business owners and the power of community support in times of crisis. Today, his business continues to serve the Houston community.",
		],
		stats: [
			{ label: "Event", value: "Hurricane Harvey" },
			{ label: "Year", value: "2017" },
			{ label: "Location", value: "Houston, TX" },
		],
	},
	charles: {
		id: "charles",
		title: "Top Houston Chiropractor Receives Grant",
		category: "disaster-relief",
		categoryLabel: "Disaster Relief",
		location: "Houston, TX",
		color: "#b28f61",
		heroImage: "/images/stories/impact-11.jpg",
		imageCaption: "Charles, Houston Chiropractor",
		content: [
			"Charles had built a successful chiropractic practice in Houston, serving his community's healthcare needs for years. When Hurricane Harvey struck, his practice suffered significant damage.",
			"As a healthcare provider, Charles felt the weight of responsibility to his patients who depended on him. The damage to his practice meant he couldn't serve those who needed his care.",
			"The Singal Foundation recognized Charles's dedication to his community and provided him with a grant to help restore his practice. The funds helped him repair his facility and replace damaged equipment.",
			"Thanks to the support, Charles was able to reopen his doors and continue providing essential chiropractic care to the Houston community. His story highlights the far-reaching impact of supporting small businesses - when we help business owners, we help entire communities.",
		],
		stats: [
			{ label: "Profession", value: "Chiropractor" },
			{ label: "Event", value: "Hurricane Harvey" },
			{ label: "Year", value: "2017" },
		],
	},
};

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

// Generate static params for all stories
export function generateStaticParams() {
	return Object.keys(stories).map((id) => ({ id }));
}

// Generate metadata for each story
export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
	return params.then(({ id }) => {
		const story = stories[id];
		if (!story) {
			return { title: "Story Not Found" };
		}
		return {
			title: `${story.title} - Singal Foundation`,
			description: story.content[0],
		};
	});
}

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const story = stories[id];

	if (!story) {
		notFound();
	}

	// Get related stories (same category, excluding current)
	const relatedStories = Object.values(stories)
		.filter((s) => s.category === story.category && s.id !== story.id)
		.slice(0, 3);

	// If not enough related stories from same category, add from other categories
	if (relatedStories.length < 3) {
		const otherStories = Object.values(stories)
			.filter((s) => s.id !== story.id && !relatedStories.includes(s))
			.slice(0, 3 - relatedStories.length);
		relatedStories.push(...otherStories);
	}

	return (
		<main className="min-h-screen bg-white">
			<StoryDetail story={story} relatedStories={relatedStories} />
			<Footer />
		</main>
	);
}
