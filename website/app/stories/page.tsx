import Hero from "@/components/stories/Hero";
import StoriesGrid from "@/components/stories/StoriesGrid";
import Donation from "@/components/home/Donation";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Stories - Singal Foundation",
	description:
		"Read inspiring stories of lives transformed through the Singal Foundation's initiatives in education, entrepreneurship, and disaster relief.",
};

export default function StoriesPage() {
	return (
		<main className="min-h-screen bg-white">
			<Hero />
			<StoriesGrid />
			<Donation />
			<Footer />
		</main>
	);
}
