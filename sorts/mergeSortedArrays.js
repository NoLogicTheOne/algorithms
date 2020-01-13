const mergeSortedArrs = (arr1, arr2, compareFunction) => {
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