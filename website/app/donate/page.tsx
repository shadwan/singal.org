"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/ui/ripple";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Heart, Check } from "lucide-react";
import {
  AcademicCapIcon,
  HomeIcon,
  BriefcaseIcon,
  SparklesIcon,
  HeartIcon,
  ShieldExclamationIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

// Cause data
const causes = [
  {
    id: "education",
    name: "Education",
    icon: AcademicCapIcon,
    color: "#52a7e4",
    description:
      "Help underprivileged kids in India build a strong foundation for their future.",
    impact: "$35/month provides education for 1 child",
  },
  {
    id: "shelter",
    name: "Shelter Homes",
    icon: HomeIcon,
    color: "#7a7cc7",
    description:
      "Create a future where everyone has a safe, stable place to call home.",
    impact: "Your donation provides safe shelter",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    icon: BriefcaseIcon,
    color: "#194f75",
    description:
      "End extreme poverty in rural Africa through entrepreneurship and innovation.",
    impact: "$150 funds 1 business, impacts 20 people",
  },
  {
    id: "youth",
    name: "Youth Entrepreneurship",
    icon: SparklesIcon,
    color: "#f8b864",
    description:
      "Inspire the next generation with entrepreneurial education and experiences.",
    impact: "Empower future business leaders",
  },
  {
    id: "medical",
    name: "Medical Relief",
    icon: HeartIcon,
    color: "#6890b7",
    description:
      "Provide medicines, mend wounds, and treat those suffering from illness.",
    impact: "Share health with those in need",
  },
  {
    id: "disaster",
    name: "Disaster Relief",
    icon: ShieldExclamationIcon,
    color: "#b28f61",
    description:
      "Send aid to natural disaster survivors and touch lives around the globe.",
    impact: "Provide immediate relief to survivors",
  },
  {
    id: "any",
    name: "Any Cause",
    icon: GlobeAltIcon,
    color: "#f8d264",
    description:
      "Let us direct your gift to the cause that needs it most right now.",
    impact: "Maximum flexibility, maximum impact",
  },
];

const presetAmounts = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  const [selectedCause, setSelectedCause] = useState(causes[0]);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAmountSelect = (amt: number) => {
    setAmount(amt);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    const numValue = value.replace(/[^0-9.]/g, "");
    setCustomAmount(numValue);
    setIsCustom(true);
    if (numValue) {
      setAmount(parseFloat(numValue) || 0);
    }
  };

  const displayAmount = isCustom && customAmount ? parseFloat(customAmount) : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build PayPal URL with form data
    const paypalUrl = new URL("https://www.paypal.com/cgi-bin/webscr");

    if (frequency === "monthly") {
      paypalUrl.searchParams.set("cmd", "_xclick-subscriptions");
      paypalUrl.searchParams.set("a3", displayAmount.toFixed(2));
      paypalUrl.searchParams.set("p3", "1");
      paypalUrl.searchParams.set("t3", "M");
      paypalUrl.searchParams.set("src", "1");
    } else {
      paypalUrl.searchParams.set("cmd", "_xclick");
      paypalUrl.searchParams.set("amount", displayAmount.toFixed(2));
    }

    paypalUrl.searchParams.set("business", "paypal@singal.org");
    paypalUrl.searchParams.set("item_name", `Singal Foundation Donation - ${selectedCause.name}`);
    paypalUrl.searchParams.set("currency_code", "USD");
    paypalUrl.searchParams.set("no_shipping", "1");
    paypalUrl.searchParams.set("return", "https://singal.org/donation-complete");
    paypalUrl.searchParams.set("cancel_return", "https://singal.org/donate");

    paypalUrl.searchParams.set("on0", "Cause");
    paypalUrl.searchParams.set("os0", selectedCause.name);
    paypalUrl.searchParams.set("on1", "Name");
    paypalUrl.searchParams.set("os1", `${firstName} ${lastName}`);
    paypalUrl.searchParams.set("on2", "Email");
    paypalUrl.searchParams.set("os2", email);

    window.location.href = paypalUrl.toString();
  };

  const IconComponent = selectedCause.icon;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-8 lg:pt-12">
        <div className="container mx-auto px-4 pb-16">
          {/* Hero Section - Yellow Card */}
          <div className="relative bg-[#f8d264] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden mb-8">
            {/* Ripple Background Effect */}
            <Ripple
              mainCircleSize={180}
              mainCircleOpacity={0.5}
              numCircles={10}
              className="[--foreground:#c9952c] [mask-image:none]"
            />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium mb-6">
                Make a Difference Today
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Donation{" "}
                <span className="text-white">Changes Lives</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                Every contribution directly funds education, entrepreneurship, medical care, 
                and community development programs around the world.
              </p>

              {/* Poverty Stat */}
              <div className="inline-flex items-baseline gap-1 mb-2">
                <NumberTicker
                  value={736}
                  className="text-5xl md:text-6xl font-bold text-gray-900 font-mono"
                />
                <span className="text-4xl md:text-5xl font-bold text-gray-900">M</span>
              </div>
              <p className="text-gray-800">people still live in extreme poverty worldwide</p>
            </div>
          </div>

          {/* Donation Form Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Choose a Cause Section */}
              <div className="p-8 md:p-10 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  Choose a Cause
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {causes.map((cause) => {
                    const CauseIcon = cause.icon;
                    const isSelected = selectedCause.id === cause.id;
                    return (
                      <button
                        key={cause.id}
                        onClick={() => setSelectedCause(cause)}
                        className={`relative p-4 rounded-2xl text-left transition-all duration-300 ${
                          isSelected
                            ? "bg-gray-900 text-white shadow-lg scale-[1.02]"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <CauseIcon
                          className={`w-6 h-6 mb-2 ${isSelected ? "text-[#f8d264]" : ""}`}
                          style={{ color: isSelected ? "#f8d264" : cause.color }}
                        />
                        <span className="text-sm font-medium block">{cause.name}</span>
                        {isSelected && (
                          <div className="absolute top-2 right-2">
                            <Check className="w-4 h-4 text-[#f8d264]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Cause Description */}
                <div
                  className="p-5 rounded-2xl transition-all duration-300"
                  style={{ backgroundColor: `${selectedCause.color}15` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${selectedCause.color}25` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: selectedCause.color }} />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">{selectedCause.description}</p>
                      <p className="text-sm font-medium" style={{ color: selectedCause.color }}>
                        {selectedCause.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donation Amount Section */}
              <div className="p-8 md:p-10 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  Select Amount
                </h2>

                {/* Frequency Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex bg-gray-100 rounded-full p-1">
                    <button
                      onClick={() => setFrequency("once")}
                      className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                        frequency === "once"
                          ? "bg-gray-900 text-white shadow-md"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      One Time
                    </button>
                    <button
                      onClick={() => setFrequency("monthly")}
                      className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                        frequency === "monthly"
                          ? "bg-gray-900 text-white shadow-md"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                  {presetAmounts.map((amt, index) => (
                    <button
                      key={amt}
                      onClick={() => handleAmountSelect(amt)}
                      className={`relative py-4 rounded-2xl font-bold text-lg transition-all ${
                        amount === amt && !isCustom
                          ? "bg-gray-900 text-white shadow-lg scale-[1.02]"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      ${amt}
                      {index === 2 && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#f8d264] text-gray-900 text-[10px] font-bold rounded-full">
                          POPULAR
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative max-w-md mx-auto">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">
                    $
                  </span>
                  <input
                    type="text"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className={`w-full pl-8 pr-4 py-4 rounded-2xl border-2 text-lg font-medium transition-all ${
                      isCustom
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-200 focus:border-gray-900"
                    }`}
                  />
                </div>
              </div>

              {/* Summary & Action Section */}
              <div className="p-8 md:p-10 bg-gray-50">
                {!showForm ? (
                  <div className="text-center">
                    <div className="mb-6">
                      <p className="text-gray-600 mb-2">You&apos;re about to donate</p>
                      <div className="flex items-center justify-center gap-2">
                        <span
                          className="text-5xl md:text-6xl font-bold"
                          style={{ color: selectedCause.color }}
                        >
                          ${displayAmount.toFixed(0)}
                        </span>
                        {frequency === "monthly" && (
                          <span className="text-xl text-gray-500">/month</span>
                        )}
                      </div>
                      <p className="text-gray-500 mt-2">to {selectedCause.name}</p>
                    </div>

                    <Button
                      size="lg"
                      onClick={() => setShowForm(true)}
                      className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-lg"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Continue to Donate
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
                      Your Information
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 transition-colors"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 transition-colors"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#f8d264] hover:bg-[#f0c850] text-gray-900 font-bold py-6 text-lg rounded-full shadow-lg"
                      >
                        Donate ${displayAmount.toFixed(0)} with PayPal
                      </Button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="text-gray-500 hover:text-gray-700 text-sm"
                      >
                        Go back
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Footer Note */}
              <div className="px-8 py-4 bg-white border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  Singal Foundation is a 501(c)(3) organization. EIN: 82-3445516.{" "}
                  <Link href="/privacy-policy" className="text-gray-700 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
