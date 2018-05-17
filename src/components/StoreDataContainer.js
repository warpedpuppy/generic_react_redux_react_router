import React from 'react';
import './StoreDataContainer.css';

export default function StoreDataContiner(props){

	return (
		<div className="panel">
		<button onClick={(e) => props.buttonClicked() }>push number 5 into array</button>
		<div>store array: {props.array}</div>
		</div>
		)

}