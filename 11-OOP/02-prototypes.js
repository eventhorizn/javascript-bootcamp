
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // Each copy of object has a copy of this function
    // We will use prototypes instead
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

const gary = new Person('Gary', 1989);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(Person.prototype);

// Each function in js has a prototype property
// When creating a shared function for an object
// use it's prototype property
// Prototypal inheritance
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

// Every method/object has access to it's prototype's methods
gary.calcAge();
matilda.calcAge();

// calcAge is not part of the object
// Only on the prototype
console.log(gary);
// When calling the 'new' method, we link to the prototype of Class
// __proto___ = Object.prototype
console.log(gary.__proto__);
console.log(gary.__proto__ === Person.prototype);

// the 'prototype' property is really the 'prototypeOfLinkedObjects'
console.log(Person.prototype.isPrototypeOf(gary));    // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person));  // false


Person.prototype.species = 'Homo Sapiens';
console.log(gary, matilda); // In Prototype
// Not its own property
console.log(gary.species, matilda.species);

console.log(gary.hasOwnProperty('firstName')); // true
console.log(gary.hasOwnProperty('species'));   // false


// Prototypal Inheritance on Built-In Objects
console.log(gary.__proto__);           // Person.prototype
console.log(gary.__proto__.__proto__); // Object.prototype
console.log(gary.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);



// Built in Objects
const arr = [3, 5, 6, 7, 8, 4, 3, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// Generally not a good idea
// Next version of js might add a function w/ same name
// that works differently
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

console.dir(x => x + 1);   // Has a prototype (functions are objects)