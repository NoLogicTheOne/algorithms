const bubbleSort = arr => {
	let len = arr.length
	const swap = (arr, i1, i2) => {
		let res = [...arr]
		res[i1] = arr[i2]
		res[i2] = arr[i1]
		return res
	}

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