'use strict';

const bookings = [];

// Default parameters
// Can reference params declared before (price = 199 * numPassengers)
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    //numPassengers = numPassengers || 1; //falsy value
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// How to skip parameters
createBooking('LH123', undefined, 1000);
