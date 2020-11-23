const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// convert to US dollars
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
    return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

// arrow function
// potentially harder to read
// good for small callback functions
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDArrow);

// same thing, but w/ a loop
const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);


// Exploring map a bit more
const movementDescr = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withrdrew'} ${Math.abs(mov)}`
);
console.log(movementDescr);