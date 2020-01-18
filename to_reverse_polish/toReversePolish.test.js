const { 
	toReversePolish,
	buildVagons
 } = require("./toReversePolish")

describe("correct load", ()=> {
	it("load", () => {
		expect(typeof toReversePolish).toEqual("function")
	})
	it("returned string", () => {
		expect(typeof toReversePolish("1+2")).toEqual("string")
	})
	it("load vagons", () => {
		expect(typeof buildVagons).toEqual("function")
	})
	it("returned array", () => {
		expect(Array.isArray(buildVagons("1+2"))).toEqual(true)
	})
})

describe("buildVagons", () => {
	it("sample test", () => {
		expect(buildVagons("5+7")).toEqual(["5","+","7",])
	})
	it("add brackets", () => {
		expect(buildVagons("5*(7+7)")).toEqual(["5","*","(","7","+","7",")"])
	})
	it("multi numbers", () => {
		expect(buildVagons("55+777")).toEqual(["55","+","777"])
	})
})