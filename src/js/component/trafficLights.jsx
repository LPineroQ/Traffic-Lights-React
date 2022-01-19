import React, { useState } from "react";
import "../../styles/TrafficLights.css";

const TrafficLights = () => {
	const [selectedColor, setSelectedColor] = useState("Light1");

	return (
		<div className="Traffic-lights">
			<div
				onClick={() => setSelectedColor("Light1")}
				className={
					"Light1" + (selectedColor === "Light1" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("Light2")}
				className={
					"Light2" + (selectedColor === "Light2" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("Light3")}
				className={
					"Light3" + (selectedColor === "Light3" ? " glow" : "")
				}></div>
		</div>
	);
};

export default TrafficLights;
