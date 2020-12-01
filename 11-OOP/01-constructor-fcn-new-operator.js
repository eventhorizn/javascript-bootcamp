'use strict';

// constructor functions start w/ capital
// Arrow function doesn't work, no 'this' keyword
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // Each copy of object has a copy of this function
    // We will use prototypes instead
    this.calcAge = function () {
        console.log(2037 - this.birthYear);
    }
}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}
const gary = new Person('Gary', 1989);
console.log(gary);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975)
console.log(matilda, jack);

// it's not technically an 'instance', but in practice it is
console.log(gary instanceof Person);