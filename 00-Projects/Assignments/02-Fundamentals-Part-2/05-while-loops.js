// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and
//    Continuing', but this time using a while loop(call the array 
//    'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or 
//    the while loop?

const worldPopulation = 7900;
const populations = [10, 1441, 332, 83];
const percentages = [];

const percantageOfWorld = function (population) {
    return population / worldPopulation * 100;
}

let i = 0;

while (i < populations.length) {
    const perc = percantageOfWorld(populations[i]);
    percentages.push(perc);
    i++;
}

console.log(percentages);