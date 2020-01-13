const mergeSorted = require("./MergeSortedArrays.js")

describe("loaded", () => {
	it("load func", () => {
		expect(typeof mergeSorted).toEqual("function")
	})
	it("returned array", () => {
		expect(Array.isArray(mergeSorted([], []))).toEqual(true)
	})
})

describe("exceptions", () => {
	it("one argument", () => {
		expect(mergeSorted([])).toEqual([])
	})
	it("no arguments", () => {
		expect(mergeSorted()).toEqual([])
	})
	it("incorrect argument", () => {
		expect(mergeSorted(5, [])).toEqual([])
	})
})

describe("random tests", () => {
	const compare = (a, b) => a - b
	const random = (min, max) => ((Math.random() * (max - min)) | 0) + min
	const getArrOfValues = () => {
		let arr = [], i = random(50, 100)
		while(i--){
			arr.push(random(-10000, 10000))
		}
		return arr
	}
	
	for(let i = 0; i < 50; i++){
		let arr1 = getArrOfValues().sort(compare)
		let arr2 = getArrOfValues().sort(compare)
		let arr3 = [...arr1, ...arr2].sort(compare)
		// it("random test " + arr1, () => {
		it("random test", () => {
			expect(mergeSorted(arr1, arr2, (a, b) => a > b)).toEqual(arr3)
		})
	}
})