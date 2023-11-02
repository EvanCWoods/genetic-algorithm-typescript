# Genetic Algorithm Simulation

## Overview

This project is a React-based web application that simulates the behavior of a genetic algorithm. The application visually represents "players" with varying genetic information as they move across a canvas. Users can interact with the simulation through a menu, initiating a new generation of players or observing the evolution of current players.

![Demo picture](./src/assets/Screen%20Shot%202023-11-02%20at%208.22.29%20PM.png)

## How It Works

When the user clicks the "play" button, 100 players are generated randomly on the canvas, each represented by a small colored circle. These players move around the canvas, and their movement is influenced by their genetic information. Over time, the players' fitness is calculated based on their proximity to a target location on the canvas.

As the simulation progresses, users can observe how players with higher fitness scores (i.e., closer to the target) are more likely to pass their genes to the next generation. This results in future generations of players that are, on average, closer to the target location. This can be seen in both the average location of the players, but also the color changes in the players. As the simulation progresses, they players colors standardise due to the genes being passed on from the most successful parents.

## User Interaction

- **Play**: Clicking the "play" button initializes the simulation with 100 randomly generated players. The simulation then progresses through generations, with players moving around the canvas.
- **Observe**: Users can observe the players' movements and see how players with better genes (i.e., closer to the target) tend to dominate over time.

## Technical Overview

The app is written using `React`, `Typescript`, `Object-Oriented programming principals` and minimal `CSS`

### Components

- `App`: The main component that holds the state of the players and generation. It handles user interactions and updates the players' positions.
- `Menu`: A component that provides the user interface for interacting with the simulation.
- `SimulationView`: A canvas-based component that visually represents the players.
- `Player`: A class that represents a player, holding its genes, position, and fitness score.

### State Management

The application's state, including the list of players and the current generation, is managed within the `App` component using React's `useState` hook.

### Movement and Genetics

- Each player's movement is influenced by its genetic information, and a random noise factor that adds some variability to their movement.
- The players' fitness is calculated based on their proximity to a predefined target location.
- A genetic algorithm is used to select players with higher fitness scores to reproduce and create the next generation.

### Canvas Rendering

- The `SimulationView` component uses the HTML canvas to visually represent the players.
- It receives the list of players from the `App` component and renders them as circles on the canvas.
- The position of each player on the canvas represents its position in the simulation.

### Running the Project

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and navigate to `http://localhost:3000`.

Enjoy the simulation!
