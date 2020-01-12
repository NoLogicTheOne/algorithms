const swap = require("./swap")

const bubbleSort = arr => {
	let len = arr.length

	for(let i = 0; i < len; i++){
		for(let j = 0; j < len; j++){
			if(arr[j] > arr[j+1]){
				arr = swap(arr, j, j+1)
			}
		}
	}

	return arr
}

module.exports = bubbleSort