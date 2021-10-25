import React, { useState, useEffect } from 'react';
import { fetchUser } from './userAPI';

export type User = {
	gender: string;
	name: {
		id?: string;
		title: string;
		first: string;
		last: string;
	};
	location: {
		street: {
			number: number;
			name: string;
		};
		city: string;
		state: string;
		country: string;
		postcode: number;
		coordinates: {
			latitude: number;
			longitude: number;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	email: string;
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string;
	};
	dob: {
		date: string;
		age: number;
	};
	registered: {
		date: string;
		age: number;
	};
	phone: string;
	cell: string;
	id: {
		name: string;
		value: number | null;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
		nat: string;
	};
};

export type UserSummary = {
	firstName: string;
	lastName: string;
	image: string;
	age: number;
	id: string;
};

const Users = (): JSX.Element => {
	const [users, setUsers] = useState<UserSummary[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	const handleClick = async (): Promise<void> => {
		const newUser = await fetchUser(pageNumber);
		setUsers((prev) => [...prev, newUser]);
		setPageNumber((prev) => (prev += 1));
	};

	useEffect(() => {
		fetchUser(1).then((user) => setUsers((prev) => [...prev, user]));
		setPageNumber((prev) => (prev += 1));
	}, [setPageNumber]);
	return (
		<>
			<h1>Users API</h1>
			{users.map((user) => (
				<section key={user.id}>
					<img src={user.image} alt={user.firstName} />
					<p>{`Name: ${user.firstName} ${user.lastName}`}</p>
					<p>{`Age: ${user.age}`}</p>
				</section>
			))}
			<button onClick={handleClick}>get new user</button>
		</>
	);
};

export default Users;
