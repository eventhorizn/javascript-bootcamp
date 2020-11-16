const airline = 'TAP Air Portugal';
const plane = 'A320';

// character at certain position
console.log(plane[0]);
console.log('B737'[0]);


// length
console.log(airline.length);
console.log('B737'.length);


// methods
console.log(airline.indexOf('r')); // first occurence
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // case sensitive


// slice
console.log(airline.slice(4)); // beginning number
console.log(airline.slice(4, 7));


// extract first word
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));


// negative begin and end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


// extracting parts of strings
const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);

    if (s === 'E' || s === 'B') {
        console.log('You got the middle seat');
    } else {
        console.log('You got lucky');
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// strings are primitives, so why do they have methods?
// js converts string primitives to string objects w/ same values
// called crossing
// when method is done, back to primitive
console.log(new String('gary'));


// Changing a string
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());


// Fix capitalization in name
const passenger = 'gArY'; // Gary
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);


// Compare email
const email = 'hello@gary.io';
const login = '  Hello@gary.Io \n';

const lowerEmail = login.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// all in one step
const normalizedEmail = login.toLocaleLowerCase().trim();
console.log(email === normalizedEmail);


// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
    'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));

// regular expression blegh
console.log(announcement.replace(/door/g, 'gate'));



// Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));

console.log(plane1.startsWith('Air'));

if (plane1.startsWith('A32') && plane1.endsWith('neo')) {
    console.log('Part of new Airbus family');
}


// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard');
    }
}

checkBaggage('I have a laptop, some food, and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun');



// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Gary Hake'.split(' '));

const [firstName, lastName] = 'Gary Hake'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);



const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        //namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }

    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');


// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); //entire length of string is 25
console.log('Gary'.padStart(25, '+'));

console.log(message.padEnd(35, '+'));


const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);

    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4337852575131478))
console.log(maskCreditCard('1234123412341234'));



// Repeat
const message1 = 'Bad weather...All Departures Delayed... ';
console.log(message1.repeat(5));


const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);