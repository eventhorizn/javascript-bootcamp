// Hoisting and TDZ in Practice
// This is mostly showing that certain things work in js, but they aren't
// best practices
// functions at the top of the script
// variables at the top of scope
// never use var

// Variables
console.log(me); // can do this, undefined
// console.log(job); // can't do this
// console.log(year); // can't do this

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // not going to work due to const
console.log(addArrow);
// console.log(addArrow(2, 3));

// any variables declared w/ var are hoisted and set to undefined
// consts are not hoisted
// regular function declaration is the only one that works

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);