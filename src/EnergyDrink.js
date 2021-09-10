import React from 'react';
import energy_drink from './img/energy_drink.jpg';

const EnergyDrink = () => {
	return (
		<div className="Energy Drink">
			<h3>Energy Drink</h3>
			<h5>$2.25</h5>
			<img src={energy_drink} width="300px" alt="energy drink" />
			<br />
			<small>
				<i>'Unleashed'</i>
			</small>
		</div>
	);
};

export default EnergyDrink;
