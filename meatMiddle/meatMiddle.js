function meatMiddle(t, array){
	let len = array.length
	let result = 0
	let median = t / 3

	array.sort((a,b) => a - b)

	for(let i1 = 0; i1 <= median; i++){
		let i2 = i1 + 1
		let i3 = len - 1

		while(i2 < i3){
			if(array[i1] + array[i2] + array[i3] > t){
				i3--
			} else {
				result += i3 - i2
				i2++
			}
		}
	}

	return result
}

