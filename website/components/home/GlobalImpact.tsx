"use client";

import { Globe } from "@/components/ui/globe";
import { NumberTicker } from "@/components/ui/number-ticker";

// Globe config - light mode like MagicUI example
const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0, // Light mode
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1] as [number, number, number],
  markerColor: [251 / 255, 100 / 255, 21 / 255] as [number, number, number], // Orange markers
  glowColor: [1, 1, 1] as [number, number, number],
  markers: [
    // Mumbai, India - Education, Shelter, Medical
    { location: [19.076, 72.8777] as [number, number], size: 0.1 },
    // Jumla, Nepal - Shelter
    { location: [29.2743, 82.1938] as [number, number], size: 0.06 },
    // Rockville, Maryland - Youth, Shelter
    { location: [39.084, -77.1528] as [number, number], size: 0.08 },
    // Houston, Texas - Disaster Relief
    { location: [29.7604, -95.3698] as [number, number], size: 0.06 },
    // Kenya - Entrepreneurship
    { location: [-1.2921, 36.8219] as [number, number], size: 0.07 },
    // Uganda - Entrepreneurship
    { location: [0.3476, 32.5825] as [number, number], size: 0.05 },
    // Tanzania - Entrepreneurship
    { location: [-6.369, 34.8888] as [number, number], size: 0.05 },
  ],
};

const stats = [
  { value: 8, label: "Schools Funded", suffix: "" },
  { value: 1900, label: "Children Educated", suffix: "+" },
  { value: 22, label: "Countries Reached", suffix: "" },
  { value: 277, label: "Businesses Supported", suffix: "" },
  { value: 223, label: "Grants Distributed", suffix: "K+" },
  { value: 1000, label: "Lives Transformed", suffix: "+" },
];

export function GlobalImpact() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Deep Navy Card Container - complements yellow */}
        <div className="bg-[#1a1f36] rounded-3xl pt-8 md:pt-12 lg:pt-16 px-8 md:px-12 lg:px-16 overflow-hidden">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Global <span className="text-[#f8d264]">Impact</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Since 2014, we&apos;ve been transforming lives through education, 
              entrepreneurship, and humanitarian aid across the world.
            </p>
          </div>

          {/* Stats Grid - constrained width */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 text-center border border-white/10"
                >
                  <div className="flex items-baseline justify-center gap-0.5 mb-1">
                    <NumberTicker
                      value={stat.value}
                      delay={index * 0.1}
                      className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-[#f8d264] tracking-tight"
                    />
                    {stat.suffix && (
                      <span className="text-lg md:text-2xl lg:text-3xl font-mono font-bold text-[#f8d264]">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Globe Container - seamless with bottom */}
          <div className="relative h-[250px] md:h-[320px] lg:h-[380px] mt-8">
            {/* Glow effect behind globe */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[400px] h-[200px] md:w-[600px] md:h-[300px] bg-white/5 rounded-full blur-3xl" />
            
            {/* Globe - positioned so top portion shows */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-[120px] md:-top-[160px] lg:-top-[180px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]">
              <Globe 
                config={GLOBE_CONFIG}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
