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
