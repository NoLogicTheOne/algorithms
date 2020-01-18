const isNumber = variable => +variable === +variable

const toReversePolish = function(str) {
	let stack = []
	let vagons = buildVagons(str)

	return str
}

function buildVagons(str) {
	let temp = ""
	
	return str.split("").reduce((a, c, i, arr) => {
		if(!isNumber(c) || !isNumber(arr[i + 1])) {
			let res = [...a, temp + c]
			temp = ""
			return res
		}		
		temp += c
		return a
	}, [])
}

module.exports = {
	toReversePolish,
	buildVagons
}