/*
Q5. You are building a shipping application. Write a program that takes the type of package ("standard","express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and overnight" would be delivered the next day.
*/

// Ans :-
function calculateDeliveryTime(package) {
    let result = ''
    switch (package) {
        case 'standard':
            result = 'might take 3-5 days'
            break;

        case 'express':
            result = '1-2 days'
            break;

        case 'overnight':
            result = 'would be delivered the next day'
            break;

        default:
            result = 'please enter a valid package type'
            break;
    }
    return result
}

const result = calculateDeliveryTime('express')
console.log(result) 
//1-2 days