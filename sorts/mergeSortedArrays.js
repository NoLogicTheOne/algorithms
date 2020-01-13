const mergeSortedArrs = (array1, array2, compareFunction = (a, b) => a > b) => {
	let arr1 = Array.isArray(array1) ? array1 : []
	let arr2 = Array.isArray(array2) ? array2 : []
	
	let i1 = 0, i2 = 0
	let l1 = arr1.length, l2 = arr2.length
	let res = []

	while((i1 < l1) && (i2 < l2)){
		if(!compareFunction(arr1[i1], arr2[i2])){
			res.push(arr1[i1++])
		} else {
			res.push(arr2[i2++])
		}
	}
	while(i1 < l1){
		res.push(arr1[i1++])
	}
	while(i2 < l2){
		res.push(arr2[i2++])
	}
	return res
}

module.exports = mergeSortedArrs