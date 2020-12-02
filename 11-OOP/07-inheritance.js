// 1. Constructor Functions

const PersonCon = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

PersonCon.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    PersonCon.call(this, firstName, birthYear);
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    this.course = course;
};

// Linking prototypes
// Set up inheritance
// Need to do this before we add any methods
// Otherwise methods would get overwritten
Student.prototype = Object.create(PersonCon.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.dir(Student.prototype.constructor);

// Object.create sets the constructor to the PersonCon
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Prototype Chain
console.log(mike instanceof Student);
console.log(mike instanceof PersonCon);
console.log(mike instanceof Object);

// 2. ES6 Classes

// 3. Object.create