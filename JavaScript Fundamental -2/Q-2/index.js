/*
Question : Describe the usage of comma operator in javascript and provide an example.

Solution and Answer:

In JavaScript, the comma operator , is used to evaluate multiple expressions, returning the result of the last expression. It is often used in situations where multiple expressions need to be executed, and the final result is only the result of the last expression.

*/

let a=1, b=2, c=3;

let result = (a++,b++,c++);

console.log(result);
console.log(a);
console.log(b);
console.log(c);