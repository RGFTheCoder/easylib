import { test, zip, p } from '../build/main.js';

test.add(
	'ZIP',
	() => {
		const a = [1, 2, 3];
		const b = ['a', 'b', 'c'];

		const exp = [
			[1, 'a'],
			[2, 'b'],
			[3, 'c'],
		];

		const res = zip(a)(b);

		if (JSON.stringify(exp) == JSON.stringify(res)) {
			return;
		}

		return `Got ${JSON.stringify(res)} expected ${JSON.stringify(exp)}`;
	},
	'BASIC01'
);

test.runTests();
p`Hello my id is ${[1, 2, 3, , 4, 5, 6, 4]}`;
