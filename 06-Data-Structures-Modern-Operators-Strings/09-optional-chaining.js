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

// restaraunt object is an 'object literal'
// we literally wrote the object
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

// mon doesn't exist yet
if (restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

// but the real issue is...can we be sure openingHours exits?
// get's out of hand w/ deeply nesteed objects
if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

// ES2020 Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
    const open = restaurant.openingHours[day]?.open;
    console.log(`On ${day}, we open at ${open}`);
}


// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');


// Arrays
const users = [
    { name: 'Gary', email: 'hello@gary.com' }
];

console.log(users[0]?.name ?? 'User array empty');