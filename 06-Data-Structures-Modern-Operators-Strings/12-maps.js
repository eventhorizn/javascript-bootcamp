const openingHours = {
    thur: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// Maps: map values to keys
// Keys can have any type (object keys are always strings)
// ES2020
// Overlap w/ maps and sets (both introduced at same time)

// easiest way to create map is to create empty map
const rest = new Map();

// Add element
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// Can chain
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.size);

const time = 21;
// result will be true or false and will map to open or close string
// not super readable however
rest.get(time > rest.get('open') && time < rest.get('close'));


// does map contain key?
console.log(rest.has('categories'));

// delete
rest.delete(2);
console.log(rest);

// clear
//rest.clear();


rest.set([1, 2], 'Test');
console.log(rest);
// This won't get you the value b/c it's not the same object in heap
console.log(rest.get([1, 2]));

// How to make it work
const arr = [2, 1];
rest.set(arr, 'Test');
console.log(rest.get(arr));


// Using maps w/ html
// run in script.js
//rest.set(document.querySelector('h1'), 'Heading');



// populate a map w/o set method
// Same type of Object.entries
const question = new Map([
    ['question', 'What is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again']
]);
console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


// Maps are also iterables
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const answer = 3;
console.log(question.get(answer === question.get('correct')));


// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log(question.values());