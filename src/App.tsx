// Importing necessary React hooks and components
import React, { useEffect, useState } from "react";
import SimulationView from "./SimulationView";
import Menu from "./Menu";
import Player from "./Player";

const App: React.FC = () => {
	// State to store the array of player objects
	const [players, setPlayers] = useState<Player[]>([]);

	// State to store the current generation number
	const [generation, setGeneration] = useState<number>(0);

	// useEffect hook to handle generation transitions
	useEffect(() => {
		// Check if the current generation has 100 players
		if (players.length === 100) {
			// Set a timer to transition to the next generation after 1 second
			const timer = setTimeout(() => {
				console.log("Next generation");
				handleNextGeneration();
			}, 1000);

			// Clear the timer if the component is unmounted or if players/generation state changes
			return () => clearTimeout(timer);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [players, generation]);

	// Function to create a new generation of players
	const createNewGeneration = (fittestPlayers: Player[]) => {
		const newGeneration: Player[] = [];

		// Generate 100 new players for the new generation
		while (newGeneration.length < 100) {
			// Randomly select two parent players from the fittest players
			const parent1 =
				fittestPlayers[Math.floor(Math.random() * fittestPlayers.length)];
			const parent2 =
				fittestPlayers[Math.floor(Math.random() * fittestPlayers.length)];

			// Average the genes of the two parents to create the child's genes
			const childGenes = parent1.genes.map(
				(gene, index) => (gene + parent2.genes[index]) / 2,
			);

			// Add some random noise to the parent's position to set the child's starting position
			const noiseX = (Math.random() - 0.5) * 10;
			const noiseY = (Math.random() - 0.5) * 10;
			const childX = parent1.x + noiseX;
			const childY = parent1.y + noiseY;

			// Create a new player with the child's genes and position, and add it to the new generation
			newGeneration.push(new Player(childGenes, childX, childY));
		}

		// Update the players state with the new generation and increment the generation number
		setPlayers(newGeneration);
		setGeneration(generation + 1);
	};

	// Function to handle transitioning to the next generation
	const handleNextGeneration = () => {
		const fittestPlayers = filterFittestPlayers();
		createNewGeneration(fittestPlayers);
	};

	// Function to handle the "Play" button click
	const handlePlay = () => {
		console.log("CLICKED PLAY");
		const newPlayers: Player[] = [];

		// Generate 100 new players for the first generation
		for (let i = 0; i < 100; i++) {
			newPlayers.push(new Player());
		}

		// Update the players state with the new players and set the generation number to 1
		setPlayers(newPlayers);
		setGeneration(1);
	};

	// Function to filter and return the top 10% fittest players
	const filterFittestPlayers = () => {
		// Sort the players based on fitness in descending order
		const sortedPlayers = [...players].sort((a, b) => b.fitness - a.fitness);

		// Select the top 10% of the sorted players
		const reproducingPlayers = sortedPlayers.slice(
			0,
			sortedPlayers.length / 10,
		);
		console.log(reproducingPlayers);

		// Return the selected players
		return reproducingPlayers;
	};

	// Render the application
	return (
		<div className="app">
			<Menu
				onPlay={handlePlay}
				playerCount={players.length}
				generation={generation}
			/>
			<SimulationView players={players} />
		</div>
	);
};

// Export the App component as the default export of this module
export default App;
