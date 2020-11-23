// All numbers are represented as decimals
console.log(23 === 23.0);

// Base 10: 0 to 9
// Binary: 0 1
// should be 0.3 but it's not
console.log(0.1 + 0.2); // Binary base
// can't do  precise financial computations in js


// Convert
console.log(Number('23'));
console.log(+'23');


// Parsing
console.log(Number.parseInt('30px')); // string has to start w/ number
console.log(Number.parseInt('e23'));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('   2.5rem   '));
// Global functions, but it's recommended to use Number namespace
console.log(parseFloat('   2.5rem   '));


// Is a number
// Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// is finite
// better to check if it's a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

// is integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));