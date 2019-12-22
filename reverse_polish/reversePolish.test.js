const reversePolish = require('./reversePolish.js')

test('function was success imported', () => {
 	expect(typeof reversePolish).toBe('function');
});

describe('work sample', () => {
	test("+", () => {
		expect(reversePolish("2,3,+")).toBe(5)
	})
	test("-", () => {
		expect(reversePolish("2,3,-")).toBe(-1)
	})
	test("/", () => {
		expect(reversePolish("6,3,/")).toBe(2)
	})
	test("*", () => {
		expect(reversePolish("2,3,*")).toBe(6)
	})
})

describe('work errors', () => {
	test("another sym", () => {
		expect(reversePolish('12,3,4,+,d')).toBe('Error')
	})
	test("incorrect send", () => {
		expect(reversePolish('12,3,4,+')).toBe('Error')
	})
	test("someNumbers with operator at start", () => {
		expect(reversePolish("6,/,3,5,*")).toBe("Error")
	})
})

describe('work difficult', () => {
	test("empty array", () => {
		expect(reversePolish("")).toBe(0)
	})
	test("someNumbers with operator in the end", () => {
		expect(reversePolish("5,2,3,-,*")).toBe(-5)
	})
	test("someNumbers with operator in the middle", () => {
		expect(reversePolish("6,3,/,5,*")).toBe(10)
	})
})