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

const numsArr = ['one', 'two', ['three', 'four', ['five', 'six', ['seven']]]];

const flattenObj = (userObj, prefix = '') => {
	const keysArr = Object.keys(userObj);
	const flatObj = keysArr.reduce((acc, curr) => {
		const pre = prefix.length ? prefix + '.' : '';
		if (typeof userObj[curr] === 'object')
			Object.assign(acc, flattenObj(userObj[curr], pre));
		else acc[pre + curr] = userObj[curr];
		return acc;
	}, {});

	return flatObj;
};

const flattenArr = (arr) => {
	return arr.reduce((acc, curr) => {
		if (Array.isArray(curr)) {
			//const deepNest = flattenArr(curr)
			acc = [...acc, ...flattenArr(curr)];
		} else acc = [...acc, curr];
		return acc;
	}, []);
};

const newFlatObj = flattenObj(obj);
console.log(newFlatObj);
const newFlatArr = flattenArr(numsArr);
//console.log(newFlatArr);
