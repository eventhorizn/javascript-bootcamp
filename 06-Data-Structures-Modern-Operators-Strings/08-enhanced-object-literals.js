'use strict';

// another new way to access object literals in an array
const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
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

// restaraunt object is an 'object literal'
// we literally wrote the object
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    // order: function (starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },

    // orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    //     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    // },

    // orderPasta: function (ing1, ing2, ing3) {
    //     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    // },

    // orderPizza: function (mainIngredient, ...otherIngredients) {
    //     console.log(mainIngredient);
    //     console.log(otherIngredients);
    // }

    // New ES6 syntax
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

console.log(restaurant);

