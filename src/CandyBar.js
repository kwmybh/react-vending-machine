import React from 'react';
import candy_bar from './img/candybar.jpg';

const CandyBar = () => {
	return (
		<div className="Candy Bar">
			<h3>Candy Bar</h3>
			<h5>$2.25</h5>
			<img src={candy_bar} width="300px" alt="a stack of chips" />
			<br />
			<small>
				<i>'Hungry, grab a snickers'</i>
			</small>
		</div>
	);
};

export default CandyBar;
