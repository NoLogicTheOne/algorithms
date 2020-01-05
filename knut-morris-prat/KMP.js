const prefixAll = str => {
	const prefixOnce = str => {
		let len = str.length //optimisation - too often we ask the length
		let str2 = str.slice(1)
		let str1 = str.slice(0, --len) //after that len will be used as length of substring 

		while(len > 0){
			if(str1 == str2) return len
			str2 = str2.slice(1)
			str1 = str1.slice(0, len - 1)
			len--
		}

		return 0
	}
	
	let result = [0] // prefix[0] always = 0
	for(let i = 2, len = str.length; i <= len; i++){
		let pref = prefixOnce(str.slice(0, i))
		result.push(pref) //looking better for readable
	}
	return result
}

const KMP = (str, strCompare) => {
	const prefix = prefixAll(strCompare)

	let i = 0, //adress for str 
		j = 0, //adress for strCompare
		len = str.length

	while(i < len){
		// 1 stage - install
		// we can use includes(str[j]), but it a cheat=) 
		// as we can use str.includes(strCompare)
		while(str[i] !== strCompare[j]){
			i++
			j = 0 // so important!
			if(i == len) return false
		}
		//2 stage - first compare
		while(str[i] == strCompare[j]){
			i++
			j++
			if(j == strCompare.length) {
				return true
			}
			if(i == len) return false
		}
		//3 stage - shift
		j = prefix[j-1]
	}

	return false
}

module.exports = {
	prefixAll,
	KMP
}