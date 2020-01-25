const meatMiddle = require('./meatMiddle')

describe("correct loaded", () => {

	it("load", () => {
		let expected     = 'function';
		let testingValue = typeof meatMiddle;

		expect(testingValue).toEqual(expected);
	})
	// it("recived number", () => {
	// 	let expected     = 'number';
	// 	let testingValue = typeof meatMiddle(5, [1, 2, 3, 4]);

	// 	expect(testingValue).toEqual(expected);
	// })
})

describe('sample tests', () => {
	// it('less than 3 elements', () => {
	// 	let expected     = 0;
	// 	let testingValue = meatMiddle(5, [1, 2]);

	// 	expect(testingValue).toEqual(expected);	
	// })
	// it('treshhold is 0', () => {
	// 	let expected     = 0;
	// 	let testingValue = meatMiddle(0, [1, 2, 3, 4, 5]);

	// 	expect(testingValue).toEqual(expected);	
	// })
	it('items are strings', () => {
		let expected     = 4;
		let testingValue = meatMiddle(8, ["1", "2", "3", "4", "5"]);

		expect(testingValue).toEqual(expected);	
	})
	// it('sample working', () => {
	// 	let expected     = 4;
	// 	let testingValue = meatMiddle(8, [1, 2, 3, 4, 5]);

	// 	expect(testingValue).toEqual(expected);	
	// })
})