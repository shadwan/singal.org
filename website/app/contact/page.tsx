"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactPage() {
	const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormState("sending");

		// Simulate form submission - in production, this would send to an API
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setFormState("sent");
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch {
			setFormState("error");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section with Map Background */}
			<section className="relative py-8 md:py-12 lg:py-16">
				{/* Background Pattern */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
					<div
						className="absolute inset-0 opacity-10"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						}}
					/>
				</div>

				<div className="container mx-auto px-4 relative z-10">
					{/* Main Card */}
					<div className="bg-white rounded-3xl shadow-xl overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-3">
							{/* Form Section */}
							<div className="lg:col-span-2 p-6 md:p-10 lg:p-12">
								<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
									Send Us a Message
								</h1>

								{/* Status Messages */}
								{formState === "sent" && (
									<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
										<p className="text-green-700 font-medium flex items-center gap-2">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
											Thank you! Your message has been sent.
										</p>
									</div>
								)}

								{formState === "error" && (
									<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
										<p className="text-red-700 font-medium flex items-center gap-2">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
													clipRule="evenodd"
												/>
											</svg>
											Apologies, something has gone wrong. Please try again.
										</p>
									</div>
								)}

								{formState !== "sent" && (
									<p className="text-gray-600 mb-8">
										Have a question, concern or feedback? Write to us anytime
										using the form below.
									</p>
								)}

								{/* Contact Form */}
								<form onSubmit={handleSubmit} className="space-y-5">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										{/* Name Field */}
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 mb-1.5"
											>
												Your Name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="What is your name?"
												required
												className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#f8d264] focus:ring-2 focus:ring-[#f8d264]/20 outline-none transition-all"
											/>
										</div>

										{/* Email Field */}
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 mb-1.5"
											>
												Email Address
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="Email address"
												required
												className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#f8d264] focus:ring-2 focus:ring-[#f8d264]/20 outline-none transition-all"
											/>
										</div>
									</div>

									{/* Subject Field */}
									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700 mb-1.5"
										>
											Subject{" "}
											<span className="text-gray-400 font-normal">(optional)</span>
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											placeholder="What is this message about?"
											className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#f8d264] focus:ring-2 focus:ring-[#f8d264]/20 outline-none transition-all"
										/>
									</div>

									{/* Message Field */}
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-1.5"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Enter your message..."
											required
											rows={5}
											className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#f8d264] focus:ring-2 focus:ring-[#f8d264]/20 outline-none transition-all resize-none"
										/>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										disabled={formState === "sending"}
										className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f8d264] text-gray-900 rounded-full font-semibold hover:bg-[#f5c842] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
									>
										{formState === "sending" ? (
											<>
												<svg
													className="w-5 h-5 animate-spin"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													/>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													/>
												</svg>
												Sending...
											</>
										) : (
											<>
												Send Now
												<svg
													className="w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 8l4 4m0 0l-4 4m4-4H3"
													/>
												</svg>
											</>
										)}
									</button>
								</form>
							</div>

							{/* Contact Info Section */}
							<div className="bg-gray-900 text-white p-6 md:p-10 lg:p-12">
								<h2 className="text-2xl font-bold mb-4">Contact Information</h2>
								<p className="text-gray-400 mb-8">
									Whether you want to get involved, learn more about our projects
									or just say hello, we would love to hear from you.
								</p>

								{/* Email */}
								<div className="mb-6">
									<p className="text-sm text-gray-400 mb-1">Email us at:</p>
									<a
										href="mailto:support@singal.org"
										className="text-lg font-medium text-[#f8d264] hover:underline"
									>
										support@singal.org
									</a>
								</div>

								{/* Address */}
								<div className="mb-8">
									<p className="text-sm text-gray-400 mb-1">
										Our office is located at:
									</p>
									<address className="text-lg font-medium not-italic">
										2098 Gaither Road
										<br />
										Rockville, Maryland – 20878
										<br />
										United States
									</address>
								</div>

								{/* Social Links */}
								<div>
									<p className="text-sm text-gray-400 mb-3">
										We&apos;re social. Are you?
									</p>
									<div className="flex gap-3">
										<a
											href="https://www.facebook.com/Singal-Foundation-109544670382822/"
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 bg-white/10 hover:bg-[#f8d264] rounded-full flex items-center justify-center transition-colors group"
											aria-label="Facebook"
										>
											<svg
												className="w-5 h-5 text-white group-hover:text-gray-900"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
											</svg>
										</a>
										<a
											href="https://twitter.com/SingalFoundati1"
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 bg-white/10 hover:bg-[#f8d264] rounded-full flex items-center justify-center transition-colors group"
											aria-label="Twitter"
										>
											<svg
												className="w-5 h-5 text-white group-hover:text-gray-900"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
											</svg>
										</a>
										<a
											href="https://www.instagram.com/singal_foundation/"
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 bg-white/10 hover:bg-[#f8d264] rounded-full flex items-center justify-center transition-colors group"
											aria-label="Instagram"
										>
											<svg
												className="w-5 h-5 text-white group-hover:text-gray-900"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
											</svg>
										</a>
									</div>
								</div>

								{/* Decorative Element */}
								<div className="mt-12 pt-8 border-t border-white/10">
									<p className="text-sm text-gray-400">
										Singal Foundation is a 501(c)(3) Non-Profit Organization
									</p>
									<p className="text-sm text-gray-500 mt-1">EIN: 82-3445516</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Links Section */}
			<section className="py-12 md:py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
						Explore More
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<Link
							href="/causes"
							className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
						>
							<div className="w-12 h-12 bg-[#52a7e4]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#52a7e4] transition-colors">
								<svg
									className="w-6 h-6 text-[#52a7e4] group-hover:text-white transition-colors"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Our Causes</h3>
							<p className="text-gray-600 text-sm">
								Learn about our initiatives in education, entrepreneurship, and
								disaster relief.
							</p>
						</Link>

						<Link
							href="/stories"
							className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
						>
							<div className="w-12 h-12 bg-[#f8b864]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f8b864] transition-colors">
								<svg
									className="w-6 h-6 text-[#f8b864] group-hover:text-white transition-colors"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Impact Stories</h3>
							<p className="text-gray-600 text-sm">
								Read inspiring stories of lives transformed through our work.
							</p>
						</Link>

						<Link
							href="/about"
							className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
						>
							<div className="w-12 h-12 bg-[#194f75]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#194f75] transition-colors">
								<svg
									className="w-6 h-6 text-[#194f75] group-hover:text-white transition-colors"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-gray-900 mb-2">About Us</h3>
							<p className="text-gray-600 text-sm">
								Discover our mission and the team behind the Singal Foundation.
							</p>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
