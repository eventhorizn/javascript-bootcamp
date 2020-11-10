'use strict';

// The this Keyword in Practice
console.log(this); // window global object

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined bc strict. its own this
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // window global object. arrow gets its parents this
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); // jonas object bc jonas is calling
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

// copying method
// this points to the object that calls the method
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // matilda object = this now

// causes an error
// this.age is undefined
const f = jonas.calcAge;
f();