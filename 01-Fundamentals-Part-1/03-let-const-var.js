// let is blocked scoped
// var is function scoped

let age = 30; // can change
age = 31;

// for clean code, start w/ const, then move to let if it needs to
// if you're sure the value will change, use let
// it's best practice to limit variable change
const birthYear = 1991;
// birthYear = 1990; // can't change
// const job; // not legal, can't declare empty const

// should be completely avoided (legacy)
// old way prior to ES6
var job = 'programmer';
job = 'teacher'

// it's not mandatory to declare variables at all
// but this is declared globally
lastName = 'Hake';
console.log(lastName);