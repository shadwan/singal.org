"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Hero from "@/components/causes/Hero";
import CaseStudy from "@/components/causes/CaseStudy";
import Footer from "@/components/Footer";

// Default study for each category
const defaultStudies: Record<string, string> = {
	"education": "arc-schools",
	"shelter-homes": "compassion-asia",
	"entrepreneurship": "village-enterprise",
	"disaster-relief": "hurricane-harvey",
	"youth-entrepreneurship": "childrens-business-fair",
	"medical-relief": "seal-ashram-hospital",
};

function CausesContent() {
	const searchParams = useSearchParams();
	const router = useRouter();
	
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

	// Handle URL params on mount and changes
	useEffect(() => {
		const category = searchParams.get("category");
		const study = searchParams.get("study");
		
		if (category) {
			setSelectedCategory(category);
			setSelectedStudy(study || defaultStudies[category] || null);
		}
	}, [searchParams]);

	const handleSelectCategory = (categoryId: string) => {
		setSelectedCategory(categoryId);
		setSelectedStudy(defaultStudies[categoryId] || null);
		
		// Update URL
		router.push(`/causes?category=${categoryId}`, { scroll: false });
		
		// Scroll to case study section
		setTimeout(() => {
			document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	};

	const handleSelectStudy = (studyId: string) => {
		setSelectedStudy(studyId);
		
		// Update URL
		if (selectedCategory) {
			router.push(`/causes?category=${selectedCategory}&study=${studyId}`, { scroll: false });
		}
	};

	return (
		<>
			<Hero 
				selectedCategory={selectedCategory} 
				onSelectCategory={handleSelectCategory} 
			/>
			
			{selectedCategory && (
				<div id="case-study">
					<CaseStudy
						categoryId={selectedCategory}
						selectedStudyId={selectedStudy}
						onSelectStudy={handleSelectStudy}
					/>
				</div>
			)}
			
			<Footer />
		</>
	);
}

export default function CausesPage() {
	return (
		<main className="min-h-screen bg-white">
			<Suspense fallback={
				<div className="py-12 text-center">
					<div className="animate-pulse">Loading...</div>
				</div>
			}>
				<CausesContent />
			</Suspense>
		</main>
	);
}
