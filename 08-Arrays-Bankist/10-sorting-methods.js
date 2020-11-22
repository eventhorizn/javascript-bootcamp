const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// sorting
// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // alphabetically
console.log(owners); // mutates original array

// numbers
console.log(movements);
//console.log(movements.sort()); // numbers are not what we expect
// sorting does it by string sorting, even on numbers

// write your own w/ compare function
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// ascending order
movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
});
console.log(movements);

// Another way to do this
movements.sort((a, b) => a - b);
console.log(movements);

// descending
movements.sort((a, b) => {
    if (a < b) return 1;
    if (b > a) return -1;
});
console.log(movements);

// Another way to do this
movements.sort((a, b) => b - a);
console.log(movements);
