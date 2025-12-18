"use client";

import { Globe } from "@/components/ui/globe";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";

// Globe config - light mode like MagicUI example
// theta controls vertical tilt (higher = see more of top)
const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: -0.3, // Negative to tilt and show top of globe
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

const countries = [
  { name: "India", region: "Mumbai", flag: "🇮🇳" },
  { name: "Nepal", region: "Jumla", flag: "🇳🇵" },
  { name: "Kenya", region: "East Africa", flag: "🇰🇪" },
  { name: "Uganda", region: "East Africa", flag: "🇺🇬" },
  { name: "Tanzania", region: "East Africa", flag: "🇹🇿" },
  { name: "United States", region: "Texas & Maryland", flag: "🇺🇸" },
  { name: "Philippines", region: "COVID Relief", flag: "🇵🇭" },
  { name: "Nigeria", region: "COVID Relief", flag: "🇳🇬" },
  { name: "Pakistan", region: "COVID Relief", flag: "🇵🇰" },
  { name: "Bangladesh", region: "COVID Relief", flag: "🇧🇩" },
  { name: "Mexico", region: "COVID Relief", flag: "🇲🇽" },
  { name: "Brazil", region: "COVID Relief", flag: "🇧🇷" },
];

function CountryCard({ name, region, flag }: { name: string; region: string; flag: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
      <span className="text-xl">{flag}</span>
      <span className="text-white text-sm font-medium">{name}</span>
      <span className="text-gray-500 text-xs">• {region}</span>
    </div>
  );
}

export function GlobalImpact() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Deep Navy Card Container - complements yellow */}
        <div className="bg-[#1a1f36] rounded-3xl pt-8 md:pt-12 lg:pt-16 overflow-hidden">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10 px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Global <span className="text-[#f8d264]">Impact</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Since 2014, we&apos;ve been transforming lives through education, 
              entrepreneurship, and humanitarian aid across the world.
            </p>
          </div>

          {/* Stats Grid - constrained width */}
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
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

          {/* Countries Marquee */}
          <div className="mt-6 md:mt-8">
            <Marquee pauseOnHover className="[--duration:40s]">
              {countries.map((country) => (
                <CountryCard 
                  key={country.name} 
                  name={country.name} 
                  region={country.region}
                  flag={country.flag}
                />
              ))}
            </Marquee>
          </div>

          {/* Globe Container - clips bottom 20% */}
          <div className="relative h-[340px] md:h-[480px] lg:h-[600px] overflow-hidden -mb-[60px] md:-mb-[80px] lg:-mb-[100px] mt-4 md:mt-6 lg:mt-8">
            {/* Glow effect behind globe */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white/10 rounded-full blur-3xl" />
            
            {/* Globe centered */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Globe 
                config={GLOBE_CONFIG}
                className="!relative !inset-auto w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] !max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
