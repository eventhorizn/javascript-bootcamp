// 1. Recreate the 'description' variable from the last assignment, this time
//    using the template literal syntax

// const description =
//     country +
//     ' is in ' +
//     continent +
//     ', and its ' +
//     population +
//     ' million people speak ' +
//     language;
// console.log(description);

const country = 'United States';
const continent = 'North America';
const language = 'English';
let population = 256;

const description = `${country} is in ${continent} and its ${population} million people speak ${language}`

console.log(description);