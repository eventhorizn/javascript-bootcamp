const flight = 'LH234';
const gary = {
    name: 'Gary Hake',
    passport: 24739479284
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'; // don't do this
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Check in');
    } else {
        alert('Wrong passport!');
    }
}

checkIn(flight, gary);

// flight is a primitive type
// so it's passed by value
console.log(flight); // Wasn't changed
// objects passed by ref
// point to same object
console.log(gary); // Was changed


// interactions w/ functions w/ same object can cause problems
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(gary);
checkIn(flight, gary);


// Javascript does NOT have by reference, even though it looks like it does
// The reference above is just a value...but functionally it's the same thing