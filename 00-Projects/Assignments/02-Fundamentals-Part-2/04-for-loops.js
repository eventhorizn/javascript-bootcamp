// 1. There are elections in your country! In a small town, there are only 50 
//    voters. Use a for loop to simulate the 50 people voting, by logging a 
//    string like this to the console(for numbers 1 to 50): 'Voter number 1 is 
//    currently voting'

for (var voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}

// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
//    percentages of the world population for the 4 population values.Use the
//    function 'percentageOfWorld' that you created earlier
// 3. Confirm that 'percentages' contains exactly the same values as the
//    'percentages' array that we created manually in the previous assignment,
//    and reflect on how much better this solution is

const worldPopulation = 7900;
const populations = [10, 1441, 332, 83];
const percentages = [];

const percantageOfWorld = function (population) {
    return population / worldPopulation * 100;
}

for (let i = 0; i < populations.length; i++) {
    const perc = percantageOfWorld(populations[i]);
    percentages.push(perc);
}

console.log(percentages);


// 1. Store this array of arrays into a variable called 'listOfNeighbours'
//    [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the 
//    entire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this.This is actually a bit 
//    tricky, so don't worry if it's too difficult for you! But you can still 
//    try to figure this out anyway

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbours[i][j]}`);
    }
}