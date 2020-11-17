const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('---- FOR OF ----');
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

console.log('---- FOR EACH ----');
// Calls function for each element
movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});

// What if you needed a counter variable?
console.log('---- FOR OF ----');
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You Depositved ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('---- FOR EACH ----');
// first is element, second is index, third is array
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You Depositved ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});

// You cannot break out of a forEach loop
// Break doesn't work


// forEach also works on Maps and Sets
// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`); // key is the same as value
})