// this test will be used for all sorted functions
// you can test any functon by change required file
const sortFunc = require("./MergeSort.js")

describe("correct loaded", () => {
	it("load func", () => {
		expect(typeof sortFunc).toEqual("function")
	})
	it("returned array", () => {
		expect(Array.isArray(sortFunc([]))).toEqual(true)
	})
})

describe("random tests", () => {
	const random = (min, max) => ((Math.random() * (max - min)) | 0) + min
	const getArrOfValues = () => {
		let arr = [], i = 10
		while(i--){
			arr.push(random(-100, 100))
		}
		return arr
	}
	
	for(let i = 0; i < 50; i++){
		let arr1 = getArrOfValues()
		let arr2 = [...arr1].sort((a, b) =>  a - b)
		it("random test " + arr1, () => {
			expect(sortFunc(arr1)).toEqual(arr2)
		})
	}
})

