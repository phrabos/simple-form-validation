import React, { useState } from 'react';

type FormInputObj = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
};
type FormErrorsObj = {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
};
const Form = (): JSX.Element => {
	const [formInput, setFormInput] = useState<FormInputObj>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});

	const [showFormResults, setShowFormResults] = useState(false);
	const [formErrors, setFormErrors] = useState<FormErrorsObj>(
		{} as FormErrorsObj
	);

	const validateForm = (
		firstName: string,
		lastName: string,
		email: string,
		phone: string
	): FormErrorsObj => {
		let errors: FormErrorsObj = {};
		if (!firstName) errors.firstName = 'first name is required';
		if (!lastName) errors.lastName = 'last name is required';
		if (!email) errors.email = 'email is required';
		if (!phone) errors.phone = 'phone is required';
		return errors;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const errors = validateForm(
			formInput.firstName,
			formInput.lastName,
			formInput.email,
			formInput.phone
		);
		console.log(errors);
		if (Object.keys(errors).length === 0) {
			setShowFormResults(true);
			setFormErrors({});
		} else setFormErrors(errors);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: '5px',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
			}}
		>
			<h1 aria-label="form-header" className="App">
				Basic Form
			</h1>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '25vw',
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
				{formErrors.firstName && (
					<span style={{ color: 'red' }}>{formErrors.firstName}</span>
				)}

				<input
					type="text"
					placeholder="last name"
					value={formInput.lastName}
					onChange={(event) =>
						setFormInput({ ...formInput, lastName: event.target.value })
					}
				/>
				{formErrors.lastName && (
					<span style={{ color: 'red' }}>{formErrors.lastName}</span>
				)}
				<input
					type="text"
					placeholder="email"
					value={formInput.email}
					onChange={(event) =>
						setFormInput({ ...formInput, email: event.target.value })
					}
				/>
				{formErrors.email && (
					<span style={{ color: 'red' }}>{formErrors.email}</span>
				)}
				<input
					type="text"
					placeholder="phone"
					value={formInput.phone}
					onChange={(event) =>
						setFormInput({ ...formInput, phone: event.target.value })
					}
				/>
				{formErrors.phone && (
					<span style={{ color: 'red' }}>{formErrors.phone}</span>
				)}
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
					setFormErrors({});
				}}
				style={{ width: '25vw', margin: '5px' }}
			>
				reset form
			</button>
		</div>
	);
};

export default Form;
