import React from "react";
import "./Menu.css";

interface MenuProps {
	onPlay: () => void;
	playerCount: number;
	generation: number;
}

const Menu: React.FC<MenuProps> = ({ onPlay, playerCount, generation }) => {
	return (
		<div className="menu">
			<button onClick={onPlay}>Play</button>
			<p>Player Count: {playerCount}</p>
			<p>Generation: {generation}</p>
		</div>
	);
};

export default Menu;
