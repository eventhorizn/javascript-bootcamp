// Create a Date
const now = new Date();
console.log(now); // current date and time

// Parse a Date
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};
console.log(new Date(account1.movementsDates[0]));


// month is 0 based
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // convert days to milliseconds


// Dates are objects, so have methods
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // remember 0 based
console.log(future.getDate());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // timestamp

console.log(new Date(22142256980000));

console.log(Date.now()); // current timestamp

future.setFullYear(2040);
console.log(future);


// Operations with Dates
console.log(Number(future));
console.log(+future);


const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);


// Internationalization
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
};
const locale = navigator.language;
console.log(new Intl.DateTimeFormat(locale, options).format(now));
console.log(new Intl.DateTimeFormat('en-GB', options).format(now));
console.log(new Intl.DateTimeFormat('ar-SY', options).format(now)); 