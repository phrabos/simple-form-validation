const obj = {
	person: {
		name: {
			fist: 'danielle',
			middle: 'alissa',
		},
		location: {
			us: {
				city: 'portland',
				state: 'OR',
			},
		},
	},
};

const flattenObj = (userObj, prefix = '') => {
	const keysArr = Object.keys(userObj);
	const flatObj = keysArr.reduce((acc, curr) => {
		const pre = prefix.length ? prefix + '.' : '';
		if (typeof userObj[curr] === 'object')
			Object.assign(acc, flattenObj(userObj[curr], pre));
		else acc[pre + curr] = userObj[curr];
		return acc;
	}, {});
	//console.log(flatObj);
	return flatObj;
};

console.log(flattenObj(obj));
