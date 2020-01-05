const { prefixAll, KMP } = require("./KMP.js")

describe("all loaded", () => {
	it("load prefix", () => {
		expect(typeof prefixAll).toEqual("function")
	})
	it("load KMP", () => {
		expect(typeof KMP).toEqual("function")
	})
})

describe("test prefix", () => {
	it("prefix[0] always 0", () => {
		expect(prefixAll("qwerty")[0]).toEqual(0)
	})
	it("prefix aaa = 0,1,2", () => {
		expect(prefixAll("aaa")).toEqual([0,1,2])
	})
	it("two equal char at start - prefix[1] = 1", () => {
		expect(prefixAll("qqerty")).toEqual([0,1,0,0,0,0])
	})
	it("prefix with crossing", () => {
		expect(prefixAll("abcabca")[6]).toEqual(4)
		//probably if we have prefix[x] = b that we have prefix[x-a]=b-a, where b-a>=0
	})
})

describe("test KMP", () => {
	it("KMP equal is true", () => {
		expect(KMP("abc", "abc")).toEqual(true)
	})
	it("KMP sample false", () => {
		expect(KMP("abcd", "abd")).toEqual(false)
	})
	it("KMP sample true", () => {
		expect(KMP("ccbccf", "ccc")).toEqual(false)
	})
})

describe("random tests for KMP", () => {
	const arrOfValues = ["a", "b", "c", "d"]
	const random = (min, max) => ((Math.random() * max) | 0) + min
	const randomCollection = len => {
		let str = ""
		for(let i = 0; i < len; i++){
			str += arrOfValues[random(0, 3)]
		}
		return str
	}

	for(let i = 0; i < 50; i++){
		let str = randomCollection(random(15, 80))
		let strCompare = randomCollection(random(2, 10))

		it(str + " - " + strCompare + " (" + str.includes(strCompare) + ")", () => {
			expect(KMP(str,strCompare)).toEqual(str.includes(strCompare))
		})
	}
})