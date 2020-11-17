let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice Method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// Shallow copy
console.log(arr.slice());


// Splice Method
// Mutates array, where slice does not
console.log(arr.splice(2));
console.log(arr); // What's left after the splice

// Common use case is to remove last element
arr.splice(-1);


// Reverse
// Does mutate original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);


// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);


// Join
console.log(letters.join(' - '));