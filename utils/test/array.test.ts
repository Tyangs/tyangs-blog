import { getLast } from '../array';

describe('get array last node', () => {
	it('return last string when array is string list', () => {
		const array = ['this', 'is', 'youngs', 'blog'];

		const lastNode = getLast(array);
		expect(lastNode).toBe('blog');
	});
	it('return last object when array is object list', () => {
		const array = [
			{
				name: 'young',
				age: 22,
			},
			{
				name: 'hui',
				age: 22,
			},
		];

		const lastNode = getLast(array);
		expect(lastNode).toEqual({
			name: 'hui',
			age: 22,
		});
	});
	it('return undefined when array is empty', () => {
		const array: any[] = [];

		const lastNode = getLast(array);
		expect(lastNode).toBeUndefined();
	});
});
