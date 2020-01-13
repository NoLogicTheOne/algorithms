const swap = (arr, i1, i2) => {
	if(i1 === i2) return arr
	if(
		(!arr[i1] && arr[i1] !== 0) || 
		(!arr[i2] && arr[i2] !== 0)
	) return arr

	let res = [...arr]
	res[i1] = arr[i2]
	res[i2] = arr[i1]
	
	return res
}

module.exports = swap