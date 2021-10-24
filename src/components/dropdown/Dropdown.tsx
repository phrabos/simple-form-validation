import React, { useState } from 'react';

const Dropdown = (): JSX.Element => {
	const [selectedFruit, setSelectedFruit] = useState('');
	const fruitsArray = [
		'apple 🍎',
		'banana 🍌',
		'pineapple 🍍',
		'strawberry 🍓',
		'grape 🍇',
	];

	return (
		<section
			style={{
				width: '25vw',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1>Basic Dropdown</h1>
			<select
				value={selectedFruit}
				onChange={(event) => {
					setSelectedFruit(event.target.value);
					console.log(event.target);
				}}
			>
				<option>--Pick a Fruit--</option>
				{fruitsArray.map((fruit) => (
					<option value={fruit} key={fruit}>
						{fruit.split(' ')[0]}
					</option>
				))}
			</select>
			{selectedFruit ? (
				<p>You selected {selectedFruit}!</p>
			) : (
				<p>select a fruit above</p>
			)}
		</section>
	);
};

export default Dropdown;
