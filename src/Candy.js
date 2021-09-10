import React from 'react';
import candy from './img/candy.jpg';

const Candy = () => {
	return (
		<div className="Candy">
			<h3>Candy</h3>
			<h5>$1.25</h5>
			<img src={candy} width="300px" alt="candy" />
			<br />
			<small>
				<i>'Taste the Rainbow'</i>
			</small>
		</div>
	);
};

export default Candy;
