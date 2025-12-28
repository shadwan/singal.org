import Hero from "@/components/causes/Hero";
import CausesList from "@/components/causes/CausesList";
import Footer from "@/components/Footer";

export default function CausesPage() {
	return (
		<main className="min-h-screen bg-white">
			<Hero />
			<CausesList />
			<Footer />
		</main>
	);
}
