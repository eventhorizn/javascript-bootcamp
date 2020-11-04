// 1. Create an array containing 4 population values of 4 countries of your
//    choice. You may use the values you have been using previously. Store this 
//    array into a variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not(true or false)
// 3. Create an array called 'percentages' containing the percentages of the
//    world population for these 4 population values. Use the function
//    'percentageOfWorld1' that you created earlier to compute the 4
//    percentage values
const worldPopulation = 7900;

function percantageOfWorld1(population) {
    return population / worldPopulation * 100;
}

const populations = new Array(1141, 256, 44, 25);

console.log(populations.length === 4);

const percentages = [
    percantageOfWorld1(populations[0]),
    percantageOfWorld1(populations[1]),
    percantageOfWorld1(populations[2]),
    percantageOfWorld1(populations[3])
];
console.log(percentages);


// 1. Create an array containing all the neighbouring countries of a country of 
//    your choice. Choose a country which has at least 2 or 3 neighbours. Store 
//    the array into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the 
//    neighbourhood of your selected country. So add it to the end of the 
//    'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove 
//    it from the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to 
//   the console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find 
//    the index of the country in the 'neighbours' array, and then use that 
//    index to change the array at that index position. For example, you can 
//    search for 'Sweden' in the array, and then replace it with 'Republic of 
//    Sweden'.

const neighbors = ['Norway', 'Sweden', 'Russia'];

neighbors.push('Utopia');

neighbors.pop();

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country');
}

neighbors[neighbors.indexOf('Sweden')] = 'Repulic of Sweden';

console.log(neighbors);