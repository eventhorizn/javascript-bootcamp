const firstName = 'Gary';
const job = 'programmer';
const birthYear = 1989;
const year = 2037;

const gary = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(gary);

// template literal (string interpolation)
// Notice the `` instead of '' or ""
const garyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(garyNew);

// You can just always use the `` ticks if you want
// Don't have to worry about single/double in the case of "I'm"
console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

// template strings making things easier
console.log(`String
multiple
lines`);