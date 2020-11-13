// Set: Collection of unique values

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(ordersSet);

// strings are iterables
console.log(new setInterval('Gary'));

// size of set
console.log(ordersSet.size);

// Check if element exists
console.log(ordersSet.has('Pizza'));

// Add elemenet
ordersSet.add('Garlic Bread');

// Delete element
ordersSet.delete('Garlic Bread');

// Retrieve items from a set
// No indexes in a set, no way to retrieve values
// The idea is that all you need to do is see if a value exists in a set
// But looping is possible
for (const order of ordersSet) {
    console.log(order);
}

// Main use of sets is to remove duplicates from array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
//const staffUnique = [...new Set(staff)];

// Use spread operator
const staffUniqueArr = [...staffUnique];
console.log(staffUniqueArr);


// unique letters in a string
console.log(new Set('blahdkfjteljrdahhhhhdlf').size);