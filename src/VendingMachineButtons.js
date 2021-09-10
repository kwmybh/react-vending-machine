import React from 'react';
import { NavLink } from 'react-router-dom';
import './VendingMachineButtons.css';

const VendingMachineButtons = () => {
	return (
		<nav className="VendingMachineButtons">
			<NavLink exact to="/chips">
				Chips
			</NavLink>
			<NavLink exact to="/candy_bar">
				Candy Bar
			</NavLink>
			<NavLink exact to="/candy">
				Candy
			</NavLink>
			<NavLink exact to="/energy_drink">
				Drink
			</NavLink>
			<hr />
			<NavLink to="/" className="clear">
				Clear Selection
			</NavLink>
		</nav>
	);
};
export default VendingMachineButtons;
