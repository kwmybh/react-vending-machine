import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Chips from './Chips';
import NoSnack from './NoSnack';
import EnergyDrink from './EnergyDrink';
import CandyBar from './CandyBar';
import Candy from './Candy';
import VendingMachineButtons from './VendingMachineButtons';
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<h1>Vending Machine</h1>
			<BrowserRouter>
				<div className="VendingMachine-selector">
					<span className="VendingMachine-instructions">Choose a snack:</span>
					<VendingMachineButtons />
				</div>
				<hr />
				<div className="VendingMachine-selection">
					<Route exact path="/chips">
						<Chips />
					</Route>
					<Route exact path="/energy_drink">
						<EnergyDrink />
					</Route>
					<Route exact path="/candy_bar">
						<CandyBar />
					</Route>
					<Route exact path="/candy">
						<Candy />
					</Route>
					<Route exact path="/">
						<NoSnack />
					</Route>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default VendingMachine;
