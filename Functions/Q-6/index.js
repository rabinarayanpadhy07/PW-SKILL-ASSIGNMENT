function curry(func) {
	"use strict";
	return function curriedFn(...args) {
		if (args.length >= func.length) {
			return func(...args);
		}
		return (...remainingArgs) => curriedFn(...args, ...remainingArgs);
	};
}

function add(a, b) {
	return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)); // Output: 3
console.log(curriedAdd(1, 2)); // Output: 3
