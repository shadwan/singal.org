import { GraduationCap, Home, Briefcase, Users, Heart, LifeBuoy } from "lucide-react";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "The path out of poverty begins when the next generation can access quality education.",
    color: "#52a7e4",
  },
  {
    icon: Home,
    title: "Shelter Homes",
    description: "We believe in giving individuals access to a safe and stable environment in which they can grow and thrive.",
    color: "#7a7cc7",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship",
    description: "By giving people the tools to lead a productive life, they can lift themselves out of poverty.",
    color: "#194f75",
  },
  {
    icon: Users,
    title: "Youth Entrepreneurship",
    description: "We strive to equip young people with the values and visions to pursue their dreams.",
    color: "#f8b864",
  },
  {
    icon: Heart,
    title: "Medical Relief",
    description: "We can save lives by delivering healthcare services to those who need it the most.",
    color: "#6890b7",
  },
  {
    icon: LifeBuoy,
    title: "Disaster Relief",
    description: "We are committed to providing immediate and tangible relief to those affected by natural disasters.",
    color: "#b28f61",
  },
];

export default function Initiatives() {
  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Initiatives
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto">
            Creating lasting change through focused programs that empower communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
