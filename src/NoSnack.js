import React from 'react';
import placeholder from './img/placeholder.png';

const NoSnack = () => {
	return (
		<div className="NoSnack">
			<h3>Waiting</h3>
			<h5>$0.00</h5>
			<img src={placeholder} width="300px" alt="placeholder" />
			<br />
			<small>
				<i>'Please, take your time'</i>
			</small>
		</div>
	);
};

export default NoSnack;
