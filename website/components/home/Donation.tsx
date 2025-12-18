import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Donation() {
  return (
    <section className="py-24 bg-[#060709] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-[#f8d264]/10 blur-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-bold text-[#f8d264]">
                    736M
                  </div>
                  <p className="text-[#cdcdcd] text-lg mt-2">People in extreme poverty</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              736 Million
              <br />
              People Live in
              <br />
              <span className="text-[#f8d264]">
                Extreme Poverty
              </span>
            </h2>
            <p className="text-[#cdcdcd] text-lg mb-8 max-w-lg">
              With each donation, you&apos;re helping lift someone out of poverty
              through education and entrepreneurship.
            </p>
            <Button
              size="lg"
              className="bg-[#f8d264] hover:bg-[#f8b864] text-black font-semibold px-8 rounded-full"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
