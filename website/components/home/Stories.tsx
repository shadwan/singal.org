"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stories = [
  {
    image: "/img/slide1.jpg",
    category: "Disaster Relief",
    location: "Houston, TX",
    title: "Joanna Lost Everything in the Storm",
    color: "#b28f61",
  },
  {
    image: "/img/slide2.jpg",
    category: "Entrepreneurship",
    location: "Sabwani Marinda, East Africa",
    title: "A Pig Farming Success Story",
    color: "#194f75",
  },
  {
    image: "/img/slide3.jpg",
    category: "Education",
    location: "Mumbai, India",
    title: "Ayush Beat the Odds",
    color: "#52a7e4",
  },
  {
    image: "/img/slide4.jpg",
    category: "Disaster Relief",
    location: "Houston, TX",
    title: "Stronger Than The Storm",
    color: "#b28f61",
  },
  {
    image: "/img/slide5.jpg",
    category: "Entrepreneurship",
    location: "Sabwani Marinda, East Africa",
    title: "From Casual Worker to Business Owner",
    color: "#194f75",
  },
  {
    image: "/img/slide6.jpg",
    category: "Entrepreneurship",
    location: "Sabwani Marinda, East Africa",
    title: "A Kiosk Stand is Sending Kids to School",
    color: "#194f75",
  },
  {
    image: "/img/slide7.jpg",
    category: "Education",
    location: "Mumbai, India",
    title: "The Girl Who Pleaded to Go to School",
    color: "#52a7e4",
  },
];

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const getVisibleStories = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(stories[(currentIndex + i) % stories.length]);
    }
    return visible;
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Our Stories
            </h2>
            <p className="text-[#6b6b6b]">Real impact, real lives changed.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-[#f7f7f7] hover:bg-[#f8d264] text-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-[#f7f7f7] hover:bg-[#f8d264] text-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {getVisibleStories().map((story, index) => (
            <div
              key={`${story.title}-${index}`}
              className="group relative overflow-hidden rounded-2xl bg-gray-200 cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(0deg, ${story.color} 10%, rgba(49, 35, 21, 0.19) 100%)`
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                    <span className="text-[#ffcf10]">{story.category}</span>
                    <span>/</span>
                    <span>{story.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#f8d264] transition-colors">
                    {story.title}
                  </h3>
                  <span className="text-[#ffcf10] text-sm font-medium flex items-center gap-1">
                    Read story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-black text-black hover:bg-[#f8d264] hover:border-[#f8d264] rounded-full"
          >
            More Stories
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
