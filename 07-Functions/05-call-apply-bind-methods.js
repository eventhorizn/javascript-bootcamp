'use strict'

// setting 'this' keyword manually
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
};

lufthansa.book(239, 'Gary Hake');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};

const book = lufthansa.book;

// Does NOT work
// Causes an issue w/ the 'this' keyword
//book(23, 'Sara Williams');

// Calls the 'call' method which has 'this' as a parameter
book.call(eurowings, 23, 'Sarah Willaims');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iatacode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


// Apply method
// same as call, but takes array instead of param list
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// better way
book.call(swiss, ...flightData);



// Bind method
// book.call(eurowings, 23, 'Sarah Willaims');
// returns new function w/ this set to eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');


// Can also pass in params
// Called partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Gary Hake');
bookEW23('Martha Cooper');


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}
// 'this' is the buy button
//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// manually set the this keyword
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// we don't care about 'this'
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Re-write as function return function

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTax(0.23);
console.log(addVAT2(100));