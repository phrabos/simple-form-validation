import React, { useState, useEffect } from 'react';
import { fetchAndFlattenLocation, Location } from './userAPI';

const IntermediateUsers = (): JSX.Element => {
	const [locations, setLocations] = useState<Location[]>([]);
	const [loading, setLoading] = useState(true);
	const [headers, setHeaders] = useState([]);

	useEffect(() => {
		fetchAndFlattenLocation()
			.then((data) => {
				setLocations(data.data);
				setHeaders(data.headers);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);
	if (loading) return <h1>Loading...</h1>;
	return (
		<>
			<h1>Intermediate Users</h1>
			{
				<table>
					<thead>
						<tr>
							{headers.map((key, idx) => (
								<th key={idx}>{key}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{locations.map((location, locationIdx) => (
							<tr key={locationIdx}>
								{headers.map((header, headerIdx) => (
									<td key={headerIdx}>{location[header]}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			}
		</>
	);
};

export default IntermediateUsers;
