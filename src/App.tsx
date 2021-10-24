import React, { useState } from 'react';

import './App.css';
type FormInputObj = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
};
function App(): JSX.Element {
	const [formInput, setFormInput] = useState<FormInputObj>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});

	const [showFormResults, setShowFormResults] = useState(false);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: '5px',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1 aria-label="form-header" className="App">
				Basic Form
			</h1>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					setShowFormResults(true);
				}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '50vw',
					margin: '5px',
				}}
			>
				<input
					type="text"
					placeholder="first name"
					value={formInput.firstName}
					onChange={(event) =>
						setFormInput({ ...formInput, firstName: event.target.value })
					}
				/>
				<input
					type="text"
					placeholder="last name"
					value={formInput.lastName}
					onChange={(event) =>
						setFormInput({ ...formInput, lastName: event.target.value })
					}
				/>
				<input
					type="text"
					placeholder="email"
					value={formInput.email}
					onChange={(event) =>
						setFormInput({ ...formInput, email: event.target.value })
					}
				/>
				<input
					type="text"
					placeholder="phone"
					value={formInput.phone}
					onChange={(event) =>
						setFormInput({ ...formInput, phone: event.target.value })
					}
				/>
				<button type="submit">submit</button>
			</form>
			{showFormResults && (
				<>
					<p>{formInput.firstName}</p>
					<p>{formInput.lastName}</p>
					<p>{formInput.email}</p>
					<p> {formInput.phone}</p>
				</>
			)}
			<button
				onClick={() => {
					setFormInput({ firstName: '', lastName: '', email: '', phone: '' });
					setShowFormResults(false);
				}}
				style={{ width: '50vw', margin: '5px' }}
			>
				reset form
			</button>
		</div>
	);
}

export default App;
