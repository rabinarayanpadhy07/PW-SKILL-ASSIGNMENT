/*
Q3.Write a JavaScript program that demonstrates the use of character classes in regular expressions.Create a function that searches for specific character classes in a given string and returns the matches. Test the function with patterns for digits, uppercase letters, lowercase letters, and special characters.
*/

// Answer:

function searchCharacterClasses(inputString) {
    const digitPattern = /\d/g;
    const uppercasePattern = /[A-Z]/g;
    const lowercasePattern = /[a-z]/g;
    const specialCharPattern = /[^A-Za-z0-9]/g;

    const digitMatches = inputString.match(digitPattern);
    const uppercaseMatches = inputString.match(uppercasePattern);
    const lowercaseMatches = inputString.match(lowercasePattern);
    const specialCharMatches = inputString.match(specialCharPattern);

    return {
        digits: digitMatches,
        uppercaseLetters: uppercaseMatches,
        lowercaseLetters: lowercaseMatches,
        specialCharacters: specialCharMatches
    };
}

const testString = "Hello123!";

console.log(searchCharacterClasses(testString));

/*
Output: 
{
            digits: [ '1', '2', '3' ],
            uppercaseLetters: [ 'H' ],
            lowercaseLetters: [ 'e', 'l', 'l', 'o' ],
            specialCharacters: [ '!' ]
        }
*/
