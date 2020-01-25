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
	it("work with sqrt", () => {
		expect(buildWagons("55+sqrt777")).toEqual(["55","+","V","777"])
	})
	it("multi numbers with brackets and spaces", () => {
		expect(buildWagons("55 + (777 - 324) / 5")).toEqual(["55","+","(","777","-","324",")","/","5"])
	})
})

describe("toReversePolish", () => {
	it("sample test", () => {
		expect(toReversePolish("5+sqrt7")).toEqual("5,7,sqrt,+")
	})
	it("test with multiply", () => {
		expect(toReversePolish("5+7*2")).toEqual("5,7,2,*,+")
	})
	it("test with dividers", () => {
		expect(toReversePolish("5/7+2")).toEqual("5,7,/,2,+")
	})
	it("test with brackets 5*sqrt(7+4)", () => {
		expect(toReversePolish("5*sqrt(7+4)")).toEqual("5,7,4,+,sqrt,*")
	})
	it("combo test", () => {
		let variation = "555 *  (sqrt(47 + 2) * 5)/ 15"
		let result = 1295
		let myResult = reversePolish(toReversePolish(variation))
		expect(myResult).toEqual(result)
	})
	it("catching break breackets", () => {
		let badCall = () => {
			toReversePolish("555 *  ((74 +4) * 5)/ 15)")
		}

		expect(badCall).toThrow('brackets')
	})
	it("catching unexpected symbols", () => {
		let badCall = () => {
			toReversePolish("555 *  ((74 +4d) * 5)/ 15")
		}

		expect(badCall).toThrow('unexpected symbol')
	})
})