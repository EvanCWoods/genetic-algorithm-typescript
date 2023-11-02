// Importing necessary React hooks
import React, { useRef, useEffect } from "react";

// Defining the prop types for an individual player
interface PlayerProps {
	x: number;
	y: number;
	color: string;
}

// Defining the prop types for the SimulationView component
interface SimulationViewProps {
	players: PlayerProps[];
}

// Functional component for rendering the simulation view
const SimulationView: React.FC<SimulationViewProps> = ({ players }) => {
	// Creating a ref to hold the reference to the canvas DOM element
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	// useEffect hook to update the canvas whenever the players array changes
	useEffect(() => {
		// Accessing the current value of the canvas ref
		const canvas = canvasRef.current;

		// Making sure the canvas element is successfully accessed
		if (canvas) {
			// Getting the 2D rendering context for the canvas
			const ctx = canvas.getContext("2d");

			// Making sure the rendering context is successfully accessed
			if (ctx) {
				// Clearing the entire canvas to remove previous drawings
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				// Iterating through the players array to draw each player
				players.forEach((player) => {
					// Setting the fill style to the player's color
					ctx.fillStyle = player.color;

					// Starting a new path for the player
					ctx.beginPath();

					// Drawing a circle to represent the player
					ctx.arc(player.x, player.y, 5, 0, Math.PI * 2);

					// Filling the circle with the previously set fill style
					ctx.fill();
				});
			}
		}
	}, [players]); // Dependency array to ensure this effect runs when players array changes

	// Returning the JSX to be rendered
	return (
		<div
			style={{
				padding: "10px",
				border: "1px solid black",
				width: "600px",
				height: "400px",
			}}
		>
			<canvas
				ref={canvasRef} // Setting the canvas ref
				width="600" // Setting the canvas width
				height="400" // Setting the canvas height
				className="simulation-canvas" // Setting the CSS class for styling
			/>
		</div>
	);
};

// Exporting the SimulationView component as the default export of this module
export default SimulationView;
