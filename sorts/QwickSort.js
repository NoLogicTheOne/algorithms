const QwickSort = (arr, compareFunc = (a, b) => a > b) => {
	let len = arr.length

	if(len === 1 || len === 0) return arr
	
	let arr1 = [], arr2 = []
	let base = arr[0]

	for(let i = 1; i < len; i++){
		if(!compareFunc(arr[i], base)){
			arr1.push(arr[i])
		} else {
			arr2.push(arr[i])
		}
	}
	
	return [...QwickSort(arr1), base, ...QwickSort(arr2)]
}

module.exports = QwickSort