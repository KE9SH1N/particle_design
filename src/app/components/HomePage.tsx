"use client";
import { useEffect, useState } from "react";

const HomePage = () => {
	const [particles, setParticles] = useState<number[]>([]);
	const dotCount = 50; // Adjust the number of dots as needed

	useEffect(() => {
		const particleCount = 50;
		const particleArr = Array.from({ length: particleCount }, () =>
			Math.random()
		);
		setParticles(particleArr);
	}, []);

	return (
		<div className="relative min-h-screen bg-[#f5e3cd] overflow-hidden">
			<div className="absolute top-6 left-6 text-lg text-[#84382b] font-semibold">
				Cronos
			</div>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<div className="text-8xl font-bold text-[#84382b]">09:41:15</div>
				<div className="mt-4 text-xl text-[#84382b]">Ireland</div>
				<div className="mt-4 text-lg text-[#84382b] italic">
					The only way to do great work is to love what you do - Steve Jobs
				</div>
			</div>
			{particles.map((_, index) => {
				const dx = Math.random() * 2 - 1;
				const dy = Math.random() * 2 - 1;

				return (
					<div className="relative h-screen w-screen overflow-hidden">
						{[...Array(dotCount)].map((_, index) => (
							<div
								key={index}
								className="dot"
								style={{
									width: `${Math.random() * 8 + 2}px`, // Random size between 2 and 10 pixels
									height: `${Math.random() * 8 + 2}px`,
									left: `${Math.random() * 100}vw`, // Random horizontal position
									top: `${Math.random() * 100}vh`, // Random vertical position
									animationDelay: `${Math.random() * 4}s`, // Stagger the start time
								}}
							/>
						))}
					</div>
				);
			})}
		</div>
	);
};

export default HomePage;
