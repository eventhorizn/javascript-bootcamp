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

class PersonES {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there');
    }
}

class StudentES extends PersonES {
    // You only need this if you are adding something to the constructor
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear); // base.new
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
            `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`
        );
    }
}

const martha = new StudentES('Martha Jones', 2012, 'Computer Science');
console.log(martha);

martha.introduce();
martha.calcAge();

// 3. Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    // like a constructor
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science')
jay.introduce();
jay.calcAge();