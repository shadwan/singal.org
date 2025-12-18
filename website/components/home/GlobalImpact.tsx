"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";

// Project locations with coordinates
const projects = [
  {
    name: "Education",
    location: "Mumbai, India",
    coordinates: [19.076, 72.8777] as [number, number],
    impact: "8 schools funded, 1,900+ children educated",
    color: "#52a7e4",
    description: "Quality education in slum communities"
  },
  {
    name: "Shelter Homes",
    location: "Jumla, Nepal",
    coordinates: [29.2743, 82.1938] as [number, number],
    impact: "15-17 blind children supported",
    color: "#7a7cc7",
    description: "Care for visually impaired children"
  },
  {
    name: "Shelter Homes",
    location: "Mumbai, India",
    coordinates: [19.076, 72.8777] as [number, number],
    impact: "36 children at SEAL Ashram",
    color: "#7a7cc7",
    description: "Comprehensive care for orphaned children"
  },
  {
    name: "Entrepreneurship",
    location: "East Africa",
    coordinates: [-1.2921, 36.8219] as [number, number],
    impact: "150 entrepreneurs, 50 businesses",
    color: "#194f75",
    description: "Micro-enterprise development in Kenya, Uganda, Tanzania"
  },
  {
    name: "Youth Entrepreneurship",
    location: "Rockville, Maryland",
    coordinates: [39.084, -77.1528] as [number, number],
    impact: "Children's Business Fair",
    color: "#f8b864",
    description: "Inspiring young entrepreneurs ages 6-14"
  },
  {
    name: "Medical Relief",
    location: "Mumbai, India",
    coordinates: [19.076, 72.8777] as [number, number],
    impact: "$55K hospital project",
    color: "#6890b7",
    description: "Healthcare for destitute individuals"
  },
  {
    name: "Disaster Relief",
    location: "Houston, Texas",
    coordinates: [29.7604, -95.3698] as [number, number],
    impact: "Hurricane Harvey relief",
    color: "#b28f61",
    description: "Supporting 185,000 affected homes"
  },
];

// COVID-19 Fund countries with coordinates
const covidCountries = [
  { name: "USA", coordinates: [37.0902, -95.7129] as [number, number] },
  { name: "Germany", coordinates: [51.1657, 10.4515] as [number, number] },
  { name: "South Africa", coordinates: [-30.5595, 22.9375] as [number, number] },
  { name: "Australia", coordinates: [-25.2744, 133.7751] as [number, number] },
  { name: "Nigeria", coordinates: [9.082, 8.6753] as [number, number] },
  { name: "Puerto Rico", coordinates: [18.2208, -66.5901] as [number, number] },
  { name: "New Zealand", coordinates: [-40.9006, 174.886] as [number, number] },
  { name: "Hungary", coordinates: [47.1625, 19.5033] as [number, number] },
  { name: "Spain", coordinates: [40.4637, -3.7492] as [number, number] },
  { name: "Philippines", coordinates: [12.8797, 121.774] as [number, number] },
  { name: "Malaysia", coordinates: [4.2105, 101.9758] as [number, number] },
  { name: "Italy", coordinates: [41.8719, 12.5674] as [number, number] },
  { name: "UK", coordinates: [55.3781, -3.436] as [number, number] },
  { name: "Poland", coordinates: [51.9194, 19.1451] as [number, number] },
  { name: "Singapore", coordinates: [1.3521, 103.8198] as [number, number] },
  { name: "Kenya", coordinates: [-0.0236, 37.9062] as [number, number] },
  { name: "Thailand", coordinates: [15.87, 100.9925] as [number, number] },
  { name: "Dominican Republic", coordinates: [18.7357, -70.1627] as [number, number] },
  { name: "Canada", coordinates: [56.1304, -106.3468] as [number, number] },
  { name: "Vietnam", coordinates: [14.0583, 108.2772] as [number, number] },
  { name: "Belgium", coordinates: [50.5039, 4.4699] as [number, number] },
  { name: "France", coordinates: [46.2276, 2.2137] as [number, number] },
];

// All markers for the globe
const allMarkers = [
  ...projects.map(p => ({ location: p.coordinates, size: 0.08 })),
  ...covidCountries.map(c => ({ location: c.coordinates, size: 0.04 })),
];

export function GlobalImpact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const focusRef = useRef({ phi: 0, theta: 0 });

  // Rotate to location
  const focusOnLocation = useCallback((lat: number, lng: number) => {
    const newPhi = (Math.PI / 2) - (lat * Math.PI / 180);
    const newTheta = (-lng * Math.PI / 180) - Math.PI / 2;
    focusRef.current = { phi: newPhi, theta: newTheta };
  }, []);

  // Auto-shuffle cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Focus globe on current project
  useEffect(() => {
    const project = projects[currentIndex];
    focusOnLocation(project.coordinates[0], project.coordinates[1]);
  }, [currentIndex, focusOnLocation]);

  // Initialize globe
  useEffect(() => {
    if (!canvasRef.current) return;

    let currentPhi = 0;
    let currentTheta = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: currentPhi,
      theta: currentTheta,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.97, 0.82, 0.39], // Yellow #f8d264
      glowColor: [0.97, 0.82, 0.39],
      markers: allMarkers,
      onRender: (state) => {
        // Smooth rotation to target
        const phiDiff = focusRef.current.phi - currentPhi;
        const thetaDiff = focusRef.current.theta - currentTheta;
        
        currentPhi += phiDiff * 0.05;
        currentTheta += thetaDiff * 0.05;
        
        state.phi = currentPhi;
        state.theta = currentTheta;
      },
    });

    globeRef.current = globe;

    return () => {
      globe.destroy();
    };
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 bg-[#060709] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Global Impact</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From Mumbai to Maryland, we&apos;re creating lasting change across 24+ countries
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Globe */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ contain: "layout paint size" }}
            />
          </div>

          {/* Project Card */}
          <div className="w-full max-w-md">
            <div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500"
              style={{ borderLeftColor: currentProject.color, borderLeftWidth: 4 }}
            >
              <div 
                className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: currentProject.color + "20", color: currentProject.color }}
              >
                {currentProject.name}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentProject.location}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {currentProject.description}
              </p>
              
              <div className="flex items-center gap-2 text-[#f8d264] font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {currentProject.impact}
              </div>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "w-8 bg-[#f8d264]" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* COVID-19 Impact */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#f8d264]/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#f8d264]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">COVID-19 Relief Fund</p>
                  <p className="text-gray-400 text-sm">22 countries • 277 businesses supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
