const isNumber = variable => +variable === +variable

const toReversePolish = function(str) {
	let wagons = buildWagons(str)
	//wagons are an abstraction proposed by E.W. Dijkstra to denote the entities of an expression
	let stack = []
	const checkStackTop = () => stack[stack.length - 1]
	
	let result = []
	let priority = {
		"V": 4,
		"*": 3,
		"/": 3,
		"+": 2,
		"-": 2,
		"(": 0
	}

	for(let i = 0, len = wagons.length; i < len; i++){	
		let wagon = wagons[i]
		
		if(isNumber(wagon)){
			result.push(wagon)
			continue
		}

		if(wagon == "("){
			stack.push("(")
			continue
		}

		if(wagon == ")"){
			while(checkStackTop() !== "("){
				result.push(stack.pop())
				if(checkStackTop() === undefined){
					throw new Error("incorrect brackets expression")
				}
			}
			// we have to pop '('
			stack.pop()
			continue
		}

		let symPriority = priority[wagon]

		if(symPriority !== undefined){
			if((checkStackTop() === undefined) || (priority[checkStackTop()] < symPriority)){
				stack.push(wagon)
				continue
			}
			
			do {
				result.push(stack.pop())
			} while(priority[checkStackTop()] >= symPriority)
			
			stack.push(wagon)
			continue
		}

		throw new Error("given unexpected symbol")
	}
	
	while(stack[0] !== undefined){
		result.push(stack.pop()) 
	}

	return result.join(",").replace(/V/g, "sqrt")
}


function buildWagons(str) {
	let temp = ""
	
	return str.replace(/\s/g,"")
		.replace(/sqrt/g,"V") // V is like sqrt-symbol
		.split("")
		.reduce((a, c, i, arr) => {
			if(!isNumber(c) || !isNumber(arr[i + 1])) {
				let res = [...a, temp + c]
				// some nubers has more than one digit
				temp = ""
				return res
			}		
			temp += c
			return a
		}, [])
}

module.exports = {
	toReversePolish,
	buildWagons
}