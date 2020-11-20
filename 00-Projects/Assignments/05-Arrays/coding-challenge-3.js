///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

/**
 * 
 * @param {Array} ages 
 */
const calcAverageHumageAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    console.log(humanAges);

    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);

    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    return average;
};

const calcAvgHumanAge = ages => ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// 4.
const avg1 = calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);