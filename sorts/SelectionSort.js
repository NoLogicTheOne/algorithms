const swap = require("./swap.js")

const SelectionSort = (arr, compareFunc = (a, b) => a > b) => {
	let len = arr.length

	const compareFromIndex = (arr, index) => {
		let res = index
		for(let i = index + 1; i < len; i++){
			if(compareFunc(arr[res], arr[i])){
				res = i
			}
		}
		return res
	}

	for (let i = 0; i < len; i++) {
		let swapping = compareFromIndex(arr, i)
		arr = swap(arr, i, swapping)
	}

	return arr
}

module.exports = SelectionSort