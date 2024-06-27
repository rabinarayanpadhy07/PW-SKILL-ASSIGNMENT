/**
 * Question: Q4.Compare Promises to callbacks and discuss why Promises are preferred for managing asynchronous code.
 * 
 * ANS-:
 * 
 * Comparing Promises to callbacks and discussing why Promises are preferred for managing asynchronous code:
 * 
 * Promises are preferred over callbacks for managing asynchronous code due to their improved readability, error handling, and chaining capabilities. 
 * 
 * Callbacks can lead to callback hell, making the code difficult to read and maintain, especially when dealing with multiple asynchronous operations. Promises, on the other hand, allow for a more sequential and organized flow of asynchronous operations through chaining.
 * 
 * Promises also provide built-in error handling through the use of .catch(), making it easier to handle errors in asynchronous code compared to traditional callbacks where error handling needs to be explicitly implemented within each callback.
 * 
 * Additionally, Promises support features like Promise.all() and Promise.race() for handling multiple asynchronous operations concurrently or in a race condition, which can be cumbersome to achieve with callbacks.
 */
