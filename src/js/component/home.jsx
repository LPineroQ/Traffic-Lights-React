import React from "react";
import Footer from "./footer.jsx";
import Cta from "./cta.jsx";
import NavBar from "./navbar.jsx";
import Cards from "./Cards.jsx";

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
	);
};

export default Home;
