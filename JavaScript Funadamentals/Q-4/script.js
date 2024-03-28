/* Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not only checks if there is a match but also extracts specific parts of the matched text using groups. Test the function with patterns that include groups to capture different parts of a date (e.g., day, month, and year) from a given string. 
*/
// Ans :- 
function extractDateParts(pattern, inputString) {
    const regex = new RegExp(pattern);
    const match = inputString.match(regex);
    if (match) {
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return null;
    }
}

const datePattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
const testString = '25/12/2023'

const result = extractDateParts(datePattern,testString)
console.log(result) //{ day: '25', month: '12', year: '2023' }


