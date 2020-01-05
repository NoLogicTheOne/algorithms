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
	it("two equal char at start - prefix[1] = 1", () => {
		expect(prefixAll("qqerty")[1]).toEqual(1)
	})
	it("prefix with crossing", () => {
		expect(prefixAll("abcabca")[6]).toEqual(4)
		//probably if we have prefix[x] = b that we have prefix[x-a]=b-a, where b-a>=0
	})
})