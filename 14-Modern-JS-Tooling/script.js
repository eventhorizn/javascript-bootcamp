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