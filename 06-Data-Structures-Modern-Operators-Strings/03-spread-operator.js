'use strict';

// Unpacks an array
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
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
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// similar to destructuring...but
// unpacks everything
// doesn't create new variables
// can only use it in places where you'd use comma separated values


// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 (or more) arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// spread works on all iterables
// arrays, strings, maps, sets. NOT objects
const str = 'Gary';
const letters = [...str, ' ', 'S.'];
console.log(letters);


const ingredients = [
    'pasta',
    'sauce',
    'meat'
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);


// Objects
// since ES2018 spread works on objects even though it's not an iterable
const newRestaraunt = { foundedIn: 1988, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaraunt);

const restarauntCopy = { ...restaurant };
restarauntCopy.name = 'Ristorantre Roma';

console.log(restarauntCopy.name);
console.log(restaurant.name);