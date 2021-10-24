import React, { useState } from 'react';

const Radio = (): JSX.Element => {
	const [selectedColor, setSelectedColor] = useState('');
	return (
		<>
			<h1>Basic Radio Button</h1>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<label
					style={{
						backgroundColor: 'blue',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					Blue
					<input
						name="colors"
						value="blue"
						type="radio"
						checked={selectedColor === 'blue'}
						onChange={(event) => setSelectedColor(event.target.value)}
					/>
				</label>

				<label
					style={{
						backgroundColor: 'green',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					Green
					<input
						name="colors"
						value="green"
						type="radio"
						checked={selectedColor === 'green'}
						onChange={(event) => setSelectedColor(event.target.value)}
					/>
				</label>
				<label
					style={{
						backgroundColor: 'yellow',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					Yellow
					<input
						name="colors"
						value="yellow"
						type="radio"
						checked={selectedColor === 'yellow'}
						onChange={(event) => setSelectedColor(event.target.value)}
					/>
				</label>
				<label
					style={{
						backgroundColor: 'purple',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					Purple
					<input
						name="colors"
						value="purple"
						type="radio"
						checked={selectedColor === 'purple'}
						onChange={(event) => setSelectedColor(event.target.value)}
					/>
				</label>
			</form>
			{selectedColor && (
				<p
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<p>Your favorite color is {selectedColor}!</p>
					<span
						style={{
							width: '20px',
							height: '20px',
							backgroundColor: `${selectedColor}`,
						}}
					></span>
				</p>
			)}
		</>
	);
};

export default Radio;
