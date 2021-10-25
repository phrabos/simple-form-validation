import { User, UserSummary } from './Users';

type UserJSON = {
	results: User[];
	info: {
		seed: string;
		results: number;
		page: number;
		version: string;
	};
};

export const fetchUser = async (pageNumber: number): Promise<UserSummary> => {
	const res = await fetch(`https://randomuser.me/api?page=${pageNumber}`);
	const data: UserJSON = await res.json();
	return {
		firstName: data.results[0].name.first,
		lastName: data.results[0].name.last,
		age: data.results[0].dob.age,
		id: data.results[0].login.uuid,
		image: data.results[0].picture.thumbnail,
	};
};

export const fetchIntermediateUser = async (): Promise<UserSummary[]> => {
	const res = await fetch(`https://randomuser.me/api?results=20`);
	const data: UserJSON = await res.json();
	return data.results.map((user) => ({
		firstName: user.name.first,
		lastName: user.name.last,
		age: user.dob.age,
		id: user.login.uuid,
		image: user.picture.thumbnail,
	}));
};

export type Location = {
	firstName: string;
	lastName: string;
	streetNumber: number;
	streetName: string;
	city: string;
	state: string;
	country: string;
	postcode: number;
	latitude: number;
	longitude: number;
	timezoneOffset: string;
	timezoneDescription: string;
};

type LocationWithHeaders = {
	data: Location[];
	headers: any;
};

export const fetchAndFlattenLocation =
	async (): Promise<LocationWithHeaders> => {
		const res = await fetch(`https://randomuser.me/api?results=20`);
		const data: UserJSON = await res.json();
		const flatLocation = data.results.map((person) => ({
			firstName: person.name.first,
			lastName: person.name.last,
			streetNumber: person.location.street.number,
			streetName: person.location.street.name,
			city: person.location.city,
			state: person.location.state,
			country: person.location.country,
			postcode: person.location.postcode,
			latitude: person.location.coordinates.latitude,
			longitude: person.location.coordinates.longitude,
			timezoneOffset: person.location.timezone.offset,
			timezoneDescription: person.location.timezone.description,
		}));

		return { data: flatLocation, headers: Object.keys(flatLocation[0]) };
	};
