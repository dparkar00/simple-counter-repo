import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


import "../styles/index.css";

function SecondsCounter(props) {
	return (
		<div className="Counter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
            <div className="six">{props.digitSix % 10}</div>
            <div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
    digitSix:PropTypes.number,
    digitFive:PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
    const six = Math.floor(counter / 1000000);
    const five = Math.floor(counter / 100000);
	const four = Math.floor(counter / 10000);
	const three = Math.floor(counter / 1000);
	const two = Math.floor(counter / 100);
	const one = Math.floor(counter / 10);

	counter++;

	//render your react application
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
            digitFive={five}
            digitSix={six}
		/>,
		document.querySelector("#app")
	); 
}, 300);
