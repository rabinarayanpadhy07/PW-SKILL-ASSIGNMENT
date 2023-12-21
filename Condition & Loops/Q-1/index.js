/*
Question: What is a conditional statement? Explain conditional statement with syntax and example.

Answer: A conditional statement, also known as an "if statement," is a programming construct that allows you to execute different blocks of code based on whether a specified condition evaluates to true or false. It helps control the flow of a program by determining which set of instructions to execute.

Syntax:
if(condition){
	Execute this block of code if the condition is true
}else{
	Execute this block of code if the condition is false
}
*/

// Example

let num = 2;

if(num%2==0){
	console.log("Even");
}else{
	console.log("Odd");
}

