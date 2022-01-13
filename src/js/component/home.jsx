import React from "react";

//include images into your bundle
import NavBar from "./navbar.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			Hola
			<div className="container d-flex">
				<Cards></Cards>
				<Cards></Cards>
				<Cards></Cards>
				<Cards></Cards>
			</div>
		</div>
	);
};

export default Home;
