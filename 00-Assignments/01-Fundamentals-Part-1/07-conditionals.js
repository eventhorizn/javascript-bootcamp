// 1. If your country's population is greater that 33 million, log a string
//    like this to the console: 'Portugal's population is above average'. 
//    Otherwise, log a string like 'Portugal's population is 22 million below 
//    average' (the 22 is the average of 33 minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and 
//    then to 130. See the different results, and set the population back to 
//    original

const country = 'United States';
const continent = 'North America';
const language = 'English';
//let population = 256;
let population = 13;

if (population > 33) {
    console.log(`${country} population is above average`);
} else {
    const result = 33 - population;
    console.log(`${country} population is ${result} below average`);
}