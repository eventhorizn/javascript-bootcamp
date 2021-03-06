// Event Types and Event Handlers

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
    alert('addEventListener: Great! You are reading the heading');

    h1.removeEventListener('mouseenter', alertH1); // only listens once
};

// Old school
// h1.onmouseenter = function (e) {
//     alert('addEventListener: Great! You are reading the heading');
// };

// New school/better
// Can add multiple listeners to same event
// Can remove handler if not needed
h1.addEventListener('mouseenter', alertH1);

// Can remove after a certain period of time
//setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000)


// Event Propagation

// rgb(255, 255, 255)
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// This shows how bubbling works
// Remove the jump on the nav__link
// Clicking the nav__link will bubble up the click events for parent elements

// target is the same, but currentTarget changes
// currentTarget is the same as 'this'
// The parameter after the function is a boolean
// it's the 'capture' setting, which is only used for historical purposes
document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);

    // Stop propogation
    // potentially dangerous
    // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
});