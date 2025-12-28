import Hero from "@/components/about/Hero";
import Initiatives from "@/components/about/Initiatives";
import { GlobalImpact } from "@/components/home/GlobalImpact";
import Stories from "@/components/home/Stories";
import Footer from "@/components/Footer";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-white">
			<Hero />
			<Initiatives />
			<GlobalImpact />
			<Stories />
			<Footer />
		</main>
	);
}
