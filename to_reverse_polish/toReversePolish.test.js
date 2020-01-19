const { 
	toReversePolish,
	buildWagons
 } = require("./toReversePolish")

 const reversePolish = require("../reverse_polish/reversePolish")
// later i will write random tests for it
// const random = (min, max) => (Math.random() * (max - min) + min) | 0

describe("correct load", ()=> {
	it("load", () => {
		expect(typeof toReversePolish).toEqual("function")
	})
	it("returned string", () => {
		expect(typeof toReversePolish("1+2")).toEqual("string")
	})
	it("load vagons", () => {
		expect(typeof buildWagons).toEqual("function")
	})
	it("returned array", () => {
		expect(Array.isArray(buildWagons("1+2"))).toEqual(true)
	})
	it("load reversePolish", () => {
		expect(typeof reversePolish).toEqual("function")
	})
})

describe("buildWagons", () => {
	it("sample test", () => {
		expect(buildWagons("5+7")).toEqual(["5","+","7",])
	})
	it("add brackets", () => {
		expect(buildWagons("5*(7+7)")).toEqual(["5","*","(","7","+","7",")"])
	})
	it("multi numbers", () => {
		expect(buildWagons("55+777")).toEqual(["55","+","777"])
	})
	it("multi numbers with brackets and spaces", () => {
		expect(buildWagons("55 + (777 - 324) / 5")).toEqual(["55","+","(","777","-","324",")","/","5"])
	})
})

describe("toReversePolish", () => {
	it("sample test", () => {
		expect(toReversePolish("5+7")).toEqual("5,7,+")
	})
	it("test with multiply", () => {
		expect(toReversePolish("5+7*2")).toEqual("5,7,2,*,+")
	})
	it("test with dividers", () => {
		expect(toReversePolish("5/7+2")).toEqual("5,7,/,2,+")
	})
	it("test with brackets", () => {
		expect(toReversePolish("5*(7+4)")).toEqual("5,7,4,+,*")
	})
	it("combo test", () => {
		let variation = "555 *  ((74+4) * 5) / 15"
		let result = eval(variation)
		let myResult = reversePolish(toReversePolish(variation))
		expect(myResult).toEqual(result)
	})
})