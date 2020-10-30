// type conversion
// we convert manually
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
// js automatically converts behind the scenes
// when an operator is dealing w/ two different types
console.log('I am ' + 23 + ' years old'); // plus triggers string addition
console.log('23' - '10' - 3); // minus triggers number conversion
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// uses number addition until it hits string
console.log(2 + 3 + 4 + '5');