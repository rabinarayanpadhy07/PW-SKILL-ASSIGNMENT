/***
 * (Q) Create a simple polyfill for the Array.includes method by the name of customIncludes ?
 * 
 */
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (element, fromIndex) {
        // Handle the optional fromIndex parameter
        if (fromIndex === undefined) {
            fromIndex = 0;
        }

        // If fromIndex is negative, calculate the start index from the end of the array
        if (fromIndex < 0) {
            fromIndex = Math.max(this.length + fromIndex, 0);
        }

        // Loop through the array and check if the element is present
        for (let i = fromIndex; i < this.length; i++) {
            if (this[i] === element || (Number.isNaN(element) && Number.isNaN(this[i]))) {
                return true;
            }
        }

        return false;
    };
}

// Example usage:
const array = [1, 2, 3, 4, 5];

console.log(array.customIncludes(3));        // Output: true
console.log(array.customIncludes(6));        // Output: false
console.log(array.customIncludes(3, 3));     // Output: false
console.log(array.customIncludes(3, -3));    // Output: true
console.log(array.customIncludes(NaN));      // Output: false

// To test NaN inclusion
const arrayWithNaN = [1, 2, NaN, 4, 5];
console.log(arrayWithNaN.customIncludes(NaN)); // Output: true
