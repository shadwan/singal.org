import Hero from "@/components/home/Hero";
import Initiatives from "@/components/home/Initiatives";
import { GlobalImpact } from "@/components/home/GlobalImpact";
import Stories from "@/components/home/Stories";
import Donation from "@/components/home/Donation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Hero />
      <Initiatives />
      <GlobalImpact />
      <Stories />
      <Donation />
      <Footer />
    </main>
  );
}
