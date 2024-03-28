/*Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.The inner function should access both the parameter of outerFunction and a variable declared within outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing. 
*/
// Ans-:
function outer(a) {
    let c = 10
    return function inner(b) {
        return a + b + c
    }
}

let sum = outer(5)

let result = sum(1)

console.log(result) 
// 16