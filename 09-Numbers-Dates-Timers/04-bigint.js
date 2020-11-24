// biggest number js can represent
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// sometimes we need bigger numbers than that
// ES2020 BigInt
console.log(4864454537845486754548675457478484n);
console.log(BigInt(4864454537845486754548675457478484));

// Operations
console.log(10000n + 10000n);

console.log(1545645345345345313574865415313n * 1000000n);

// Can't mix
const huge = 45454154454515485421564445745n;
const num = 23;
console.log(huge * num);

console.log(huge * BigInt(num)); // need to convert

console.log(20n > 15); // works

console.log(20n === 20); // false, different types
console.log(20n == 20); // true, js does type conversion
console.log(20n == '20');

console.log(huge + ' is REALLY big');

// Can't do sqrt
console.log(Math.sqrt(16n));

// Divisions
console.log(10n / 3n); // cuts off decimal part
console.log(10 / 3);