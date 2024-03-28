/*
Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test the function with various patterns and strings.
*/
//Ans-:

function validateString(pattern,string){
    return pattern.test(string)
}


console.log(validateString(/hello/,'hello world')) // true

console.log(validateString(/123/,'abcd123')) //true

console.log(validateString(/@/,'asdfasdf')) //false

