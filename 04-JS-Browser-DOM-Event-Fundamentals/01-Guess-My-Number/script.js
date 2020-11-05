'use strict';

// DOM Manipulation
// same way we'd select it in css
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct Number!"
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;


// Event Listener
// check button element
// event listener needs an action, and a function to do once action is performed
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // guess will be 0 if nothing is in the box
    if (!guess) {
        document.querySelector('.message').textContent = "No number!"
    }
});