import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

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