const account = {
    owner: 'Gary',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

// Getter
console.log(account.latest);

// Setter
account.latest = 50;
console.log(account.movements);


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
}

const jessica = new Person('Jessica Davis', 1996);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);

// Should get error
//const walter = new Person('Walter', 1965);