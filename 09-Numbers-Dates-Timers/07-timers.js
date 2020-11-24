// Code execution does not stop once you set a timer
// Called asynchronous js

// Set Timeout
setTimeout(() => console.log('Here is your pizza'), 3000);
console.log('Waiting...'); // proves that execution continues

setTimeout((ing1, ing2) => console.log(`Here is your pizza ${ing1} and ${ing2}`), 3000, 'olives', 'spinach');


const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza ${ing1} and ${ing2}`), 3000, ...ingredients);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);



// setInterval
setInterval(function () {
    const now = new Date();
    console.log(now);
}, 1000);