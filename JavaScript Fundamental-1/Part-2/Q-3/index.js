// Question: differentiate between unary,binary and ternaray operator in javascript

/*Unary operator

Number of operations: One

Example: '++','--','-','+'

Description: Unary operators operate on a single operand. For example, the unary typeof operator returns 			 a string indicating the type of the operand, and the ++ and -- operators increment and 				decrement a variable, respectively.
*/

let x = 5;

console.log(++x);

/*Binary Operators:

Number of Operands: Two

Example: +, -, *, /, %, ===, !==, &&, ||

Description: Binary operators work with two operands. For example, arithmetic operators like + and - perform addition and subtraction, relational operators like === and !== compare values, and logical operators like && and || perform logical AND and OR operations.

*/

let a = 5,
  b = 3;

console.log(a + b);

/*Ternary Operator:

Number of Operands: Three

Example: condition ? exprIfTrue : exprIfFalse

Description: The ternary operator is the only ternary operator in JavaScript. It takes three operands: a condition, an expression to be evaluated if the condition is true, and an expression to be evaluated if the condition is false. It provides a concise way to write simple conditional statements.
 */

let age = 20;
let result = age >= 18 ? 'Adult' : 'Minor';
console.log(result);  