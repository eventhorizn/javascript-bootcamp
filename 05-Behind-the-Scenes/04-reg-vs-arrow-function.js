// Regular Functions vs. Arrow Functions
// so if we uncomment this out, greet below would show Matilda
// var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1 Not using an arrow function
        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        // Using arrow function, this is parent's this
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    // this is global this
    // greet is var, never use arrow function as a method
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// doesn't exist in arrow functions
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);