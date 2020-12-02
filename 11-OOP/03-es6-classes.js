// class expression
const PersonExpr = class { };

// class declaration
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Still assigning to prototype
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }
}

const jessica = new Person('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === Person.prototype);

// Person.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet()