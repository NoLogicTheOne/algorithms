const CountSort = (arr, compareFunc = (a, b) => a > b) => {
	let len = arr.length
	let result = new Array(len)
	
	const getPosition = currentPosittion => {
		let position = 0
		for(let i = 0; i < len; i++){
			if(i == currentPosittion) continue
			if(!compareFunc(arr[i], arr[currentPosittion])){
				position++
			}
		}
		while(result[position] !== undefined){
			// By default, compareFunc is strict, then position for similar cases get a maximum
			position--
		}
		return position
	}

	for (let i = 0; i < len; i++) {
		result[getPosition(i)] = arr[i]
	}

	return result
}

module.exports = CountSort