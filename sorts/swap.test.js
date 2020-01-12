const swap = require("./swap.js")

describe("sample tests", () => {
	it("right order", ()=> {
		expect(swap([1,2], 0, 1)).toEqual([2,1])
	})
	it("desc order", ()=> {
		expect(swap([2,1], 1, 0)).toEqual([1,2])
	})
	it("incorrect argunents", ()=> {
		expect(swap([-47,6,29,-55,-6], 5, 34)).toEqual([-47,6,29,-55,-6])
	})
	it("similar case", ()=> {
		expect(swap([-92,-14,-14], 1, 1)).toEqual([-92,-14,-14])
	})
})