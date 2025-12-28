"use client";

export default function Hero() {
	return (
		<section className="py-12 md:py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="bg-[#f8d264] rounded-3xl overflow-hidden">
					<div className="p-8 md:p-12 lg:p-16">
						<div className="max-w-4xl mx-auto text-center">
							<span className="inline-block px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium mb-4">
								Our Causes
							</span>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								Discover Our Work At A Glance
							</h1>
							<p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto">
								We are committed to creating a world where everyone has the opportunity to succeed. 
								Explore our initiatives and see how we're making a difference.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
