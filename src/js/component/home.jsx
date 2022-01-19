import React from "react";
import Footer from "./footer.jsx";
import Cta from "./cta.jsx";
import NavBar from "./navbar.jsx";
import Cards from "./Cards.jsx";

<<<<<<< HEAD
//include images into your bundle
import TrafficLights from "./trafficLights.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<TrafficLights></TrafficLights>
		</div>
=======
const Home = () => {
	return (
		<div>
    <NavBar></NavBar>
			<Cta />
			<div className="container d-flex">
				<Cards></Cards>
				<Cards></Cards>
				<Cards></Cards>
				<Cards></Cards>
			</div>
     <Footer />
    </div>
>>>>>>> cd32d7fe14dd452532fa2f9d9bc9dcbb95cbd0d8
	);
};

export default Home;
