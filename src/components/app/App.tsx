import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import Form from '../form/Form';
import Radio from '../radio/Radio';

import './App.css';

function App(): JSX.Element {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Form />
			<Dropdown />
			<Radio />
		</div>
	);
}

export default App;
