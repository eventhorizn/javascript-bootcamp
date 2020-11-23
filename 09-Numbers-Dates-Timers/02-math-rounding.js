// Square Root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Max
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); // does not parse

// Min
console.log(Math.min(5, 18, 23, 11, 2));

// PI Calculate area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random
console.log(Math.trunc(Math.random() * 6) + 1);

// gets us a random b/t min and max
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


// Rounding Integers
console.log(Math.trunc(23.3)); // removes decimal part

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3)); // always up
console.log(Math.ceil(23.9));

// floor and trunc work the same w/ positive nums
console.log(Math.floor(23.3)); // always down
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3)); // rounds 'up' w/ negative, which is better


// Rounding decimals
// So, we are calling a method on a primitive, but using boxing
// JS will transform to Number object, then return a primitive
console.log((2.7).toFixed(0)); // toFixed returns string
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2)); // + makes it a number