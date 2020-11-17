// Closures aren't a feature we explicitly use
// Happen automatically in certain situations

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

// How can the booker function increment a variable that's not on the stack?
// secureBooking function technically no longer exists
booker();
booker();
booker();

// Closure: Every function has access to the variable environment of the 
//          execution context in which it was created. Even if that EC is gone
// A closure gives a function access to all the variables of its parent function
// even after the parent function has returned. The function keeps a reference
// to its outer scope, which preserves the scope chain throughout time
// A closure makes sure that a function doesn't loose connection to variables
// that existed at the function's birth place

// Take a look at the variables inside of a closure
console.dir(booker);



// Creating closures
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

g();
f(); // g doesn't exist anymore, but f has access to a

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

// Re-assigning f function
h();
f();
console.dir(f)


// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

// Scope chain priority
const perGroup = 1000;
boardPassengers(180, 3);