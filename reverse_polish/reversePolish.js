/*
function reversePolish 
gets a string with a reverse Polish notation
reverse Polish must be a string, operands divided by comma
returns the result of the expression
*/
function reversePolish(str) {
	if(!str) return 0
	const dualOperations = new Set(['+', '-', '/', '*'])
	const singleOperations = new Set(["sqrt"])

	let arr = str.split(",")
	let stack = []

	for(let i = 0, len = arr.length; i < len; i++){
		let curr = +arr[i] || arr[i]
		
		if(typeof curr == 'number'){
			stack.push(curr)
			continue
		}

		if(dualOperations.has(curr) && (stack.length > 1)){
			let n2 = stack.pop()
			let n1 = stack.pop()

			stack.push(calc(n1, n2, curr))
			continue
		}

		if(singleOperations.has(curr) && (stack.length > 0)){
			let n1 = stack.pop()

			stack.push(calc(n1, null, curr))
			continue
		}

		return "Error"
	}

	function calc(num1, num2, operator){
		switch(operator){
			case '+':
				return num1 + num2
			case "-":
				return num1 - num2
			case '/':
				return num1 / num2
			case "*": 
				return num1 * num2
			case "sqrt":
				return Math.sqrt(num1)
		}
	}

	return stack.length !== 1 ? 'Error' : stack[0]
}

module.exports = reversePolish