import React from "react";
import "../../styles/Cards.css";

const Cards = () => {
	return (
		<div className="card m-3" id="newCard">
			<img
				src="https://iupac.org/100/wp-content/uploads/sites/2/chemist/3237/Koala.jpg"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="https://4geeksacademy.com/" class="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Cards;
