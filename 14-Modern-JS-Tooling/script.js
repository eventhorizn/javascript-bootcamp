// Don't need to do it this way
//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
};

// Shit copy, not a deep clone
const stateClone = Object.assign({}, state);
// Good copy
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

import add, { cart } from './shoppingCart.js'
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

// keeps your state when saving and reloading
if (module.hot) {
    module.hot.accept();
}

// Configuring Bable and Polyfilling
class Person {
    #greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}
const gary = new Person('Gary');

console.log('Gary' ?? null);

// This is es6 code and it's not converted by babel to es5 automatically
console.log(cart.find(el => el.quantity >= 2));
// Same w/ this
// New additions can't be transpiled, only syntax
// We can 'polyfill' them instead
Promise.resolve('Test').then(x => console.log(x));

// this is the package we use for polyfilling
// polyfilling recreates the function in the deployed code
import 'core-js/stable';

// Poplifilling async functions
import 'regenerator-runtime/runtime';