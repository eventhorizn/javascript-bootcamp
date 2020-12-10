// Importing Module

// One way w/o namespace
// import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js'; // don't need the .js extension
// addToCart('bread', 5);
// console.log(price, totalQuantity);

console.log('Importing module');

// With namespace
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

// Imports from default export
// usually don't import multiple times
// cart is a live connection to the module
import add, { cart } from './shoppingCart.js'
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);