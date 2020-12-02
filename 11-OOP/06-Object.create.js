// Third way to do prototypal inheritance
// Different than the other 2
// Manually sets prototype from one Object to Another
// Least  used way
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
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();