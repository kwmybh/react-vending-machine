import React from 'react';
import chips from './img/chips.jpg';

const Chips = () => {
	return (
		<div className="Chips">
			<h3>Chips</h3>
			<h5>$2.25</h5>
			<img src={chips} width="300px" alt="a stack of chips" />
			<br />
			<small>
				<i>'Once You Pop...'</i>
			</small>
		</div>
	);
};

export default Chips;
