// Class representing a player in the simulation
class Player {
	// Array of genes representing the player's characteristics
	genes: number[];
	// Fitness score of the player
	fitness: number;
	// Current x-coordinate of the player on the canvas
	x: number;
	// Current y-coordinate of the player on the canvas
	y: number;
	// Color of the player for visualization
	color: string;

	// Constructor to initialize a player instance
	constructor(genes?: number[], startX?: number, startY?: number) {
		// Initialize genes with provided genes or random genes
		this.genes = genes || this.initializeRandomGenes();

		// Compute initial fitness of the player
		this.fitness = this.computeFitness();

		// Set the starting position of the player
		this.x = startX !== undefined ? startX : Math.random() * 600;
		this.y = startY !== undefined ? startY : Math.random() * 400;

		// Set the color of the player based on its genes
		this.color = this.getColorFromGenes();
	}

	// Generate a random set of genes
	private initializeRandomGenes(): number[] {
		const geneLength = 5;
		const genes: number[] = [];
		for (let i = 0; i < geneLength; i++) {
			genes.push(Math.random());
		}
		return genes;
	}

	// Generate a color based on the first three genes
	private getColorFromGenes(): string {
		const red = Math.floor(this.genes[0] * 255);
		const green = Math.floor(this.genes[1] * 255);
		const blue = Math.floor(this.genes[2] * 255);
		return `rgb(${red},${green},${blue})`;
	}

	// Move the player on the canvas
	move() {
		const noiseX = (Math.random() - 0.5) * 10; // Random noise between -5 and 5
		const noiseY = (Math.random() - 0.5) * 10; // Random noise between -5 and 5

		this.x += noiseX;
		this.y += noiseY;

		// Keep the player inside the canvas boundaries
		this.x = Math.max(0, Math.min(600, this.x));
		this.y = Math.max(0, Math.min(400, this.y));
	}

	// Start automatic movement of the player
	startMovement() {
		setInterval(() => {
			this.move();
		}, 1000 / 60); // 60 FPS
	}

	// Calculate the distance of the player from a target position
	getDistanceFromTarget(): number {
		const dx = this.x - 600;
		const dy = this.y - 400;
		return Math.sqrt(dx * dx + dy * dy);
	}

	// Compute fitness based on the player's position
	private computeFitness(): number {
		const maxDistance = Math.sqrt(300 * 300 + 200 * 200); // Max distance from a corner to the center
		const distance = this.getDistanceFromTarget();
		// Normalize fitness to be between 0 and 1
		return (maxDistance - distance) / maxDistance;
	}
}

// Export the Player class
export default Player;
