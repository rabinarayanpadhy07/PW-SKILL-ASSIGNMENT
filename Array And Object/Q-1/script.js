/*
Q-1. In the following shopping cart add, remove, and edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
-add 'Meat' in the beginning of your shopping cart if it has not been already added
-add Sugar at the end of you shopping cart if it has not been already added
-remove 'Honey' if you are allergic to honey
-modify Tea to 'Green Tea'
*/

// Ans

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
	shoppingCart.unshift('Meat');
}

//add Sugar at the end of your shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
	shoppingCart.push('Sugar')
}


//Verify if allergic or not

const allergic = true

//if allergic it will remove honey from cart 
if (allergic) {
	const index = shoppingCart.indexOf('Honey');
	if (index !== -1) {
		shoppingCart.splice(index, 1);
	}
}


//modify tea to green tea
const indexOfTea = shoppingCart.indexOf('Tea')

shoppingCart[indexOfTea] = 'Green Tea'

console.log(shoppingCart) 
// [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]