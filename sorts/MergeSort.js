function mergeSort(arr, compareFunction = (a, b) => a > b) {
	let stage = 1
	let len = arr.length
	let temp = [...arr]

	const mergeSortedArrs = (arr1, arr2) => {
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

	const fillPart = arr => {
		return arr.slice(0, 2**(stage-1)).filter(c => c != undefined)
	}

	const divideAndMergeArrs = (arr) => {
		let temp = [...arr], counter = 0
		let res = []

		while(res.length < len){

			let arr1 = fillPart(temp)
			temp = temp.slice(2**(stage-1))
			
			let arr2 = fillPart(temp)
			temp = temp.slice(2**(stage-1))

			res.push(...mergeSortedArrs(arr1, arr2))
			// console.log({stage,res,arr1,arr2})
		}

		return res
	}

	while((2**(stage-1)) < len){
		temp = divideAndMergeArrs(temp)
		stage++
	}
	
	return temp
}

module.exports = mergeSort