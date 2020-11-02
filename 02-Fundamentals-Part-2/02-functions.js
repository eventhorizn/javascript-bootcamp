// Functions

function logger() {
    console.log("My name is Gary");
}

// invoke, running, calling function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleJuice);


// Function Declarations vs. Expressions

// which one to do?
// expressions require you to declare them first
// I prefer declarations

// can call declarations before expressions
const age1 = calcAge1(1991);

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function expression
// it returns a value
// function is called an anonymous function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow Functions

// type of function expresion
// one-liner doesn't need return
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    retirement`${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Gary'));



// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));