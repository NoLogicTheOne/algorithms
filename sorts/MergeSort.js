const mergeSortedArrs = require("./mergeSortedArrays.js")

function mergeSort(arr, compareFunction = (a, b) => a > b) {
	let stage = 1
	let stageLevel = 1
	let len = arr.length
	let temp = [...arr]

	const fillPart = arr => {
		return arr.slice(0, stageLevel).filter(c => c != undefined)
	}

	const divideAndMergeArrs = (arr) => {
		let temp = [...arr], counter = 0
		let res = []

		while(res.length < len){

			let arr1 = fillPart(temp)
			temp = temp.slice(stageLevel)
			
			let arr2 = fillPart(temp)
			temp = temp.slice(stageLevel)

			res.push(...mergeSortedArrs(arr1, arr2, compareFunction))
		}

		return res
	}

	while(stageLevel < len){
		temp = divideAndMergeArrs(temp)
		stage++
		stageLevel *= 2
	}
	
	return temp
}

module.exports = mergeSort