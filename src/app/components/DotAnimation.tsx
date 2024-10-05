import React from "react";

interface DotAnimationProps {
	children: React.ReactNode; // Define the children prop
}

const DotAnimation: React.FC<DotAnimationProps> = ({ children }) => {
	const dotCount = 80; // Number of dots

	return (
		<div className="relative h-screen w-screen">
			{[...Array(dotCount)].map((_, index) => {
				// Random values for width, height, and movement direction
				const size = `5px`;
				const randomX = Math.random() * 100; // Random horizontal position
				const randomY = Math.random() * 100; // Random vertical position
				const randomDuration = `${Math.random() * 20 + 20}s`; // Random duration
				const randomDelay = `${Math.random() * 50}s`; // Staggered start time for random effect

				return (
					<div
						key={index}
						className="dot text-orange-900"
						style={{
							width: size,
							height: size,
							left: `${randomX}vw`, // Random horizontal position
							top: `${randomY}vh`, // Random vertical position
							animationDuration: randomDuration,
							animationDelay: randomDelay,
						}}
					/>
				);
			})}
			{/* Render children */}
			<div className="absolute inset-0 flex items-center justify-center z-10">
				{children}
			</div>
		</div>
	);
};

export default DotAnimation;
