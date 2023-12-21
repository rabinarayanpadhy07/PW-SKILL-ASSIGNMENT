/* Question: What are loops, and what do we need them? Explain different types of loops with their syntax and examples.

Answer: Loops are control structures in programming that allow you to repeat a block of code multiple times. They are essential for automating repetitive tasks and for iterating over data structures like arrays or lists. Loops help in making code more concise, efficient, and readable.

Different types of loops are: 

i- for loop 

'for' loop iterates over a sequence (here, the range function).

Syntax:
*/ 

for (let index = 1; index < array.lenght; index++) {
	const element = array[index];
}

/*
ii- while loop

'while' loop repeats until a specified condition becomes false.

Syntax:
*/

while (condition) {
	//Code
}

/*
iii- do-while loop

do-while loop (simulated with a while loop) always executes the code block at least once and then repeats while a specified condition is true.

Syntax:
*/

do {
	//Code
} while (condition);
