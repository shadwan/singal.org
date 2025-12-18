"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 10000, label: "Students by 2026", prefix: "", suffix: "" },
  { value: 8, label: "Belt Certifications", prefix: "", suffix: "" },
  { value: 100, label: "Per Child/Year", prefix: "$", suffix: "" },
];

export default function RiseAI() {
  return (
    <section className="bg-[#1a1f36] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <span className="inline-block px-4 py-1.5 bg-[#f8d264]/20 text-[#f8d264] rounded-full text-sm font-medium mb-4">
                New Initiative
              </span>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Rise<span className="text-[#f8d264]">AI</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
                The Next Evolution of Education
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-8">
                We&apos;re not teaching kids about AI. We&apos;re teaching them to 
                partner with AI to solve bigger problems, multiply their ideas, 
                and build the future they want to see.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
                {stats.map((stat, index) => (
                  <div key={stat.label}>
                    <div className="flex items-baseline gap-0.5">
                      {stat.prefix && (
                        <span className="text-2xl md:text-3xl font-bold text-[#f8d264]">
                          {stat.prefix}
                        </span>
                      )}
                      <NumberTicker
                        value={stat.value}
                        delay={index * 0.15}
                        className="text-2xl md:text-3xl font-bold text-[#f8d264] font-mono"
                      />
                      {stat.suffix && (
                        <span className="text-2xl md:text-3xl font-bold text-[#f8d264]">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="bg-[#f8d264] hover:bg-[#f8b864] text-gray-900 font-semibold px-6 rounded-full"
              >
                Support RiseAI
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right - Image Placeholder */}
            <div className="relative order-first md:order-last">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f8d264] flex items-center justify-center">
                {/* Yellow placeholder for image/video */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gray-900/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg 
                      className="w-8 h-8 text-gray-900/40" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <p className="text-gray-900/40 text-sm font-medium">Video Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
