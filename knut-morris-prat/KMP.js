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

}

module.exports = {
	prefixAll,
	KMP
}