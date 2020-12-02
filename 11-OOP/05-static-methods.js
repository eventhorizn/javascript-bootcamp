// Array.from is a good example
Array.from(document.querySelectorAll('h1'));

// from is attached to constructor
// not on prototype
//[1, 2, 3].from; // doesn't work


class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Still assigning to prototype
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Issue is that we are trying to set an existing variable
    // So, need a paired setter
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name`)
        }
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log('Hey there');
    }
};

// Static method constructor function
// const Person = function (firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never do this
//     // Each copy of object has a copy of this function
//     // We will use prototypes instead
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // }
// }
// Person.hey = function () {
//     console.log('Hey there');
// }

Person.hey();

