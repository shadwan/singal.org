"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const stories = [
  {
    id: 1,
    image: "/images/stories/joanna.jpg",
    category: "Disaster Relief",
    location: "Houston, TX",
    name: "Joanna",
    title: "Lost Everything in the Storm",
    color: "#b28f61",
  },
  {
    id: 2,
    image: "/images/stories/farming.jpg",
    category: "Entrepreneurship",
    location: "East Africa",
    name: "Florence",
    title: "A Pig Farming Success Story",
    color: "#194f75",
  },
  {
    id: 3,
    image: "/images/stories/ayush.jpg",
    category: "Education",
    location: "Mumbai, India",
    name: "Ayush",
    title: "Beat the Odds",
    color: "#52a7e4",
  },
  {
    id: 4,
    image: "/images/stories/claudia.jpg",
    category: "Disaster Relief",
    location: "Houston, TX",
    name: "Claudia",
    title: "Stronger Than The Storm",
    color: "#b28f61",
  },
  {
    id: 5,
    image: "/images/stories/caroline.jpg",
    category: "Entrepreneurship",
    location: "East Africa",
    name: "Caroline",
    title: "A Kiosk Sending Kids to School",
    color: "#194f75",
  },
  {
    id: 6,
    image: "/images/stories/elizabeth.jpg",
    category: "Entrepreneurship",
    location: "East Africa",
    name: "Elizabeth",
    title: "From Worker to Business Owner",
    color: "#194f75",
  },
];

export default function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-4 md:py-8">
      <div className="container mx-auto px-4">
        {/* Header - Centered */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#f8d264]/20 text-[#b8962d] rounded-full text-sm font-medium mb-4">
            Impact Stories
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Real Lives, <span className="text-[#f8d264]">Real Change</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every donation creates a ripple effect of transformation.
          </p>
        </div>

        {/* Stories Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#f8d264] transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#f8d264] transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-[280px] md:w-[300px] snap-start group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(0deg, ${story.color} 0%, transparent 50%)`,
                    }}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
                      {story.category}
                    </span>
                  </div>
                  {/* Read Story Link */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="flex items-center gap-2 text-white font-medium text-sm group-hover:text-[#f8d264] transition-colors">
                      Read Story
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">{story.location}</p>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#b8962d] transition-colors">
                    {story.name}: {story.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            size="lg"
            className="bg-[#f8d264] hover:bg-[#f8b864] text-gray-900 font-semibold px-8 rounded-full"
          >
            View All Stories
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
