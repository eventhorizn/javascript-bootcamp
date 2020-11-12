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
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// User ANY data type, return ANY data type, short-circuit
// OR opeerator
console.log(3 || 'Gary'); // Gary

// short-circuting
// if first operand is truthy, it returns first value
console.log('' || 'Gary'); // Gary
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is first truthy value in chain



// Won't work when numGuests = 0 (if it equals anything)
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10



// AND operator
// opposite of OR (stops at first falsy) or last truthy value
// Only true if all are true
console.log(0 && 'Gary'); // 0
console.log(7 && 'Gary'); // Gary

// goes till first falsy value
console.log('Hello' && 23 && null && 'gary');

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPasta('mushrooms', 'spinach');
}

// yea, this is cool but not readable
restaurant.orderPizza && restaurant.orderPasta('mushrooms', 'spinach');