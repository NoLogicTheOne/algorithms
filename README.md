# Algorithms
base algorithm i should know for success in progamming

### Knut-Morris-Pratt

> Knuth–Morris–Pratt string-searching algorithm (or KMP algorithm) searches for occurrences of a "word" W within a main "text string" S by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin, thus bypassing re-examination of previously matched characters.
> - [Link to Wiki](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) 

Also contains a prefix function && tests to it

In fact, in JS the algorithm does not make sense, because of the String.prototype.includes
But no one knows when I'll have to change my language

### Reverse Polish
directory name: reverse_polish

> Reverse Polish notation (RPN), also known as Polish postfix notation or simply postfix notation, is a mathematical notation in which operators follow their operands, in contrast to Polish notation (PN), in which operators precede their operands. It does not need any parentheses as long as each operator has a fixed number of operands. The description "Polish" refers to the nationality of logician Jan Łukasiewicz,[1] who invented Polish notation in 1924
> - [Link to Wiki](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

ex. ```"1,2,*"``` will return 2

ex. ```"1,2,3,*,-"``` will return -5

Input must be a string, operands divided by comma

Function supports the following set of operators:
* Dual
	* "+"
	* "-"
	* "/"
	* "*"
* Single
	* sqrt

Returns the result of the expression or Error if the expression is incorrect or contains unregistred caracters

### toReversePolish
directory name: to_reverse_polish

The function takes an equation string and converts it to the reverse Polish notation

This is magic, because now the equation of the form `23 + (46 - sqrt(6 * 5 + 12))` and its like are translated into a form for easy calculation!

### meatMiddle
directory name: meatmiddle

This is an implementation of the algorithm for finding triplets with a sum less than the specified one

thanks to an algorithm called meat middle, the time complexity `O(logn*n^2)` is achieved

