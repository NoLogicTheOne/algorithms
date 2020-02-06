let tree = require('./binaryTree')
const random = (min, max) => ((Math.random() * (max - min)) | 0) + min

const createTestData = () => 
    [].reduce.call(arguments, (a, c) => {
        return a.add(c)
    }, new tree())

describe("correct load", () => {
    it("is a function", () => {
        expect(typeof tree).toEqual('function')
    })
})