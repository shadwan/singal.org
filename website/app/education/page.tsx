import Hero from "@/components/education/Hero";
import VideoGrid from "@/components/education/VideoGrid";
import Donation from "@/components/home/Donation";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Education - Singal Foundation",
	description:
		"Inspiring children and teens to live empowered lives through financial education. Watch our educational video series on financial literacy and entrepreneurship.",
};

export default function EducationPage() {
	return (
		<main className="min-h-screen bg-white">
			<Hero />
			<VideoGrid />
			<Donation />
			<Footer />
		</main>
	);
}
