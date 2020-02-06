let BinaryTree = require('./binaryTree')
const random = (min, max) => ((Math.random() * (max - min)) | 0) + min

const createTestData = () => new BinaryTree()

describe("correct load", () => {
    it("is a function", () => {
        expect(typeof BinaryTree).toEqual('function')
    })
    it("has an add function", () => {
        expect(typeof new BinaryTree().add).toEqual('function')
    })
})

describe("correct add", () => {
    it("add single more", () => {
        let tested = new BinaryTree()
        expect(tested.getValue()).toEqual(105)
    })
})